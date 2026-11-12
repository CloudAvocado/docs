---
sidebar_position: 2
sidebar_label: Logical Groups
description: Group the resources behind an app or environment so they start and stop together, in the right order, on a schedule or on demand.
---

# Logical Groups

A logical group is a set of resources that start and stop together, in an order you choose, on a schedule or on demand. Resources in a group share the group's team and schedule.

## Use Cases

- **Run non-production environments only during working hours.** Put a staging or dev environment in a group and give the group a schedule.
- **Start an application in the right order.** Start the database before the API and web servers, and stop them in reverse.
- **Bring an environment up on demand.** Leave a demo or test environment without a schedule and start it only when you need it.
- **Manage groups from code.** Assign resources to groups with a [tag](#assign-resources-with-tags) from Terraform, CloudFormation, or similar tools.

## How It Works

- A resource can be in only one group at a time.
- A resource that joins a group takes the group's team and schedule. You change them on the group, not on the resource.
- A resource removed from a group keeps its team but loses the group's schedule. Deleting a group doesn't delete its resources.

## Start and Stop Order

Each resource has a start delay and a stop delay, from 0 to 60 minutes. When the group starts or stops, each resource waits for its delay. By default, resources stop in the reverse of their start order.

| Resource    | Start delay | Stop delay |
| ----------- | ----------- | ---------- |
| Database    | 0 min       | 10 min     |
| API servers | 5 min       | 5 min      |
| Web servers | 10 min      | 0 min      |

:::info
Delays don't wait for a resource to be ready. If a resource is slow to start, give the resources that depend on it a longer delay.
:::

## Assign Resources with Tags

Set the `cloudavocado_group_name` tag to the group's name, and the resource joins the group on the next sync. If no group has that name, CloudAvocado creates one.

```
cloudavocado_group_name = web-app-staging
```

To move a resource to another group, change the value. To take it out of its group, set an empty value.

:::warning
The tag takes priority over changes made in CloudAvocado. A tagged resource removed from its group rejoins on the next sync, and a deleted group is created again. Change the tag instead.
:::

:::info
`cloudavocado_group_name` is one of the [reserved CloudAvocado tags](reserved-tags.md).
:::
