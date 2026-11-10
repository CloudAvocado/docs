---
sidebar_position: 5
description: Resource types CloudAvocado supports on AWS, Google Cloud, Azure, and MongoDB Atlas, and the features available for each.
---

# Cloud Support Matrix

This page lists the resource types CloudAvocado supports on AWS, Google Cloud, Azure, and MongoDB Atlas, and which features are available for each.

## Features

| Feature             | What it means                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Discovery**       | The resource is found during account sync and listed in the resource inventory.                                                                      |
| **Tagging**         | Tags assigned in CloudAvocado are written back to the resource on the provider side (AWS tags, Google Cloud labels, Azure tags, MongoDB Atlas tags). |
| **Scheduling**      | The resource can be assigned a schedule that stops and starts it automatically, and can be stopped and started manually.                             |
| **Metrics**         | Utilization metrics (CPU, memory, connections, etc.) are collected from the provider's monitoring API.                                               |
| **Recommendations** | Resource-specific cost optimization recommendations (idle, rightsizing, Compute Optimizer, etc.).                                                    |
| **Cost**            | Projected monthly cost and potential savings (from scheduling and recommendations) are calculated from AWS price lists.                              |
| **Emissions**       | Carbon emission estimates are calculated.                                                                                                            |

:::info
When scheduling stops a resource that has no native stop operation, the resource is scaled to zero instead, and its previous capacity is restored when it starts.
:::

## Amazon Web Services (AWS)

| Resource type               | Discovery | Tagging | Scheduling | Metrics | Recommendations | Cost  | Emissions |
| --------------------------- | :-------: | :-----: | :--------: | :-----: | :-------------: | :---: | :-------: |
| EC2 Instance                |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| EBS Volume                  |     ✅     |    ✅    |     —      |    ✅    |        ✅        |   ✅   |     —     |
| Auto Scaling Group          |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| ECS Cluster                 |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| ECS Service                 |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| EKS Cluster                 |     ✅     |    ✅    |     —      |    ✅    |        ✅        |   ✅   |     —     |
| EKS Node Group              |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| Karpenter Node Pool         |     ✅     |    —    |     —      |    ✅    |        —        |   ✅   |     —     |
| RDS DB Instance             |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| RDS DB Cluster              |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| DocumentDB Cluster          |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     ✅     |
| SageMaker Notebook Instance |     ✅     |    ✅    |     ✅      |    ✅    |        ✅        |   ✅   |     —     |
| SageMaker Endpoint          |     ✅     |    ✅    |     —      |    ✅    |        ✅        |   ✅   |     —     |

The AWS account sync also discovers **EC2 and RDS Reserved Instances**. These are shown at the account level and aren't a resource type.

## Google Cloud Platform (GCP)

| Resource type                      | Discovery | Tagging | Scheduling |
| ---------------------------------- | :-------: | :-----: | :--------: |
| Compute Engine VM                  |     ✅     |    ✅    |     ✅      |
| Cloud Run Service                  |     ✅     |    ✅    |     ✅      |
| Cloud SQL Instance *(coming soon)* |     🔜     |    🔜    |     🔜      |

## Microsoft Azure

| Resource type                              | Discovery | Tagging | Scheduling |
| ------------------------------------------ | :-------: | :-----: | :--------: |
| Virtual Machine                            |     ✅     |    ✅    |     ✅      |
| Container App                              |     ✅     |    ✅    |     ✅      |
| PostgreSQL Flexible Server *(coming soon)* |     🔜     |    🔜    |     🔜      |
| MySQL Flexible Server *(coming soon)*      |     🔜     |    🔜    |     🔜      |

## MongoDB Atlas

| Resource type | Discovery | Tagging | Scheduling | Metrics |
| ------------- | :-------: | :-----: | :--------: | :-----: |
| Cluster       |     ✅     |    ✅    |     ✅      |    ✅    |

---

:::info
**Don't see the resource type you need?** Let us know at <SupportLink />.
:::
