// Let's go autobots!

/**
 * Pulumi New Relic Provider
 * 
 * See Pulumi API Docs for more wizardy:
 * 
 * @link https://www.pulumi.com/registry/packages/newrelic/api-docs/
 */
import * as pulumi from '@pulumi/pulumi';
import * as newrelic from '@pulumi/newrelic';

// Applications to monitor
const apps = [
  'login-service',
  'web-api',
]

// TODO: Add tags here
import Tag from "./resources/Tags"

// Fetch an application by name
const myTeamTag = {
  key: 'team',
  values: ['acme_corp'],
}
apps.forEach(async name => {  
  const app = await newrelic.getEntity({
    name,
  })

  Tag(app, [
    myTeamTag,
    {
      key: 'env',
      values: ['staging'],
    }
  ])
})

// TODO: Add workloads here
import Workload from "./resources/Workloads"
const myWorkload = Workload(
  'O11yAsCode Workload Example (Pulumi)',
  `tags.team = 'acme_corp'`
)
export const workload_permalink = myWorkload.permalink

// TODO: Add dashboards here
import DashboardJson from "./resources/Dashboards"
const myTeamDashboard = DashboardJson(
  './dashboards/node.json',
  {
    name: 'O11y as Code Dashboard (Pulumi)'
  }
)
export const dashboard_permalink = myTeamDashboard.permalink

// TODO: Add email notification destinations here
const config = new pulumi.Config
import { emailDestination, emailChannel } from "./resources/Notifications"
const _emailDestination = emailDestination(config.require('notifyViaEmail'))


// TODO: Add alert imports here
let policies: { [key: string]: any } = {}
import AlertPolicy from './resources/AlertPolicy';
import NrqlAlertCondition from "./resources/NrqlAlertCondition"
import Workflow from "./resources/Workflow"

apps.forEach(async name => {

  // TODO: Add alert policies here
  policies[name] = AlertPolicy({
    name,
    /**
      * The rollup strategy for the policy.
      * Options include: `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. The default is `PER_POLICY`.
      */
    incidentPreference: 'PER_CONDITION',
  });

  // TODO: Add alert conditions here
  NrqlAlertCondition({
    name: `${name}-latency-condition`,
    policyId: policies[name].id.apply((id:any) => id),
    nrql: {
      query: `SELECT (count(apm.service.error.count) / count(apm.service.transaction.duration))*100 FROM Metric WHERE (appName ='${name}') AND (transactionType = 'Web')`,
    },
    dependsOn: policies[name],
  })

  NrqlAlertCondition({
    name: `${name}-error-condition`,
    policyId: policies[name].id.apply((id:any) => id),
    nrql: {
      query: `SELECT count(*) FROM TransactionError WHERE appName = '${name}'`,
    },
    dependsOn: policies[name],
  })

  // TODO: Add workflow notifications here
  const _emailChannel = emailChannel(_emailDestination)
  Workflow({
    name,
    policyName: policies[name].name.apply((name: string) => name),
    channelId: _emailChannel.id.apply((id: string) => id),
    dependsOn: [
      _emailDestination,
      _emailChannel,
    ]
  })
})

// TODO: Add synthetic monitors here
import SyntheticsMonitor from "./resources/SyntheticsMonitor"
let urls = [
  'http://acme-corp.com',
  'https://acme-corp.com/0101/index.html',
]
urls.forEach(url => SyntheticsMonitor({
  uri: url,
  // https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/administration/synthetic-public-minion-ips/#location
  locationsPublics: ['AWS_US_EAST_1', 'AWS_US_WEST_1'],
  enableScreenshotOnFailureAndScript: true,
  status: 'ENABLED',
  type: 'BROWSER',
  period: 'EVERY_MINUTE',
  verifySsl: true,
  runtimeTypeVersion: '100',
  runtimeType: 'CHROME_BROWSER',
  scriptLanguage: 'JAVASCRIPT',
  tags: [myTeamTag]
}))

// That's all folks :D