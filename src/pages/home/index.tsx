//? LIBRARY
import './style/xxx.css';
import IMG from '../../../public/assets/imgs';

import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
//? APPS
import { HomeFilter, Popup, SkeletonProduct } from '../../components';
import { useGetProductsQuery } from '../../services/post/index.hook';
import { useGetCategoryTreeQuery } from '../../services/category/index.hook';
import { useGetBannerQuery } from '../../services/banner/index.hook';
import { useGetBatchListQuery } from '../../services/batchList/index.hook';
import { useGetFlashSaleQuery } from '../../services/flashSale/index.hook';
import { useGetShopMallQuery } from '../../services/shopMall/index.hook';
import { useGetTopProductQuery } from '../../services/topProduct/index.hook';
import { Carousel, Discount, FlashSale, ShopMall, Category, BestSeller, ProductList } from '../../containers';

function Home() {
  const payload = {
    limit: 96,
    page: 1,
  };
  const { data: dataProduct, isLoading: isLoadingDataProduct } = useGetProductsQuery(payload);
  const { data: dataCategory, isLoading: isLoadingCategory } = useGetCategoryTreeQuery();
  const { data: dataBatchList, isLoading: isLoadingBatchList } = useGetBatchListQuery();
  const { data: dataBanner, isLoading: isLoadingBanner } = useGetBannerQuery();
  const { data: dataFlashSale, isLoading: isLoadingFlashSale } = useGetFlashSaleQuery();
  const { data: dataShopMall, isLoading: isLoadingShopMall } = useGetShopMallQuery();
  const { data: dataTopProduct, isLoading: isLoadingTopProduct } = useGetTopProductQuery();
  const [filterDay, setFilterDay] = useState(1);
  const [filterMonth, setFilterMonth] = useState(12);

  const settingsTopProduct = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const settingShopmall = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const setting2Shopmall = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 1000,
  };
  const settingsFlashSale = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const settingsBanner = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsCategory = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };

  const handleBack = () => {
    setFilterDay(filterDay - 1);
    if (filterDay === 0) {
      setFilterMonth(filterMonth - 1);
      setFilterDay(31);
    }
    if (filterMonth === 0) {
      setFilterMonth(12);
    }
  };
  const handleNext = () => {
    setFilterDay(filterDay + 1);
    if (filterDay > 30) {
      setFilterDay(1);
      setFilterMonth(filterMonth + 1);
    }
    if (filterMonth > 12) {
      setFilterMonth(1);
    }
  };
  return (
    <>
      <Popup />
      <div className="bg-[#f5f5f5] overflow-hidden mt-[120px] pt-[30px]">
        <div className="grid wide">
          <div className="row sm-gutter">
            <Carousel data={dataBanner?.response || []} loading={isLoadingBanner} settings={settingsBanner} />
            <Discount data={dataBatchList?.response || []} loading={isLoadingBatchList} />
            <Category data={dataCategory?.response || []} loading={isLoadingCategory} settings={settingsCategory} />
            <FlashSale data={dataFlashSale?.response || []} loading={isLoadingFlashSale} settings={settingsFlashSale} />

            <div className="col l-12 mo-12 c-12">
              <div className="w-full h-full pt-[20px] pb-[15px]">
                <img src={IMG.SIMPLE_BANNER} className="w-full h-full" alt=" " />
              </div>
            </div>
            <ShopMall
              data={dataShopMall?.response || [[]]}
              loading={isLoadingShopMall}
              settings={settingShopmall}
              settings2={setting2Shopmall}
            />

            <BestSeller data={dataTopProduct?.response || []} loading={isLoadingTopProduct} settings={settingsTopProduct} />

            <div className="col l-12 mo-12 c-12">
              <HomeFilter filterDay={filterDay} filterMonth={filterMonth} onBack={handleBack} onNext={handleNext} />
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
