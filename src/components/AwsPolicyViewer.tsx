import React from 'react';
import useGlobalData from '@docusaurus/useGlobalData';
import CodeBlock from '@theme/CodeBlock';

interface AwsPolicyViewerProps {
  policyType: 'default' | 'readonly';
}

interface AwsPolicyData {
  default: Record<string, unknown>;
  readonly: Record<string, unknown>;
}

interface FetchAwsPolicyPluginData {
  default: {
    awsPolicy: AwsPolicyData;
  };
}

export default function AwsPolicyViewer({ policyType }: AwsPolicyViewerProps): React.ReactElement {
  const globalData = useGlobalData();
  const pluginData = globalData['fetch-aws-policy'] as unknown as FetchAwsPolicyPluginData | undefined;
  const policies = pluginData?.default?.awsPolicy;
  const awsPolicy = policies?.[policyType];

  if (!awsPolicy || typeof awsPolicy !== 'object') {
    return (
      <div style={{ padding: '1rem', color: 'var(--ifm-color-danger)' }}>
        <p><strong>Error:</strong> AWS policy data not available</p>
      </div>
    );
  }

  const policyJson = JSON.stringify(awsPolicy, null, 2);

  return (
    <div>
      <CodeBlock language="json">
        {policyJson}
      </CodeBlock>
    </div>
  );
}
