import type { ComponentProps } from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import AwsIamPolicy from '@site/src/components/AwsIamPolicy';
import SupportLink from '@site/src/components/SupportLink';
import SupportStatus, { Supported, NotSupported, ComingSoon } from '@site/src/components/SupportStatus';

// Wraps Markdown tables so they can fill the content width and still
// scroll horizontally when they're wider than the page.
function Table(props: ComponentProps<'table'>) {
  return (
    <div className="table-wrapper">
      <table {...props} />
    </div>
  );
}

// Components listed here can be used in any docs page without an import.
export default {
  ...MDXComponents,
  table: Table,
  AwsIamPolicy,
  SupportLink,
  SupportStatus,
  Supported,
  NotSupported,
  ComingSoon,
};
