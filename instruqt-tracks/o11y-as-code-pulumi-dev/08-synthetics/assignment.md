---
slug: synthetics
id: by017dxhxge7
type: challenge
title: 'Lab: Synthetic Monitors'
teaser: Creating Synthetic Monitors
notes:
- type: text
  contents: |-
    # Creating Synthetic Monitors

    In this challenge, you're tasked with
    - providing a set of links to proactively check for errors
    - schedule a simple brower sythentics monitor check
    - add tags to the sythentic monitor checks
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

๐งช Step 1: Explore o11y/index.ts
=======================

- Using the Editor tab, navigate to `o11y/index.ts`

```
vim o11y/index.ts
```

- Explore what's possible by leveraging `o11y/resources/SyntheticsMonitor.ts`

๐งช Step 2: Add synthetics monitors
=======================

- Import `SyntheticsMonitor` after `// TODO: Add synthetic monitors here`

```
import SyntheticsMonitor from "./resources/SyntheticsMonitor"
```

- Given an array of links
```
let urls = [
  'http://acme-corp.com',
  'https://acme-corp.com/0101/index.html',
]
```

- Loop through them and call SyntheticsMonitor using the following example:
```
urls.forEach(url => SyntheticsMonitor({
  uri: url,
  // https://docs.newrelic.com/docs/synthetics/synthetic-monitoring/administration/synthetic-public-minion-ips/#location
  locationsPublics: ['AWS_US_EAST_1', 'AWS_US_WEST_1'],
  enableScreenshotOnFailureAndScript: true,
  status: 'ENABLED',
  type: 'BROWSER',
  period: 'EVERY_MINUTE',
  verifySsl: true,
  runtimeTypeVersion: '100',
  runtimeType: 'CHROME_BROWSER',
  scriptLanguage: 'JAVASCRIPT',
  tags: appTags
}))
```

๐ Step 3: pulumi up
=========

- After running `pulumi up` test that your sythenthic monior checks are added in New Relic and running successfully.

```
pulumi up
```

To complete the challenge, press **Check**
