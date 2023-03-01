---
slug: alerts
id: hhxnnvggstn6
type: challenge
title: 'Lab: Alerts'
teaser: Creating Alerts, Workflows and Notifications
notes:
- type: text
  contents: |-
    # Creating Alerts, Workflows and Notifications

    In this challenge, you're tasked with
    - Creating alert policies for each app
    - Each app will monitor for latency and error rates
    - Configure an email destintation and channel
    - Adding a workflow for sending notifications when certain thresholds are met.
tabs:
- title: Terminal
  type: terminal
  hostname: docker-vm
  workdir: /newrelic/o11y
- title: Editor
  type: code
  hostname: docker-vm
  path: /newrelic
difficulty: basic
timelimit: 1200
---

🧪 Step 1: Explore o11y/index.ts
=======================
- Using the Editor tab, navigate to `o11y/index.ts`

```
vim o11y/index.ts
```

Explore what's possible by leveraging
- `o11y/resources/AlertPolicy.ts`
- `o11y/resources/NrqlAlertCondition.ts`
- `o11y/resources/Notifications.ts`
- `o11y/resources/Workflow.ts`

🧪 Step 2: Configure email notifications
=======================

- Import the email resources from notifications after `// TODO: Add email notification destinations here`
```
import { emailDestination, emailChannel } from "./resources/Notifications"
```

- Let's use `Pulumi.Config` to get the email used for our notifications.

```
const config = new pulumi.Config
```

- Create an email destination using an email pulled from pulumi's config: `notifyViaEmail`
```
const _emailDestination = emailDestination(config.require('notifyViaEmail'))
```

🧪 Step 3: Create Alert Policies
=======================

- import `AlertPolicy` after `TODO: Add alert imports before the forEach loop`

```
import AlertPolicy from './resources/AlertPolicy';
```

- Next create an `AlertPolicy` after `// TODO: Add alert policies and conditions here`

```
policies[name] = AlertPolicy({
  name,
  /**
    * The rollup strategy for the policy.
    * Options include: `PER_POLICY`, `PER_CONDITION`, or `PER_CONDITION_AND_TARGET`. The default is `PER_POLICY`.
    */
  incidentPreference: 'PER_CONDITION',
});
```

- run `pulumi up` to check your work.

🧪 Step 4: Create Alert Conditions
=======================

- import `NrqlAlertCondition` after `TODO: Add alert imports before the forEach loop`

```
import NrqlAlertCondition from "./resources/NrqlAlertCondition"
```

- create two `NrqlAlertCondition` conditions after `// TODO: Add alert conditions here`
```
NrqlAlertCondition({
  policyId: policies[name].id.apply((id:any) => id),
  name: `latency-condition-${name}`,
  nrql: {
    query: `SELECT (count(apm.service.error.count) / count(apm.service.transaction.duration))*100 FROM Metric WHERE (appName ='${name}') AND (transactionType = 'Web')`,
  },
  dependsOn: policies[name],
})

NrqlAlertCondition({
  policyId: policies[name].id.apply((id:any) => id),
  name: `error-condition-${name}`,
  nrql: {
    query: `SELECT count(*) FROM TransactionError WHERE appName = '${name}'`,
  },
  dependsOn: policies[name],
})
```

- run `pulumi up` to check your work.

🧪 Step 5: Setup Workflows
=======================

- import `Workflow` after `TODO: Add alert imports before the forEach loop`

```
import Workflow from "./resources/Workflow"
```

- Create a workflow and attach it to a new email channel and the previous email destination we created

- Add this after `// TODO: Add workflow notifications here`

```
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
```

- run `pulumi up` to check your work.

🏁 Step 6: Pulumi up
=======================

All set! Deploy your resources:

```
pulumi up
```

To complete the challenge, press **Check**
