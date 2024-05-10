import React from 'react';
import Area from '@components/common/Area';
import LoadingBar from '@components/common/LoadingBar';
import './Layout.scss';
import './tailwind.scss';

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <div className="sticky top-0 z-50 header flex justify-between bg-white">
        <Area
          id="header"
          noOuter
          coreComponents={[
            {
              component: { default: Area },
              props: {
                id: 'icon-wrapper',
                className: 'icon-wrapper flex justify-between space-x-1 '
              },
              sortOrder: 20
            }
          ]}
        />
      </div>
      <main className="content" >
        <Area id="content" className="" noOuter />
      </main>
      <a className="sticky z-50 whatsapp-button"  target="_blank" rel="noopener noreferrer" href="https://wa.me/919229770159?text=hi"><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
      <div className="footer bg-black">
        <Area id="footer" noOuter coreComponents={[]} />
      </div>
    </>
  );
}

export const layout = {
  areaId: 'body',
  sortOrder: 1
};
