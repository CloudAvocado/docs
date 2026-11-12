---
sidebar_position: 1
sidebar_label: Schedules
description: Start and stop cloud resources automatically on a weekly timetable, so they only run, and only cost money, when you need them.
---

# Schedules

A schedule sets when your resources run. CloudAvocado starts them when their running hours begin and stops them when the hours end, so you don't pay for idle compute.

## Use Cases

- **Stop non-production resources outside working hours.** A schedule that runs on weekdays from 8:00 to 19:00 keeps resources stopped about two thirds of the week.
- **Follow each office's working hours.** Each schedule has its own time zone and follows its daylight saving time changes.
- **Stop resources only when they're idle.** A [metric-based schedule](#how-it-works) lets builds or data imports finish before stopping.
- **Keep a resource stopped.** An Always Stopped schedule stops it again if someone starts it.
- **Keep critical workloads running 24/7.** An Always Running schedule starts a resource again if it's stopped, so CloudAvocado watches over it.
- **Manage schedules from code.** Assign schedules with a [tag](#assign-resources-with-tags) from Terraform, CloudFormation, or similar tools.

## How It Works

Each schedule has one of four modes:

| Mode                            | Assigned resources                                          |
| ------------------------------- | ----------------------------------------------------------- |
| Weekly Timesheet                | Start and stop at the set times.                            |
| Weekly Timesheet (metric-based) | Start at the set times. Stop at the set times if idle, otherwise once idle. |
| Always Running                  | Stay running.                                               |
| Always Stopped                  | Stay stopped.                                               |

- Running hours are set for the week, in 15-minute steps, and can cross midnight or the weekend. Resources start and stop at the set times.
- A metric-based schedule treats a resource as idle when its CPU utilization has stayed below 2% for 3 hours. You can change both values for each resource. A resource with no CPU data is treated as idle.
- At the top of every hour, CloudAvocado also checks every scheduled resource and corrects any that isn't in the state its schedule requires, for example a resource someone started by hand. Schedule changes, including newly assigned resources, take effect at the next hourly check. To apply them now, run the schedule: it brings every assigned resource into the state the schedule requires right away.
- If a start or stop fails, the next hourly check tries again. A failure on one resource doesn't affect the others on the schedule.
- You can suspend a whole schedule for 1 hour to 90 days. It resumes on its own when the time is up.
- Each schedule shows its estimated savings: the share of the week its resources are stopped.
- Only resources that can be started and stopped can be scheduled. See the [Cloud Support Matrix](../cloud-setup/cloud-support-matrix.md).
- A resource with no native stop operation, such as an Auto Scaling Group or an ECS service, is scaled to zero instead. Its previous capacity is restored when it starts.
- Deleting a schedule doesn't delete its resources. You choose whether to leave them as they are, start them, or stop them.

## Exceptions for Individual Resources

- **Suspended resource.** Suspend the schedule for a single resource for 1 hour to 90 days, for example to keep it running over a weekend. The schedule's other resources aren't affected.
- **Logical groups.** A resource in a [logical group](logical-groups.md) uses the group's schedule and start and stop order.

## Assign Resources with Tags

Set the `cloudavocado_schedule_id` tag to the schedule's ID, shown on the schedule in CloudAvocado:

```
cloudavocado_schedule_id = 6650f1c2a9e4b0a1d2c3f4e5
```

The [schedule tag](reserved-tags.md#schedule-tag) reference explains how the tag interacts with changes made in CloudAvocado and with infrastructure-as-code tools.

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
