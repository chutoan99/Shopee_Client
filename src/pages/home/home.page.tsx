//? LIBRARY
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
//? APPS
import { useGetProductsQuery } from '../../modules/post/hooks'
import BannerComponent from '../../modules/banner/components/banner.component'
import BatchListComponent from '../../modules/batchList/components/batch-list.component'
import CategoryComponent from '../../modules/category/components/category.component'
import { FlashSaleComponent } from '../../modules/flashSale/components'
import { ShopMallComponent } from '../../modules/shopMall/components'
import { TopProductComponent } from '../../modules/topProduct/components'
import ProductListComponent from '../../modules/post/components/product-list.component'
import { HomeFilterComponent } from '../../components/homeFilter'
import { SkeletonProductComponent } from '../../components/loadingSkeleton'
import { PopupComponent } from '../../components/popup'

function HomePage(): JSX.Element {
  const payload = {
    limit: 96,
    page: 1
  }
  const { data: dataProduct, isLoading: isLoadingDataProduct } = useGetProductsQuery(payload)

  return (
    <>
      <PopupComponent />
      <div className='bg-[#f5f5f5] overflow-hidden mt-[120px] pt-[30px]'>
        <div className='grid wide'>
          <div className='row sm-gutter'>
            <BannerComponent />
            <BatchListComponent />
            <CategoryComponent />
            <FlashSaleComponent />
            <div className='col l-12 mo-12 c-12'>
              <div className='w-full h-full pt-[20px] pb-[15px]'>
                <img src='/assets/Img/simple_banner.png' className='w-full h-full' alt=' ' />
              </div>
            </div>
            <ShopMallComponent />
            <TopProductComponent />
            <div className='col l-12 mo-12 c-12'>
              <HomeFilterComponent />
              <SkeletonProductComponent isLoading={isLoadingDataProduct} />
              <ProductListComponent items={dataProduct?.response || []} col={'col l-2 mo-4 c-6'} loading={isLoadingDataProduct} />
              <div className='w-full text-center my-[1.25rem]'>
                <NavLink
                  className='min-w-[24.375rem] bg-[#fff] h-10 text-[#555] border shadow-[0_1px_1px_0_rgba(0,0,0,0.03)] relative overflow-visible inline-flex max-w-[220px] text-ellipsis flex-col text-sm box-border items-center justify-center capitalize cursor-pointer px-5 py-0 rounded-sm border-solid border-[rgba(0,0,0,0.09)] hover:bg-[rgba(0,0,0,.01)] leading-[34px]'
                  style={{
                    minWidth: '396px',
                    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.09)',
                    outline: '0',
                    WebkitLineClamp: 1
                  }}
                  to='/daily_discover'
                >
                  Xem thêm
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default memo(HomePage)
