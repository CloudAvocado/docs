import type { LoadContext, Plugin } from '@docusaurus/types';

interface PolicyUrls {
  default: string;
  readonly: string;
}

interface PolicyStatement {
  Effect: string;
  Action: string[];
  Resource: string;
}

interface PolicyDocument {
  Version: string;
  Statement: PolicyStatement[];
}

interface CloudFormationTemplate {
  Resources?: {
    CloudAvocadoPolicy?: {
      Properties?: {
        PolicyDocument?: PolicyDocument;
      };
    };
  };
}

interface PluginContent {
  default: PolicyDocument;
  readonly: PolicyDocument;
}

const policies: PolicyUrls = {
  default: 'https://cloudavocado.s3.amazonaws.com/role-default-stack.json',
  readonly: 'https://cloudavocado.s3.amazonaws.com/role-readonly-stack.json'
};

export default function fetchAwsPolicyPlugin(
  context: LoadContext,
  options: Record<string, unknown>
): Plugin<PluginContent> {
  return {
    name: 'fetch-aws-policy',
    async loadContent(): Promise<PluginContent> {
      const results: Partial<PluginContent> = {};

      for (const [name, url] of Object.entries(policies)) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${name} policy: ${response.status} ${response.statusText}.`);
        }

        const template = await response.json() as CloudFormationTemplate;
        const policy = template?.Resources?.CloudAvocadoPolicy?.Properties?.PolicyDocument;
        if (!policy) {
          throw new Error(`${name} policy not found in CloudFormation template.`);
        }

        results[name as keyof PluginContent] = policy;
      }

      return results as PluginContent;
    },
    async contentLoaded({ content, actions }): Promise<void> {
      const { setGlobalData } = actions;
      setGlobalData({ awsPolicy: content });
    },
  };
}
