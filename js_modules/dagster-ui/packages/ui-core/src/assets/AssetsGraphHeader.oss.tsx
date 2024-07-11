import {Heading, PageHeader} from '@dagster-io/ui-components';

import {ReloadAllButton} from '../workspace/ReloadAllButton';

export const AssetGraphHeader = () => {
  return (
    <PageHeader
      title={<Heading>Global Asset Lineage</Heading>}
      right={<ReloadAllButton label="Reload definitions" />}
    />
  );
};
