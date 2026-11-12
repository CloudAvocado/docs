---
sidebar_position: 3
description: AWS IAM policies CloudAvocado uses to access your AWS resources, the recommended default policy and a read-only alternative.
---

# AWS IAM Policy

This page displays the AWS IAM policies required for CloudAvocado to access your AWS resources.

## Default Policy

Discovery, tagging, scheduling, metrics, recommendations, cost, and emissions. This is the recommended policy.

<AwsIamPolicy policyType="default" title="cloudavocado-default-policy.json" />

## Read-Only Policy

Discovery, metrics, recommendations, cost, and emissions. Tagging and scheduling are turned off.

<AwsIamPolicy policyType="readonly" title="cloudavocado-readonly-policy.json" />

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
