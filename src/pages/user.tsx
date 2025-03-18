import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function Page({ tableName }: any) {
  return (
    <>
      <Helmet>
        <title> {`${tableName} - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserView tableName={tableName} />
    </>
  );
}
