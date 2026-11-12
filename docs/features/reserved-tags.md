---
sidebar_position: 3
sidebar_label: CloudAvocado Tags
description: Use reserved tags on your cloud resources to assign teams, schedules, and logical groups, turn on stop protection, or hide resources from CloudAvocado.
---

# CloudAvocado Tags

CloudAvocado tags, also called reserved tags, let you manage resources from your cloud provider. Add them like any other tag (a label, in Google Cloud), for example from Terraform or CloudFormation.

## Use Cases

- **Set up resources as you create them.** Tagged resources arrive in CloudAvocado with the right team, schedule, or logical group.
- **Keep ownership and schedules in code,** reviewed and versioned with the rest of your infrastructure.
- **Protect critical resources,** like a production database, from being stopped.
- **Keep resources out of CloudAvocado,** like short-lived CI runners.

For example, this Terraform setting tags every AWS resource in a stack, so the whole stack joins one logical group:

```hcl
provider "aws" {
  default_tags {
    tags = {
      cloudavocado_group_name = "web-app-staging"
    }
  }
}
```

## Tag Reference

| Tag                            | Value                | What it does                                                          |
| ------------------------------ | -------------------- | --------------------------------------------------------------------- |
| `cloudavocado_team_name`       | A team name          | [Assigns the resource to a team](#team-tag)                           |
| `cloudavocado_schedule_id`     | A schedule ID        | [Assigns a schedule](#schedule-tag)                                   |
| `cloudavocado_group_name`      | A logical group name | [Adds the resource to a logical group](#logical-group-tag)            |
| `cloudavocado_stop_protection` | `true`               | [Keeps CloudAvocado from stopping the resource](#stop-protection-tag) |
| `cloudavocado_ignored`         | `true`               | [Hides the resource from CloudAvocado](#ignored-tag)                  |

:::info
Tag changes take effect the next time CloudAvocado syncs your cloud account, not right away.
:::

### Team Tag

Assigns the resource to the team with that name:

```
cloudavocado_team_name = backend
```

If no team has that name, CloudAvocado creates one. CloudAvocado also reads a tag named `Team` by default, and you can change that key in the cloud settings.

### Schedule Tag

Assigns the [schedule](schedules.md) with that ID, shown on the schedule in CloudAvocado:

```
cloudavocado_schedule_id = 6650f1c2a9e4b0a1d2c3f4e5
```

The tag works both ways: when you change a resource's schedule in CloudAvocado, its tag is updated too.

### Logical Group Tag

Adds the resource to the [logical group](logical-groups.md) with that name:

```
cloudavocado_group_name = web-app-staging
```

If no group has that name, CloudAvocado creates one.

### Stop Protection Tag

Keeps CloudAvocado from stopping the resource, whether on a schedule, in a logical group, or on demand:

```
cloudavocado_stop_protection = true
```

CloudAvocado can still start it.

### Ignored Tag

Makes CloudAvocado skip the resource, so it doesn't appear in CloudAvocado:

```
cloudavocado_ignored = true
```

To bring it back, delete the tag.

## Tag Priority

1. `cloudavocado_group_name` takes priority over `cloudavocado_team_name` and `cloudavocado_schedule_id`.
2. `cloudavocado_team_name` takes priority over your own team tag, such as `Team`.

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
