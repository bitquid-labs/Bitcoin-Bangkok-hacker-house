import React, {PropsWithChildren, useEffect} from 'react';

import Header from './Header';

const MainLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
