---
slug: getting-started
id: jx9twxf6rqk5
type: challenge
title: 'Lab: Getting Started'
teaser: Setup and run your applications
notes:
- type: text
  contents: |-
    # Getting Started with Observability as Code

    In this challenge, you're tasked with
    - configuring your applications with the proper `NEW_RELIC_LICENSE_KEY`
    - starting your applications using docker compose
tabs:
- title: Terminal
  type: terminal
  hostname: docker-vm
- title: Editor
  type: code
  hostname: docker-vm
  path: /newrelic
difficulty: basic
timelimit: 300
---

🧪 Step 1: Setup applications
=======================

In the root workspace directory, run the `make` command.
It will generate `.env` files for your applications.

```
make
```

🧪 Step 2: Add your New Relic License Keys
=======================

Using the Editor tab, update the `.env` files to add your `NEW_RELIC_LICENSE_KEY` to each application.

- apps/web-api/.env
- apps/login-service/.env

.env file:
```
NEW_RELIC_LICENSE_KEY=AABBCC
```

🏁 Step 3: Finish
=========

- Verify that everything is working by checking Docker.

```
docker compose up -d
```

- Optionally view the logs from the application. Behind the scenes smoke tests are running to simulate load on your applications. In a few minutes you'll be able to view this data in New Relic.

```
docker compose logs -f
```

To complete the challenge, press **Check**
