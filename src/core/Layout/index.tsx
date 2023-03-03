import * as React from 'react';

import style from './index.module.scss';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={style.layout}>
      <div className={style.layout__content}>
        {children}
      </div>
    </div>
  );
}

export default Layout;
