//? LIBRARY
import ICON from '../../../public/assets/icons';
import './style/index.css';

import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//? APP
import { TopProDucts } from '../../types/topProduct';
interface BestSellerModel {
  data: TopProDucts[];
  settings: any;
  loading: boolean;
}

function BestSeller({ data, settings, loading }: BestSellerModel) {
  return (
    <div className="col l-12 mo-12 c-12">
      {/* {!loading && (
        <div className="category-main">
          <div className="bg-white">
            <div className="px-[20px] flex justify-between pb-[10px] pt-[20px]" style={{ borderBottom: '1px solid rgba(0,0,0,.05)' }}>
              <div className=" text-[#ee4d2d]">TÌM KIẾM HÀNG ĐẦU</div>
              <NavLink className="w-[115px] capitalize text-[#ee4d2d]" to="/top_products">
                Xem tất cả&nbsp;{ICON.ANGEL_RIGHT}
              </NavLink>
            </div>
            <ul className="a11y-image-carousel__item-list hidesb hidesb-wk">
              <Slider {...settings}>
                {data?.map((item: TopProDucts, index: number) => (
                  <li className="a11y-image-carousel__item" key={index} style={{ padding: 0, width: '16.6667%', scrollSnapAlign: 'start' }}>
                    <a className="s4sxRU _2EYI41" href="/top_products?catId=VN_BITL0_440%3Atop_sold">
                      <div className="yp2tny">
                        <div className="gNcuiz eBSjyh G4XnOI" />
                        <div className="iSW0RU V3STwW">
                          <img
                            width="invalid-value"
                            height="invalid-value"
                            className="nDMd5e nj6ZpZ"
                            style={{ objectFit: 'contain' }}
                            src="https://down-vn.img.susercontent.com/file/c7c62fbd0b7bf3feb1da1aafc274752e"
                          />
                        </div>
                        <div className="ir2WDv">Bán 8k+ / tháng</div>
                      </div>
                      <div className="_0m0EXH">Bể Cá Mini</div>
                    </a>
                  </li>
                ))}
              </Slider>
            </ul>

            <div className="Home-product" id="topProduct">
              <div className="row sm- px-[15px] py-[12px]">
                <Slider {...settings}>
                  {data?.map((item: TopProDucts, index: number) => (
                    <NavLink key={index} to="/top_products">
                      <div className="relative" style={{ boxShadow: 'unset' }}>
                        <LazyLoadImage effect="blur" src={JSON.parse(item?.images)} alt="itemProduct" className="Home-product-item_img" />
                        <div className="pDTGqb absolute w-full">Bán {item.count} / tháng</div>
                      </div>
                      <div className="uVbGLf od+H03 li78LN"></div>
                      <div>
                        <div className="cXODCZ">{item.name}</div>
                      </div>
                    </NavLink>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default BestSeller;
