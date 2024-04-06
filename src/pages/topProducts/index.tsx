//? LIBRARY
import { NavLink } from 'react-router-dom';
import { memo, useState } from 'react';
//? APPS
import { Loading } from '../../components';
import { ProductList, Pagination } from '../../containers';
import { useGetProductsQuery } from '../../modules/post/hook';

function TopProducts() {
  const [payload, setPayload] = useState({
    limit: 96,
    page: 1,
  });
  const { data, isLoading } = useGetProductsQuery(payload);

  return (
    <div className="bg-[#f5f5f5] overflow-hidden mt-[120px]">
      <div className="grid wide">
        <div className="row sm-gutter">
          <div className="col l-12 mo-12 c-12">
            <h1 className="text-[#555] text-[1.75rem] font-medium text-center mx-0 my-[2.5625rem]">Tìm kiếm hàng đầu</h1>
            <div className="m-h-[50px] mt-[20px]">
              <div
                className="h-[68px] leading-[68px] flex shadow-[0_1px_1px_0_rgb(0_0_0_/_5%)]"
                style={{ backgroundColor: 'rgb(255, 255, 255)' }}
              >
                <div className="flex justify-around w-full">
                  <NavLink to="/flash_sale?categoryId=0&amp;promotionId=137335624892417">
                    <span>Top Picks</span>
                  </NavLink>
                  <NavLink to="/flash_sale?categoryId=34&amp;promotionId=137335624892417">
                    <span>HÀNG HIỆU GIÁ TỐT</span>
                  </NavLink>
                  <NavLink to="/flash_sale?categoryId=11&amp;promotionId=137335624892417">
                    <span>SHOP NỔI BẬT</span>
                  </NavLink>
                  <NavLink to="/flash_sale?categoryId=63&amp;promotionId=137335624892417">
                    <span>SHOP YÊU THÍCH</span>
                  </NavLink>
                  <NavLink to="/flash_sale?categoryId=13&amp;promotionId=137335624892417">
                    <span>E-VOUCHER VÀ NẠP THẺ</span>
                  </NavLink>
                  <NavLink to="/">
                    <span>BẮT TREND GIÁ SỐC</span>
                  </NavLink>
                  <div>
                    <div>Thêm</div>
                  </div>
                </div>
              </div>
            </div>
            <ProductList items={data?.response || []} col={'col l-2-4 mo-4 c-6'} loading={isLoading} />
            {isLoading ? <Loading /> : <Pagination setPayload={setPayload} totalPage={data?.totalPage} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(TopProducts);
