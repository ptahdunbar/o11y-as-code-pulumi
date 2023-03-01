---
slug: tags
id: rx3s19jnugnb
type: challenge
title: 'Lab: Tags'
teaser: Tagging your applications
notes:
- type: text
  contents: |-
    # Tagging your applications

    In this challenge, you're tasked with
    - looping through your apps
    - tagging them with `team` and `env` key value pairs.
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

- Explore what's possible by leveraging `o11y/resources/Tags.ts`

🧪 Step 2: Add tags to your applications
=======================

- Leverage the existing `apps` constant and loop over it to add tags.

Add this after `// TODO: Add tags here`
```
import AddTags from "./resources/Tags"
```

- Create a tags array with two key/values objects for `team` and `env`:

```
const appTags = [
  {
    key: 'team',
    values: ['acme_corp'],
  },
  {
    key: 'env',
    values: ['staging'],
  }
]
```

- Loop through each app and tag them using the `AddTags` component.

```
apps.forEach(async name => {
  const app = await newrelic.getEntity({
    name,
  })

  AddTags(app, appTags)
})
```

🏁 Step 3: pulumi up
=========

- Navigate to the terminal tab, `cd o11y`, run `pulumi up` and confirm the changes.

```
pulumi up
```

- Navigate to New Relic and verify that the tags were added successfully to your applications.

To complete the challenge, press **Check**
