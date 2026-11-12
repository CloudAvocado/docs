---
sidebar_position: 3
description: Require every user in your organization to sign in through your SSO integration instead of with a password.
---

# Enforce Single Sign-On

Require all users in your organization to sign in through your SSO integration instead of with a password.

## What You'll Need

- CloudAvocado account with admin access
- A configured and tested SSO integration, for example [Google Workspace](./google-workspace.md) or [Okta](./okta.md)

## Step 1: Verify Your SSO Integration

Before enforcing SSO, ensure your integration is working correctly.

1. Open [CloudAvocado](https://app.cloudavocado.com)
2. Go to [Single Sign-On Settings](https://app.cloudavocado.com/settings/sso)
3. Verify that your SSO integration shows **Domain Verification Status** as **VERIFIED**
4. Test the SSO login flow to confirm it works as expected

:::warning
Do not enable **Enforce Single Sign-On** until you've successfully tested the SSO login flow. Otherwise, users may be locked out.
:::

## Step 2: Enable Enforce Single Sign-On

Once your SSO integration is verified and tested, you can enforce it for all users.

1. Open [CloudAvocado](https://app.cloudavocado.com)
2. Go to [Single Sign-On Settings](https://app.cloudavocado.com/settings/sso)
3. Click **Edit**
4. Check **Enforce Single Sign-On**
5. Click **Save**

:::tip[What Happens Next]
After enabling **Enforce Single Sign-On**, users will no longer see the password field on the login page. They must authenticate through the configured SSO integration.
:::

## Troubleshooting

### Users can't log in?

1. Confirm the user's email domain matches your verified domain
2. Check that user access is enabled in your identity provider
3. Test the SSO flow yourself to identify any issues

---

:::info
**Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
:::
