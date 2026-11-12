---
sidebar_position: 5
description: Azure custom roles CloudAvocado's service principal needs on each subscription you connect, the recommended default role and a read-only alternative.
---

# Azure RBAC Permissions

Each Azure subscription is connected separately, with its own app registration in Microsoft Entra ID. Create one of these custom roles on the subscription you connect, and assign it to the app's service principal on that subscription.

## Default Role

Discovery, tagging, and scheduling. This is the recommended role.

```json title="cloudavocado-default-role.json"
{
  "Name": "CloudAvocado",
  "IsCustom": true,
  "Description": "Permissions CloudAvocado needs to discover, tag, and schedule resources.",
  "Actions": [
    "Microsoft.App/containerApps/read",
    "Microsoft.App/containerApps/revisions/read",
    "Microsoft.App/containerApps/start/action",
    "Microsoft.App/containerApps/stop/action",
    "Microsoft.App/managedEnvironments/read",
    "Microsoft.Compute/virtualMachines/deallocate/action",
    "Microsoft.Compute/virtualMachines/instanceView/read",
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Compute/virtualMachines/start/action",
    "Microsoft.Resources/subscriptions/read",
    "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Resources/tags/read",
    "Microsoft.Resources/tags/write"
  ],
  "NotActions": [],
  "AssignableScopes": ["/subscriptions/SUBSCRIPTION_ID"]
}
```

## Read-Only Role

Discovery only. Tagging and scheduling are turned off.

```json title="cloudavocado-readonly-role.json"
{
  "Name": "CloudAvocado Read-Only",
  "IsCustom": true,
  "Description": "Permissions CloudAvocado needs to discover resources and their state.",
  "Actions": [
    "Microsoft.App/containerApps/read",
    "Microsoft.App/containerApps/revisions/read",
    "Microsoft.App/managedEnvironments/read",
    "Microsoft.Compute/virtualMachines/instanceView/read",
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Resources/subscriptions/read",
    "Microsoft.Resources/subscriptions/resourceGroups/read",
    "Microsoft.Resources/tags/read"
  ],
  "NotActions": [],
  "AssignableScopes": ["/subscriptions/SUBSCRIPTION_ID"]
}
```

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
