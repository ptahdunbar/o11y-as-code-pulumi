---
slug: tags
id: lgoafw265eg3
type: challenge
title: 'Lab: Tags'
teaser: Tagging your applications
notes:
- type: text
  contents: |-
    # Tagging your applications

    In this challenge, you're tasked with
    - looping through your apps to tag them with `team` and `env` pairs.
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
import Tag from "./resources/Tags"
```

- Create a `team` tag using this example:

```
const myTeamTag = {
  key: 'team',
  values: ['acme_corp'],
}
```

- Loop through each app and tag them using the `Tag` component.

```
apps.forEach(async name => {
  const app = await newrelic.getEntity({
    name,
  })

  Tag(app, [
    myTeamTag,
    {
      key: 'env',
      values: ['staging'],
    }
  ])
})
```

🏁 Step 3: pulumi up
=========

- Navigate to the terminal tab, `cd o11y`, run `pulumi up` and confirm the changes.

```
pulumi up
```

- Verify that those tags are added in New Relic.

To complete the challenge, press **Check**
