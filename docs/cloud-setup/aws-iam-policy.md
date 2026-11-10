---
sidebar_position: 3
description: AWS IAM policies CloudAvocado uses to access your AWS resources, the recommended default policy and a read-only alternative.
---

# AWS IAM Policy

This page displays the AWS IAM policies required for CloudAvocado to access your AWS resources.

## Default Policy

Visibility plus scheduling and control of resource states. This is the recommended policy.

<AwsIamPolicy policyType="default" title="CloudAvocado Default IAM Policy" />

## Read-Only Policy

Visibility only. Scheduling and resource control are turned off.

<AwsIamPolicy policyType="readonly" title="CloudAvocado Read-Only IAM Policy" />
