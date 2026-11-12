# CLAUDE.md

## All Pages

- End every page with a horizontal rule followed by the "Need help?" block, exactly as on the other pages. `<SupportLink />` is registered globally, so it needs no import.

  ```md
  ---

  :::info
  **Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
  :::
  ```

  The one deliberate exception is the Cloud Support Matrix, which ends with a "Don't see the resource type you need?" block instead.

## Cloud Support Matrix

- Fill the support tables with `<Supported />`, `<NotSupported />`, or `<ComingSoon />`, never with bare emoji or text. They're aliases of `<SupportStatus status="..." />`, registered globally, and carry screen-reader labels.

## Feature Pages (`docs/features/`)

- Don't link to the app (`app.cloudavocado.com`) or give menu paths like "Settings > Cloud". Refer to screens by their general meaning instead, for example "the Logical Groups page in CloudAvocado" or "the cloud settings in CloudAvocado".

## Setup Guides (`docs/sso/`)

- These are step-by-step guides, unlike the feature pages. Numbered steps, direct links into the app, and a Troubleshooting section are expected here.
- Keep the Google Workspace and Okta pages parallel: same step structure, same numbering scheme, and the same settings called out on both (for example, Require Signed Assertions).
