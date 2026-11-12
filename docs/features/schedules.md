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
- **Stop resources only when they're idle.** A [metric-based schedule](#metric-based-schedules) lets builds or data imports finish before stopping.
- **Keep a resource stopped.** An Always Stopped schedule stops it again if someone starts it.
- **Manage schedules from code.** Assign schedules with a [tag](#assign-resources-with-tags) from Terraform, CloudFormation, or similar tools.

## How It Works

Each schedule has one of four modes:

| Mode                            | Assigned resources                                          |
| ------------------------------- | ----------------------------------------------------------- |
| Weekly Timesheet                | Start and stop at the set times.                            |
| Weekly Timesheet (metric-based) | Start at the set times. Stop at the set times only if idle. |
| Always Running                  | Stay running.                                               |
| Always Stopped                  | Stay stopped.                                               |

- Running hours are set for the week, in 15-minute steps, and can cross midnight or the weekend.
- CloudAvocado checks resources every hour and starts or stops any that don't match their schedule. Schedule changes take effect at the next hourly check, or right away if you run the schedule.
- You can suspend a schedule for 1 hour to 90 days. It resumes on its own when the time is up.
- Each schedule shows its estimated savings: the share of the week its resources are stopped.
- Only resources that can be started and stopped can be scheduled. See the [Cloud Support Matrix](../cloud-setup/cloud-support-matrix.md).
- Deleting a schedule doesn't delete its resources. You choose whether to leave them as they are, start them, or stop them.

## Metric-Based Schedules

A metric-based schedule stops a resource at the stop time only if it's idle, meaning its CPU utilization stayed below 2% for 3 hours. You can change both values for each resource. A busy resource keeps running, and CloudAvocado stops it once it's idle.

:::info
A resource with no CPU data is treated as idle.
:::

## Exceptions for Individual Resources

- **Suspended schedule.** Suspend a resource's schedule for 1 hour to 90 days, for example to keep it running over a weekend.
- **Stop protection.** CloudAvocado never stops a [stop-protected](reserved-tags.md#stop-protection-tag) resource, but its schedule still starts it.
- **Logical groups.** A resource in a [logical group](logical-groups.md) uses the group's schedule and start and stop order.

## Assign Resources with Tags

Set the `cloudavocado_schedule_id` tag to the schedule's ID, shown on the schedule in CloudAvocado:

```
cloudavocado_schedule_id = 6650f1c2a9e4b0a1d2c3f4e5
```

The tag works both ways: when you change a resource's schedule in CloudAvocado, its tag is updated too. To take a resource off its schedule, set an empty value.

:::warning
If an infrastructure-as-code tool manages this tag, change schedules in code. Otherwise, the tool sets the tag back on its next run.
:::

:::info
`cloudavocado_schedule_id` is one of the [reserved CloudAvocado tags](reserved-tags.md).
:::
