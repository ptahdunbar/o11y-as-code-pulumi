---
slug: pulumi-refresh
id: oayxhcrfslhe
type: challenge
title: 'Lab: pulumi refresh'
teaser: Synchronizing changes with pulumi refresh
notes:
- type: text
  contents: |-
    # Synchronizing changes

    In this challenge, you're tasked with
    - Manually modifying resources in New Relic
    - Refreshing the state with `pulumi refresh`
    - Synchronizing changes with `pulumi up`
tabs:
- title: Terminal
  type: terminal
  hostname: docker-vm
- title: Editor
  type: code
  hostname: docker-vm
  path: /newrelic
difficulty: basic
timelimit: 600
---

🧪 Step 1: Modify an existing resource
=======================

Navigate to the New Relic Dashboard created in the previous challenge and apply manual changes to a query.

🧪 Step 2: pulumi refresh
=========

- In the terminal tab, `cd o11y`, run `pulumi refresh` to refresh the state of your resources.

```
pulumi refresh
```

🏁 Step 3: pulumi refresh
=========

- To fix any manual changes to your resources, re-run `pulumi up` and confirm the changes.

```
pulumi up
```

To complete the challenge, press **Check**
