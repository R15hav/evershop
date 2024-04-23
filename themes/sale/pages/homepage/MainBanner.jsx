import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-2">
        <div />
        {/* <div className="text-center md:text-left px-2 ">
          <h2 className="h1 ">{text}</h2>
          <p>
            <span className="font-bold">From Accessories to Customizations</span>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
