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

apps.forEach(async name => {
  console.log(name)
})

// TODO: Add tags here


// TODO: Add workloads here


// TODO: Add dashboards here


// TODO: Add email notification destinations here


// TODO: Add alert imports before the forEach loop
let policies: { [key: string]: any } = {}

apps.forEach(async name => {

  // TODO: Add alert policies here


  // TODO: Add alert conditions here


  // TODO: Add workflow notifications here

})

// TODO: Add synthetic monitors here


// That's all folks :D