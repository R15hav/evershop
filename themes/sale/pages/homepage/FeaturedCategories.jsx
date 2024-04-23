import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/clean.png" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Cleaning Kit Collection</h3>
          <div className="mb-1">
            <p>
            Cleaning kits (Sponges, Brush, Duster, Cloths and liquids), 
            Car interior & exterior care (Waxes, polish, Shampoo and other), 
            Car Lighting and Paints
            </p>
          </div>
          <Button url="/cleaning" title="Shop" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/elect.png" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">ELECTRONICS COLLECTION</h3>
          <div className="mb-1">
            <p>
            Stereo system(Sony, JBL, panasonic, panasound, etc), cameras(rear camers, sensors with rear displays), Android system and Lightings
            </p>
          </div>
          <Button url="/electronics" title="Shop" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/cust.png" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Customizations</h3>
          <div className="mb-1">
            <p>
            Enhance your car with spoilers for aerodynamics, carriers for extra storage, footrests for comfort, and guards for added protection and many more. 
            </p>
          </div>
          <Button url="/Customizations" title="Shop" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
