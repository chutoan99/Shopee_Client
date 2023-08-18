//? LIBRARY
import ICON from '../../../public/assets/icons';
import IMG from '../../../public/assets/imgs';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//? APPS
import { FlashSale as FlashSaleType } from '../../types/flashSale';

interface FlashSaleModel {
  data: FlashSaleType[];
  settings: any;
  loading: boolean;
}
function FlashSale({ data, settings, loading }: FlashSaleModel) {
  return (
    <div className="col l-12 mo-12 c-12">
      {/* <div className="category-main">
        <div className="bg-white">
          <div className="px-[20px] flex justify-between pb-[10px] pt-[20px]">
            <div className="w-full h-full">
              <div className="w-[114px] h-full ">
                <img src={IMG.ICON_FLASH_SALE} className="w-full h-full" alt="" />
              </div>
            </div>
            <NavLink to="/flash_sale" className="w-[115px] capitalize text-[#ee4d2d]">
              Xem tất cả&nbsp;{ICON.ANGEL_RIGHT}
            </NavLink>
          </div>
          {!loading && (
            <div className="row gap-[10px]">
              <Slider {...settings}>
                {data?.map((item: FlashSaleType, index: number) => (
                  <NavLink to="/flash_sale" className="" style={{ boxShadow: 'unset' }} key={index}>
                    <LazyLoadImage effect="blur" src={item.image} alt="itemProduct" className="Home-product-item_img" />
                    <div className="ML8D8p">
                      <div className="yCebL1 QpXvtd WNgAbL">
                        <div className="LYc+Cb QpXvtd WNgAbL">
                          <div className="S82jCy jNH2Rc BnrHAR">
                            <div className="hSM8kk">
                              <span className="_3DNk+W jNH2Rc BnrHAR">₫</span>
                              {item.price}
                            </div>
                          </div>
                        </div>
                        <div className="Nq-pih QpXvtd" style={{ padding: '10px 10px 10px 6px' }}>
                          <div className="rZzxlM" style={{ height: '16px' }}>
                            <div className="eNmE7o RJ6Vpu">ĐANG BÁN CHẠY</div>
                            <div
                              className="bg-[#ef3313] z-9  w-[7%] h-[16px] absolute"
                              style={{ borderRadius: '8px 0px 0px 8px', color: 'red', zIndex: 9 }}
                            ></div>
                            <div className="SqDxib" style={{ borderRadius: '8px' }}></div>
                          </div>
                        </div>
                        <div className="Home-product-item_sale-off">
                          <span className="Home-product-item_sale-off-percent">{item.discount}</span>
                          <br></br>s<span className="Home-product-item_sale-off-label">Giảm</span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default FlashSale;
