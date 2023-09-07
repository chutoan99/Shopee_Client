//? LIBRARY
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//? APP
import { TopProDucts } from '../../types/topProduct';
import { useGetTopProductQuery } from '../../services/topProduct/index.hook';

function BestSeller() {
  const { data, isLoading } = useGetTopProductQuery();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="col l-12 mo-12 c-12">
      {!isLoading && (
        <div className="pt-[20px]">
          <div className="bg-[#fff]">
            <div className="px-[20px] flex justify-between pb-[10px] pt-[20px] border-b-['1px] border-b-[rgba(0,0,0,0.05)'] border-solid">
              <div className=" text-[#ee4d2d]">TÌM KIẾM HÀNG ĐẦU</div>
              <NavLink className="w-[115px] capitalize text-[#ee4d2d]" to="/top_products">
                Xem tất cả&nbsp;<i className="fa-solid fa-angle-right"></i>
              </NavLink>
            </div>
            <div className="mb-[10px]" id="topProduct">
              <div className="row sm- px-[15px] py-[12px]">
                <Slider {...settings}>
                  {data?.response?.map((item: TopProDucts, index: number) => (
                    <NavLink key={index} to="/top_products">
                      <div className="relative" style={{ boxShadow: 'unset' }}>
                        <LazyLoadImage
                          effect="blur"
                          src={JSON.parse(item?.images)}
                          alt="itemProduct"
                          className=" w-full cursor-pointer bg-[top_center] bg-contain bg-no-repeat rounded-br-[2px] rounded-bl-[2px]"
                        />
                        <div className="h-[1.5625rem] bg-[rgba(0,0,0,0.26)] text-[#fff] text-center left-0 bottom-0 absolute w-full">
                          Bán {item.count} / tháng
                        </div>
                      </div>
                      <div className="bg-no-repeat bg-[1.5rem_1.875rem] absolute z-[1] w-8 h-10 left-0 top-0"></div>
                      <div>
                        <div
                          className="text-ellipsis overflow-hidden text-[#555] text-[1.125rem] text-left capitalize mt-[1.25rem]"
                          style={{
                            wordBreak: 'break-word',
                            display: '-webkit-box',
                            textOverflow: 'ellipsis',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                          }}
                        >
                          {item.name}
                        </div>
                      </div>
                    </NavLink>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BestSeller;
