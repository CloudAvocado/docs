---
sidebar_position: 1
description: How CloudAvocado connects to AWS, Google Cloud, Azure, and MongoDB Atlas, what access it needs, and how to rotate or remove that access.
---

# Cloud Accounts

CloudAvocado connects to each of your cloud provider accounts to discover and manage your resources. Each account is synced once an hour to pick up new resources and tag changes. Each provider uses its own type of credential and needs its own permissions.

CloudAvocado walks you through adding an account step by step, from creating the credential in your provider to entering it. This page covers what you need before you start and how to keep access working afterward.

## Supported Providers

Each connection covers one scope, such as a single AWS account or Azure subscription. To manage more than one, add a connection for each.

### Amazon Web Services (AWS)

**Scope:** one AWS account per connection. **Permissions:** [AWS IAM Policy](./aws-iam-policy.md).

| Auth method             | Description                                                                                                                                                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **IAM Role**            | Recommended. A cross-account role assumed with an external ID. CloudAvocado gets temporary credentials each time it assumes the role, so there's no key to store or rotate, and deleting the CloudFormation stack revokes access. |
| **IAM User Access Key** | Legacy. An access key ID and secret access key, kept for existing connections.                                                                                                                                                    |

### Google Cloud Platform (GCP)

**Scope:** one project per connection. **Permissions:** [Google Cloud IAM Permissions](./gcp-iam-permissions.md).

| Auth method             | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| **Service Account Key** | A JSON key file for a service account in the project. |

### Microsoft Azure

**Scope:** one subscription per connection. **Permissions:** [Azure RBAC Permissions](./azure-rbac-permissions.md).

| Auth method           | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| **Service Principal** | An app registration in Microsoft Entra ID with a client secret. |

### MongoDB Atlas

**Scope:** one project per connection. **Permissions:** Project Cluster Manager.

| Auth method         | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| **Service Account** | A client ID and client secret for a service account in the project. |

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
