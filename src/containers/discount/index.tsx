//? LIBRARY
import './style/discount_pc.css';
import { memo } from 'react';
//? APPS
import { BatchList } from '../../types/batchList';

interface DiscountModel {
  data: BatchList[];
  loading: boolean;
}

function Discount({ data, loading }: DiscountModel) {
  return (
    <div className="col l-12 mo-12 c-12 Hide-on-mobile">
      {!loading && (
        <div className="discounts-main">
          <div className="discounts-list">
            {data?.map((item: BatchList, index: number) => {
              return (
                <div className="discounts-item" key={index}>
                  <img src={item.banner_image} className="discounts-image" alt="{discount.title}" />
                  <div className="discounts-name">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default memo(Discount);
