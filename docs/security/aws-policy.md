import AwsPolicyViewer from '@site/src/components/AwsPolicyViewer';

# AWS IAM Policy

This page displays the AWS IAM policies required for CloudAvocado to access your AWS resources.

## Default Policy

The default policy provides full access to manage, schedule, and optimize your AWS resources.

<AwsPolicyViewer policyType="default" title="CloudAvocado Default IAM Policy" />

## Read-Only Policy

The read-only policy provides limited access for monitoring and reporting without modification permissions.

<AwsPolicyViewer policyType="readonly" title="CloudAvocado Read-Only IAM Policy" />
