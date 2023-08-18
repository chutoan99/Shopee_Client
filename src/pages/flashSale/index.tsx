//? LIBRARY
import './style/flashSale.css';
import SVG from '../../../public/assets/svgs';
import IMG from '../../../public/assets/imgs';
import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//? APPS
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGetFlashSaleQuery } from '../../services/flashSale/index.hook';

function FlashSales() {
  const { data } = useGetFlashSaleQuery();
  const navigate = useNavigate();

  const { heart } = useAppSelector((state: RootState) => state.others);

  return (
    <>
      {heart && <div className="heart-animation2">{SVG.HEART}</div>}
      <div className="tfP976 UEA0+0">
        <div className="cuwDuU tMl-71">
          <div className="w-full h-full ">
            <img src={IMG.ICON_FLASH_SALE} className="w-full h-full" alt="" />
          </div>
          <div className="VVzkan _3HXaZN">Kết thúc trong</div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] overflow-hidden">
        <div className="grid wide">
          <div className="row sm-gutter">
            <div className="w-full h-full">
              <img src="https://cf.shopee.vn/file/sg-11134004-23010-jp5zi98p7umv51" alt="" className="w-[100%] h-[100%]" />
            </div>
            <div className="image-carousel " style={{ margin: '0px' }}>
              <div className="image-carousel__item-list-wrapper">
                <ul className="image-carousel__item-list" style={{ width: '100%', transform: 'translate(0px, 0px)' }}>
                  <li className="image-carousel__item" style={{ padding: '0px', width: '20%' }}>
                    <div>
                      <NavLink to="/" className="_6RLDaT cNjnOP">
                        <div className="qneuRU">21:00</div>
                        <div className="RrAVA8">Đang diễn ra</div>
                      </NavLink>
                    </div>
                  </li>
                  <li className="image-carousel__item" style={{ padding: '0px', width: '20%' }}>
                    <div>
                      <NavLink to="/" className="_6RLDaT">
                        <div className="qneuRU">00:00</div>
                        <div className="RrAVA8">Ngày mai</div>
                      </NavLink>
                    </div>
                  </li>
                  <li className="image-carousel__item" style={{ padding: '0px', width: '20%' }}>
                    <div>
                      <NavLink to="/" className="_6RLDaT">
                        <div className="qneuRU">02:00</div>
                        <div className="RrAVA8">Ngày mai</div>
                      </NavLink>
                    </div>
                  </li>
                  <li className="image-carousel__item" style={{ padding: '0px', width: '20%' }}>
                    <div>
                      <NavLink to="/" className="_6RLDaT">
                        <div className="qneuRU">09:00</div>
                        <div className="RrAVA8">Ngày mai</div>
                      </NavLink>
                    </div>
                  </li>
                  <li className="image-carousel__item" style={{ padding: '0px', width: '20%' }}>
                    <div>
                      <NavLink to="/" className="_6RLDaT">
                        <div className="qneuRU">12:00</div>
                        <div className="RrAVA8">Ngày mai</div>
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
                  <NavLink
                    className="navbar-with-more-menu__item navbar-with-more-menu__item--active"
                    to="/flash_sale?categoryId=24&amp;promotionId=137335624892417"
                  >
                    <span>BẮT TREND GIÁ SỐC</span>
                  </NavLink>
                  <div className="navbar-with-more-menu__item navbar-with-more-menu__more">
                    <div className="navbar-with-more-menu__more-label">Thêm</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-12 mo-12 c-12 mt-[20px]">
              <div className="Home-product">
                <div className="row sm- px-[15px] pb-[12px]">
                  {data?.response?.map((item: any, index: number) => (
                    <div className="col l-2 mo-4 c-6" key={item.id}>
                      <div
                        className="Home-product-item"
                        key={item.itemid}
                        onClick={() => navigate(`/detailProduct/${item?.itemid}/${item?.shopid}`)}
                      >
                        {item?.show_free_shipping === 1 ? (
                          <img src={IMG.SALE_STICKER} className="absolute" style={{ zIndex: '9' }} alt=" " />
                        ) : null}
                        <LazyLoadImage effect="blur" src={item.image} alt="itemProduct" className="Home-product-item_img" />
                        <h4 className="Home-product-item-name">{item?.name}</h4>
                        <div className="Nq-pih QpXvtd" style={{ padding: '10px' }}>
                          <div className="rZzxlM" style={{ height: '16px' }}>
                            <div className="eNmE7o RJ6Vpu">ĐANG BÁN CHẠY</div>
                            <div
                              className="bg-[#ef3313] z-9  w-[7%] h-[16px] absolute"
                              style={{ borderRadius: '8px 0px 0px 8px', color: 'red', zIndex: 9 }}
                            ></div>
                            <div className="SqDxib" style={{ borderRadius: '8px' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(FlashSales);
