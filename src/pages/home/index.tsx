//? LIBRARY
import './style/xxx.css';
import IMG from '../../../public/assets/imgs';

import { memo } from 'react';
import { NavLink } from 'react-router-dom';
//? APPS
import { useGetProductsQuery } from '../../services/post/index.hook';
import { Popup, SkeletonProduct } from '../../components';
import { Carousel, Discount, FlashSale, ShopMall, Category, BestSeller, ProductList, HomeFilter } from '../../containers';

function Home() {
  const payload = {
    limit: 96,
    page: 1,
  };
  const { data: dataProduct, isLoading: isLoadingDataProduct } = useGetProductsQuery(payload);

  return (
    <>
      <Popup />
      <div className="bg-[#f5f5f5] overflow-hidden mt-[120px] pt-[30px]">
        <div className="grid wide">
          <div className="row sm-gutter">
            <Carousel />
            <Discount />
            <Category />
            <FlashSale />
            <div className="col l-12 mo-12 c-12">
              <div className="w-full h-full pt-[20px] pb-[15px]">
                <img src={IMG.SIMPLE_BANNER} className="w-full h-full" alt=" " />
              </div>
            </div>
            <ShopMall />
            <BestSeller />
            <div className="col l-12 mo-12 c-12">
              <HomeFilter />
              <SkeletonProduct isLoading={isLoadingDataProduct} />
              <ProductList items={dataProduct?.response?.rows || []} col={'col l-2 mo-4 c-6'} loading={isLoadingDataProduct} />
              <div className="w-full text-center my-[1.25rem]">
                <NavLink
                  className="btn btn-light btn--m btn--inline btn-light--link hover:bg-[rgba(0,0,0,.01)] leading-[34px]"
                  style={{ minWidth: '396px', boxShadow: '0 1px 1px 0 rgb(0 0 0 / 9%)' }}
                  to="/daily_discover"
                >
                  Xem thêm
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Home);
