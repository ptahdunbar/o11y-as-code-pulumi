---
slug: workloads
id: yw8i4fnnwm91
type: challenge
title: 'Lab: Workloads'
teaser: Use Workloads to organize your resources
notes:
- type: text
  contents: |-
    # Use Workloads to organize your resources

    In this challenge, you're tasked with
    - Creating a workload to organize all of your resources into one view
    - Workloads uses a common tag to group all resources together.
tabs:
- title: Editor
  type: code
  hostname: docker-vm
  path: /newrelic/o11y
- title: Terminal
  type: terminal
  hostname: docker-vm
  workdir: /newrelic/o11y
difficulty: basic
timelimit: 600
---

🧪 Step 1: Explore o11y/index.ts
=======================

Using the Editor tab, navigate to `o11y/index.ts`

```
vim o11y/index.ts
```

- Explore what's possible by leveraging `o11y/resources/Workloads.ts`

🧪 Step 2: Use Workloads to organize your resources
=======================

Add this after `// TODO: Add workloads here`
```
import Workload from "./resources/Workloads"
```

- Tag the workload using your team, i.e.

```
const myWorkload = Workload(
  'O11yAsCode Workload Example (Pulumi)',
  `tags.team = 'acme_corp'`
)
```

- Expose the URL to your workload
```
export const workload_permalink = myWorkload.permalink
```

🏁 Step 3: pulumi up
=========

- Navigate to the terminal tab, `cd o11y`, run `pulumi up` and confirm the changes.

```
pulumi up
```

- Pulumi will output a `workload_permalink` value linking to your New Relic Workload!

To complete the challenge, press **Check**
