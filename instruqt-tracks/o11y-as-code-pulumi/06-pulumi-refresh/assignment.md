---
slug: pulumi-refresh
id: oayxhcrfslhe
type: challenge
title: 'Lab: pulumi refresh'
teaser: Synchronizing changes with pulumi refresh
notes:
- type: text
  contents: |-
    # Synchronizing changes with pulumi refresh

    In this challenge, you're tasked with
    - manually modifying resources in New Relic
    - refreshing the state with pulumi
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

Navigate to New Relic and make changes to the dashboard you just created.

🏁 Step 2: pulumi refresh
=========

- Run this command in the terminal to refresh the state of your resources

```
pulumi refresh
```

- To fix any manual changes to your resources, re-run `pulumi up`

```
pulumi up
```

To complete the challenge, press **Check**
