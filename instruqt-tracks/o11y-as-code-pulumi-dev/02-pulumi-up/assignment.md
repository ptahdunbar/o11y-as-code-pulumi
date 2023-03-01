---
slug: pulumi-up
id: jbnlbq09oyrx
type: challenge
title: 'Lab: pulumi up'
teaser: Your first pulumi up
notes:
- type: text
  contents: |-
    # Your first pulumi up

    In this challenge, you're tasked with
    - In `/o11y` directory, add pulumi to your project
    - If you haven't already, sign up for pulumi and add your pulumi access token
    - Configure your pulumi `dev` stack
    - Add your New Relic credentials using `pulumi config`
    - run `pulumi up`
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

🧪 Step 1: Adding pulumi to your project
=======================

Navigate to the o11y directory and install the pulumi dependencies

```
cd o11y
npm install
```
🧪 Step 2: Add your pulumi access token
=======================

- Prepare pulumi to use your access token. You may need to create one if you don't already have one.
```
pulumi login
```

🧪 Step 3: Configure your Pulumi stack
=========

- run `pulumi stack select` -- when it prompts to  `<create a new stack>` stack, name it `dev`.

```
pulumi stack select
```

🏁 Step 4: Add Pulumi config and New Relic secrets
=========

- Configure pulumi to use your [New Relic Account ID](https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/).

```
pulumi config set newrelic:accountId 01234567
```

- Configure pulumi to use your [New Relic User API Key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/#api-table). It should start with "NRAK-".

```
pulumi config set newrelic:apiKey --secret NRAK-YYYYYYYYYYYYYY
```

- To receive alert notification emails, configure your `notifyViaEmail` to use your email address.

```
pulumi config set o11y-as-code-pulumi-newrelic-workshop:notifyViaEmail user@acme.email
```

- Finally, confirm everything is working by running `pulumi up`
```
pulumi up
```

To complete the challenge, press **Check**
