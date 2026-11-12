---
sidebar_position: 4
description: Google Cloud custom roles the CloudAvocado service account needs on each project you connect, the recommended default role and a read-only alternative.
---

# Google Cloud IAM Permissions

CloudAvocado connects to each Google Cloud project with a service account. Create one of these custom roles in the project you connect, and grant it to the service account on that project.

## Default Role

Discovery, tagging, and scheduling. This is the recommended role.

```yaml title="cloudavocado-default-role.yaml"
title: CloudAvocado
description: Permissions CloudAvocado needs to discover, label, and schedule resources.
stage: GA
includedPermissions:
  - iam.serviceAccounts.actAs
  - compute.instances.get
  - compute.instances.list
  - compute.instances.setLabels
  - compute.instances.start
  - compute.instances.stop
  - compute.zoneOperations.get
  - compute.zones.list
  - run.services.get
  - run.services.list
  - run.services.update
  - run.revisions.get
  - run.revisions.list
  - run.locations.list
  - run.operations.get
```

## Read-Only Role

Discovery only. Tagging and scheduling are turned off.

```yaml title="cloudavocado-readonly-role.yaml"
title: CloudAvocado Read-Only
description: Permissions CloudAvocado needs to discover resources and their state.
stage: GA
includedPermissions:
  - compute.instances.get
  - compute.instances.list
  - compute.zones.list
  - run.services.get
  - run.services.list
  - run.revisions.get
  - run.revisions.list
  - run.locations.list
```

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
