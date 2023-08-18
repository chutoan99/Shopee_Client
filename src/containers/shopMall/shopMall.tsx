//? LIBRARY
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ICON from '../../../public/assets/icons';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//? APPS

import { ShopMall as shopMallInterFace } from '../../types/shopMall';
import shopMallData from '../../utils/shopMall';
interface ShopMallModel {
  data: [shopMallInterFace[]];
  loading: boolean;
  settings: any;
  settings2: any;
}

function ShopMall({ data, loading, settings, settings2 }: ShopMallModel) {
  return (
    <div className="col l-12 mo-12 c-12">
      {!loading && (
        <div className="category-main">
          <div className="bg-white">
            <div className="px-[20px] flex justify-between pb-[10px] pt-[20px]" style={{ borderBottom: '1px solid rgba(0,0,0,.05)' }}>
              <div className="homepage-mall-section">SHOPEE MALL</div>
              <div className="_5Ru4Na">
                <div className="LetK2C">
                  <img
                    className="a8XyX2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/6c502a2641457578b0d5f5153b53dd5d.png"
                    alt=" "
                  />
                  7 ngày miễn phí trả hàng
                </div>
                <div className="LetK2C">
                  <img
                    className="a8XyX2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/511aca04cc3ba9234ab0e4fcf20768a2.png"
                    alt=" "
                  />
                  Hàng chính hãng 100%
                </div>
                <div className="LetK2C">
                  <img
                    className="a8XyX2"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/homepage/16ead7e0a68c3cff9f32910e4be08122.png"
                    alt=" "
                  />
                  Miễn phí vận chuyển
                </div>
              </div>
              <NavLink to="/mall" className="w-[115px] capitalize text-[#ee4d2d]">
                Xem tất cả&nbsp;{ICON.ANGEL_RIGHT}
              </NavLink>
            </div>
            <div className="Home-product flex ">
              <div className="l-4 mo-8 c-8">
                <Slider {...settings}>
                  {shopMallData?.map((listItem: any, index: number) => {
                    return <img src={listItem?.src} alt="Slider" className="w-full h-full" />;
                  })}
                </Slider>
              </div>
              <div className="l-8">
                <div className="l-12">
                  <Slider {...settings2}>
                    {data?.map((ele: any, index: number) => (
                      <div key={index} className="col col-3">
                        {ele?.map((item: shopMallInterFace, index: number) => (
                          <div className="w-full px-[10px]" key={index}>
                            <div className="relative" style={{ boxShadow: 'unset' }}>
                              <LazyLoadImage effect="blur" src={item.image} alt="itemProduct" className="Home-product-item_img" />
                            </div>
                            <div className="uVbGLf od+H03 li78LN"></div>
                            <div>
                              <div className="ofs-carousel__item__text">{item.promo_text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopMall;
