---
slug: dashboards
id: aodo6f9wlnta
type: challenge
title: 'Lab: Dashboards'
teaser: Importing Dashboards from New Relic
notes:
- type: text
  contents: |-
    # Importing New Relic Dashboards from the UI

    In this challenge, you're tasked with
    - Using a pre-built dashboard to generate the dashboard.
    - (Optionally) make changes to the dashboard to suit your unique use cases.
    - Export the dashboard in json format and save it in the `/o11y/dashboards` directory.
    - Use the `DashboardJson` resource to import the custom dashboard back into New Relic.
tabs:
- title: Editor
  type: code
  hostname: docker-vm
  path: /newrelic
- title: Terminal
  type: terminal
  hostname: docker-vm
  workdir: /newrelic/o11y
difficulty: basic
timelimit: 600
---

🧪 Step 1: Explore o11y/index.ts
=======================

- Using the Editor tab, navigate to `o11y/index.ts`

```
vim o11y/index.ts
```

- Explore what's possible by leveraging `o11y/resources/Dashboards.ts`

🧪 Step 2: Import a dashboard from New Relic
=======================

Add this after `// TODO: Add dashboards here`
```
import DashboardJson from "./resources/Dashboards"
```

- Using the `DashboardJson` API, you can pass in a relative path to the dashboard json.
- The second argument allows you to optionally override parts of the dashboard.

```
const myTeamDashboard = DashboardJson(
  './dashboards/node.json',
  {
    name: 'O11y as Code Dashboard (Pulumi)'
  }
)
```

- Expose the URL to the dashboard
```
export const dashboard_permalink = myTeamDashboard.permalink
```

🏁 Step 3: pulumi up
=========

- Navigate to the terminal tab, `cd o11y`, run `pulumi up` and confirm the changes.

```
pulumi up
```

- Pulumi will output a `dashboard_permalink` value linking to your Dashboard!

To complete the challenge, press **Check**
