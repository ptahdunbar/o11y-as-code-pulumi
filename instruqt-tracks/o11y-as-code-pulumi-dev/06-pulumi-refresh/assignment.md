---
slug: pulumi-refresh
id: tuuxb5znx2sz
type: challenge
title: 'Lab: pulumi refresh'
teaser: Reverting manual changes with pulumi refresh
notes:
- type: text
  contents: |-
    # Reverting manual changes

    In this challenge, you're tasked with
    - Manually modifying resources in the New Relic UI
    - Refreshing the state with `pulumi refresh`
    - Reverting manual changes with `pulumi up`
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
