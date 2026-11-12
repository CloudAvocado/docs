---
sidebar_position: 1
description: Set up SAML single sign-on with Google Workspace so users in your organization sign in to CloudAvocado with their Google accounts.
---

# Google Workspace Integration

Configure Google Workspace for use with CloudAvocado to enable single sign-on for users in your organization.

## What You'll Need

- Google Workspace admin access
- CloudAvocado account with admin access
- DNS management access for domain verification

## Step 1: Create SAML App in Google Workspace

Start by registering CloudAvocado as a custom SAML application in your Google Workspace.

### Add Custom SAML App

1. Open the [Google Admin console](https://admin.google.com)
2. Go to **Apps** → **Web and mobile apps**
3. Click **Add App** → **Add custom SAML app**
4. Enter **App name**: `CloudAvocado`
5. Click **Continue**

### Download Identity Provider Metadata

6. On the **Google Identity Provider details** screen, download the **IdP metadata** file
7. Click **Continue**, and keep this browser tab open for Step 3

## Step 2: Configure Single Sign-On in CloudAvocado

Now configure CloudAvocado to accept authentication from your Google Workspace identity provider.

### Configure SSO Settings

1. Open [CloudAvocado](https://app.cloudavocado.com)
2. Go to [Single Sign-On Settings](https://app.cloudavocado.com/settings/sso)
3. Configure the following:
   - **Identity Provider name**: Enter a recognizable name (for example, `Google Workspace`)
   - **Domain Names**: Add your organization's domain
   - **SAML 2.0 Metadata File**: Select the IdP metadata file you downloaded in the previous step
4. Uncheck **Require Signed Assertions**. Once **Signed response** is turned on in Step 3, Google Workspace signs the whole SAML response rather than the assertion inside it, so CloudAvocado must not require a signed assertion
5. Click **Save**

### Verify Domain Ownership

6. Log into your DNS management console for your domain
7. Copy the **TXT Record Value** displayed in CloudAvocado
8. Add this TXT record to your domain's DNS management
9. Wait for **Domain Verification Status** to show **VERIFIED**

:::info
Verification typically completes within minutes but may take up to 24 hours.
:::

### Copy Service Provider Details

10. Once verified, copy the **ACS URL** and **Entity ID** from CloudAvocado. You'll need them in the next step

## Step 3: Complete Google Workspace Configuration

Return to the Google Admin console browser tab to finish the SAML app setup.

### Configure Service Provider Details

1. On the **Service provider details** screen, enter:
   - **ACS URL**: Paste the **ACS URL** from the previous step
   - **Entity ID**: Paste the **Entity ID** from the previous step
   - **Name ID format**: Select `EMAIL`
2. Check **Signed response**
3. Click **Continue**

### Map User Attributes

4. On the **Attribute mapping** screen, click **Add Mapping** to create these mappings:

   | Google Workspace Attribute | CloudAvocado Attribute |
   | -------------------------- | ---------------------- |
   | Primary email              | `email`                |
   | First name                 | `firstName`            |
   | Last name                  | `lastName`             |

5. Click **Finish**

### Enable User Access

6. Set **User access** to **ON** for everyone, or for the organizational units and groups that should be able to sign in to CloudAvocado

## Step 4: Test Your SSO Integration

Verify that single sign-on is working correctly before rolling out to users in your organization.

1. Go to the [CloudAvocado login page](https://app.cloudavocado.com/login)
2. Enter your Google Workspace email address
3. Click **Continue**
4. Click the **Sign in with [Your Identity Provider]** button (skip password entry)
5. You should be redirected to Google for authentication, then back to CloudAvocado

Your organization's users can now sign in to CloudAvocado with their Google Workspace accounts.

## Troubleshooting

### Domain verification pending?

DNS propagation can take time. Use a DNS checker tool to confirm your TXT record is visible.

### Authentication failing?

Make sure to check the following:
- User access is enabled in Google Workspace
- Attribute mappings are correct
- The **ACS URL** and **Entity ID** match exactly in both Google Workspace and CloudAvocado
- **Signed Assertions** and **Signed Responses** settings match exactly in both Google Workspace and CloudAvocado

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
