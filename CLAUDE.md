# CLAUDE.md

## All Pages

- End every page with a horizontal rule followed by the "Need help?" block, exactly as on the other pages. `<SupportLink />` is registered globally, so it needs no import.

  ```md
  ---

  :::info
  **Need help?** Our support team is here to assist you with any questions or issues you may encounter: <SupportLink />.
  :::
  ```

## Feature Pages (`docs/features/`)

- Don't link to the app (`app.cloudavocado.com`) or give menu paths like "Settings > Cloud". Refer to screens by their general meaning instead, for example "the Logical Groups page in CloudAvocado" or "the cloud settings in CloudAvocado".
