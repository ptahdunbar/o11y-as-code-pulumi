---
slug: pulumi-down
id: 7zn2sm0gkhmm
type: challenge
title: 'Lab: pulumi down'
teaser: Your first pulumi down
notes:
- type: text
  contents: |-
    # Your first pulumi down

    In this challenge, you're tasked with
    - cleaning up your environment by running `pulumi down`
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

🏁 Run Pulumi Down
=========

- In the terminal tab, `cd o11y`, run `pulumi down` to destroy all of your resources in New Relic.

- This will reset your environment while still maintaining the code to reproduce it again if and when needed.

```
pulumi down
```

To complete the challenge, press **Check**
