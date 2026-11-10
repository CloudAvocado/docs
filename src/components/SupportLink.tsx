import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/** Mailto link to the contact email set in `customFields.contactEmail` in docusaurus.config.ts. */
export default function SupportLink(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  const email = siteConfig.customFields?.contactEmail as string;

  return <a href={`mailto:${email}`}>{email}</a>;
}
