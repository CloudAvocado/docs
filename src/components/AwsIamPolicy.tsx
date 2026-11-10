import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';

interface AwsIamPolicyProps {
  policyType: 'default' | 'readonly';
  title?: string;
}

interface AwsPolicyData {
  default: Record<string, unknown>;
  readonly: Record<string, unknown>;
}

interface FetchAwsPolicyPluginData {
  default: {
    awsPolicy: AwsPolicyData;
    awsPolicyTemplateUrls: Record<AwsIamPolicyProps['policyType'], string>;
  };
}

export default function AwsIamPolicy({ policyType, title }: AwsIamPolicyProps): React.ReactElement {
  const globalData = useGlobalData();
  const pluginData = globalData['fetch-aws-policy'] as unknown as FetchAwsPolicyPluginData | undefined;
  const policies = pluginData?.default?.awsPolicy;
  const awsPolicy = policies?.[policyType];
  const templateUrl = pluginData?.default?.awsPolicyTemplateUrls?.[policyType];

  if (!awsPolicy || typeof awsPolicy !== 'object') {
    return (
      <div style={{ padding: '1rem', color: 'var(--ifm-color-danger)' }}>
        <p><strong>Error:</strong> AWS IAM policy data not available</p>
      </div>
    );
  }

  const policyJson = JSON.stringify(awsPolicy, null, 2);

  return (
    <div>
      {templateUrl && (
        <Admonition type="info">
          This policy is part of a CloudFormation stack that also creates the IAM role CloudAvocado assumes. Review the
          full template, including the role's trust policy:{' '}
          <Link to={templateUrl}>{templateUrl.split('/').pop()}</Link>
        </Admonition>
      )}
      <CodeBlock language="json" title={title}>
        {policyJson}
      </CodeBlock>
    </div>
  );
}
