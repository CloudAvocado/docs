---
sidebar_position: 1
description: How CloudAvocado connects to AWS, Google Cloud, Azure, and MongoDB Atlas, what access it needs, and how to rotate or remove that access.
---

# Cloud Accounts

CloudAvocado connects to each of your cloud provider accounts to discover and manage your resources. Each provider uses its own type of credential and needs its own permissions.

## Authentication Methods

Each connection covers one scope, such as a single AWS account or Azure subscription. To manage more than one, add a connection for each.

| Provider      | Authentication method                                                                          | Scope        | Permissions                                              |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------- |
| AWS           | Cross-account IAM role assumed with an external ID (recommended); IAM user access key (legacy) | AWS account  | [AWS IAM Policy](./aws-iam-policy.md)                    |
| Google Cloud  | Service account key file (JSON)                                                                | Project      | [Google Cloud IAM Permissions](./gcp-iam-permissions.md) |
| Azure         | Service principal (app registration) with a client secret                                      | Subscription | [Azure RBAC Permissions](./azure-rbac-permissions.md)    |
| MongoDB Atlas | Service account with a client ID and client secret                                             | Project      | Project Cluster Manager role on the project              |

For AWS, use the IAM role. CloudAvocado gets temporary credentials each time it assumes the role, so there's no long-lived key to store or rotate, and deleting the CloudFormation stack revokes access. IAM user access keys are a legacy option kept for existing connections.

## Before You Start

The person connecting an account needs these rights in the provider. If you don't have them, ask an administrator to set up the connection with you.

- **AWS:** permission to create CloudFormation stacks and IAM roles and policies in the account.
- **Google Cloud:** permission to create service accounts, service account keys, and custom roles in the project, and to grant roles to the service account.
- **Azure:** permission to register applications in Microsoft Entra ID, and to create custom roles and assign roles on the subscription (for example, Owner or User Access Administrator).
- **MongoDB Atlas:** the Project Owner role, which is needed to create the project's service account and grant it the Project Cluster Manager role.

## Credential Expiry and Rotation

| Credential                       | Expires                                               |
| -------------------------------- | ----------------------------------------------------- |
| AWS IAM role                     | No secret to expire                                   |
| AWS IAM user access key          | No, but rotate it regularly                           |
| Google Cloud service account key | No, unless your organization sets a key expiry policy |
| Azure client secret              | Yes, on the expiry date you choose when you create it |
| MongoDB Atlas client secret      | Yes, after the period you choose when you create it   |

When a credential expires or is deleted, CloudAvocado can't sync that account, and the account shows an error. To fix it, open the account in CloudAvocado and replace the credential with a new one.

## Removing Access

Disconnect the account in CloudAvocado, then revoke CloudAvocado's access in the provider:

| Provider         | How to revoke access                                                               |
| ---------------- | ---------------------------------------------------------------------------------- |
| AWS (IAM role)   | Delete the CloudFormation stack. This deletes the IAM role and its policy.         |
| AWS (access key) | Deactivate and delete the access key, or delete the IAM user.                      |
| Google Cloud     | Delete the service account key, or delete the service account.                     |
| Azure            | Delete the client secret or the app registration, and remove its role assignments. |
| MongoDB Atlas    | Delete the service account.                                                        |

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
