//? LIBRARY
import './styles/topProduct.css';
import { memo, useState } from 'react';
//? APPS
import { ProductList, Pagination } from '../../containers';
import { useGetProductsQuery } from '../../services/post/index.hook';
import Loading from '../../components/loading';
import { NavLink } from 'react-router-dom';

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
            <h1 className="+W7HAM">Tìm kiếm hàng đầu</h1>
            <div className="navbar-with-more-menu mt-[20px]">
              <div className="container navbar-with-more-menu__wrapper" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className="navbar-with-more-menu__items">
                  <NavLink className="navbar-with-more-menu__item" to="/flash_sale?categoryId=0&amp;promotionId=137335624892417">
                    <span>Top Picks</span>
                  </NavLink>
                  <NavLink className="navbar-with-more-menu__item" to="/flash_sale?categoryId=34&amp;promotionId=137335624892417">
                    <span>HÀNG HIỆU GIÁ TỐT</span>
                  </NavLink>
                  <NavLink className="navbar-with-more-menu__item" to="/flash_sale?categoryId=11&amp;promotionId=137335624892417">
                    <span>SHOP NỔI BẬT</span>
                  </NavLink>
                  <NavLink className="navbar-with-more-menu__item" to="/flash_sale?categoryId=63&amp;promotionId=137335624892417">
                    <span>SHOP YÊU THÍCH</span>
                  </NavLink>
                  <NavLink className="navbar-with-more-menu__item" to="/flash_sale?categoryId=13&amp;promotionId=137335624892417">
                    <span>E-VOUCHER VÀ NẠP THẺ</span>
                  </NavLink>
                  <NavLink className="navbar-with-more-menu__item navbar-with-more-menu__item--active" to="/">
                    <span>BẮT TREND GIÁ SỐC</span>
                  </NavLink>
                  <div className="navbar-with-more-menu__item navbar-with-more-menu__more">
                    <div className="navbar-with-more-menu__more-label">Thêm</div>
                  </div>
                </div>
              </div>
            </div>
            <ProductList items={data?.response?.rows || []} col={'col l-2-4 mo-4 c-6'} loading={isLoading} />
            {isLoading ? <Loading /> : <Pagination setPayload={setPayload} totalPage={data?.totalPage} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(TopProducts);
