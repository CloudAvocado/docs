---
sidebar_position: 2
---

# Okta Integration

Configure Okta for use with CloudAvocado to enable single sign-on for users in your organization.

## What You'll Need

- Okta admin access
- CloudAvocado account with admin access
- DNS management access for domain verification

## Step 1: Create SAML App Integration in Okta

Start by creating a SAML app integration for CloudAvocado in your Okta account.

### Create SAML App Integration

1. Open the [Okta Admin Console](https://login.okta.com)
2. Go to **Applications** → **Applications**
3. Click **Create App Integration** → **SAML 2.0**, then click **Next**
4. Enter **App name**: `CloudAvocado`
5. Click **Next**
6. Enter **Single sign-on URL**: `https://app.cloudavocado.com/api/auth/sso/saml2/XXXXXXXXXXXXXXXXXXXXXXXX/login/callback` (we'll update this after getting the **ACS URL** from CloudAvocado)
7. Enter **Audience URI (SP Entity ID)**: `cloudavocado.com` (we'll update this after getting the **Entity ID** from CloudAvocado)
8. Select **Name ID format**: `EmailAddress`
9. Select **Application username**: `Email`
10. On **Attribute Statements**, add the following attribute mappings:

   | Name        | Value            |
   | ----------- | ---------------- |
   | `email`     | `user.email`     |
   | `firstName` | `user.firstName` |
   | `lastName`  | `user.lastName`  |

11. Click **Next**
12. Click **Finish** (keep this browser tab open – we'll return here shortly)

### Download Identity Provider Metadata

1. Go to the **Sign On** tab of the SAML app integration
2. Copy the **Metadata URL**
3. Open a new tab and paste the **Metadata URL** into the address bar to open its contents in the browser
4. Save the file to your computer (e.g., as `okta-metadata.xml`)

## Step 2: Configure Single Sign-On in CloudAvocado

Now configure CloudAvocado to accept authentication from your Okta identity provider.

### Configure SSO Settings

1. Open the [CloudAvocado Dashboard](https://app.cloudavocado.com)
2. Go to [Single Sign-On Settings](https://app.cloudavocado.com/settings/sso)
3. Configure the following:
   - **Identity Provider name**: Enter a recognizable name (e.g., `Okta`)
   - **Domain Names**: Add your organization's domain
   - **SAML 2.0 Metadata File**: Select the IdP metadata file you downloaded in the previous step
4. Click **Save**

### Verify Domain Ownership

5. Log into your DNS management console for your domain
6. Copy the **TXT Record Value** displayed in CloudAvocado
7. Add this TXT record to your domain's DNS management
8. Wait for **Domain Verification Status** to show **VERIFIED**

:::info
Verification typically completes within minutes but may take up to 24 hours.
:::

### Copy Service Provider Details

9. Once verified, copy the **ACS URL** and **Entity ID** from CloudAvocado (keep these values handy for the next step)

## Step 3: Complete SAML App Integration in Okta

Return to the Okta Admin Console browser tab to complete the SAML app integration.

### Edit SAML Settings

1. Go to **General** → **SAML Settings** under the SAML app integration
2. Click **Edit**
3. Click **Next**
4. On the **Configure SAML** tab, enter:
   - **Single sign-on URL**: Paste the **ACS URL** from the previous step
   - **Entity ID**: Paste the **Entity ID** from the previous step
5. Click **Next**, then click **Finish**

### Configure People/Groups Assignments

1. Go to **Assignments** → **Assign**
2. Assign the users or groups who should have access to CloudAvocado

## Step 4: Test Your SSO Integration

Verify that single sign-on is working correctly before rolling out to users in your organization.

1. Go to [CloudAvocado Login](https://app.cloudavocado.com/login)
2. Enter your email address
3. Click **Continue**
4. Click the **Sign in with [Your Identity Provider]** button (skip password entry)
5. You should be redirected to Okta for authentication, then back to CloudAvocado

:::tip[Success]
You're all set! Your organization's users can now sign in into CloudAvocado using their Okta credentials.
:::

## Troubleshooting

### Domain verification pending?

DNS propagation can take time. Use a DNS checker tool to confirm your TXT record is visible.

### Authentication failing?

Make sure to check the following:
- User assignment is created for the SAML app in Okta
- Attribute statements are correct
- The **ACS URL** and **Entity ID** match exactly in both Okta and CloudAvocado
- **Signed Assertions** and **Signed Responses** settings match exactly in both Okta and CloudAvocado

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: [support@cloudavocado.com](mailto:support@cloudavocado.com).
:::
