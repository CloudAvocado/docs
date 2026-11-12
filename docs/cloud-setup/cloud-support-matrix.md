---
sidebar_position: 2
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

| Resource type               |   Discovery   |     Tagging      |    Scheduling    |    Metrics    | Recommendations  |     Cost      |    Emissions     |
| --------------------------- | :-----------: | :--------------: | :--------------: | :-----------: | :--------------: | :-----------: | :--------------: |
| EC2 Instance                | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| EBS Volume                  | <Supported /> |  <Supported />   | <NotSupported /> | <Supported /> |  <Supported />   | <Supported /> | <NotSupported /> |
| Auto Scaling Group          | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| ECS Cluster                 | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| ECS Service                 | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| EKS Cluster                 | <Supported /> |  <Supported />   | <NotSupported /> | <Supported /> |  <Supported />   | <Supported /> | <NotSupported /> |
| EKS Node Group              | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| Karpenter Node Pool         | <Supported /> | <NotSupported /> | <NotSupported /> | <Supported /> | <NotSupported /> | <Supported /> | <NotSupported /> |
| RDS DB Instance             | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| RDS DB Cluster              | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| DocumentDB Cluster          | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> |  <Supported />   |
| SageMaker Notebook Instance | <Supported /> |  <Supported />   |  <Supported />   | <Supported /> |  <Supported />   | <Supported /> | <NotSupported /> |
| SageMaker Endpoint          | <Supported /> |  <Supported />   | <NotSupported /> | <Supported /> |  <Supported />   | <Supported /> | <NotSupported /> |

## Google Cloud Platform (GCP)

| Resource type      |   Discovery    |    Tagging     |   Scheduling   |
| ------------------ | :------------: | :------------: | :------------: |
| Compute Engine VM  | <Supported />  | <Supported />  | <Supported />  |
| Cloud Run Service  | <Supported />  | <Supported />  | <Supported />  |
| Cloud SQL Instance | <ComingSoon /> | <ComingSoon /> | <ComingSoon /> |

## Microsoft Azure

| Resource type              |   Discovery    |    Tagging     |   Scheduling   |
| -------------------------- | :------------: | :------------: | :------------: |
| Virtual Machine            | <Supported />  | <Supported />  | <Supported />  |
| Container App              | <Supported />  | <Supported />  | <Supported />  |
| PostgreSQL Flexible Server | <ComingSoon /> | <ComingSoon /> | <ComingSoon /> |
| MySQL Flexible Server      | <ComingSoon /> | <ComingSoon /> | <ComingSoon /> |

## MongoDB Atlas

| Resource type |   Discovery   |    Tagging    |  Scheduling   |    Metrics    |
| ------------- | :-----------: | :-----------: | :-----------: | :-----------: |
| Cluster       | <Supported /> | <Supported /> | <Supported /> | <Supported /> |

---

:::info
**Don't see the resource type you need?** Let us know at <SupportLink />.
:::
