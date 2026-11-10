---
sidebar_position: 3
description: IAM permissions the CloudAvocado service account needs on each Google Cloud project you connect.
---

# Google Cloud IAM Permissions

CloudAvocado connects to each Google Cloud project with a service account. Grant the service account a custom role with these permissions on every project you connect.

## Custom Role

Discovery, tagging, and scheduling.

```yaml title="cloudavocado-role.yaml"
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

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
