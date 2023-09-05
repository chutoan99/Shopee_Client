//? LIBRARY
import Slider from 'react-slick';
import { memo } from 'react';
import { Banner } from '../../types/banner';
import { useGetBannerQuery } from '../../services/banner/index.hook';
//? APP

function Carousel() {
  const { data, isLoading } = useGetBannerQuery();
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {!isLoading && (
        <>
          <div className="col l-8 mo-8 c-8" id="carousel">
            <Slider {...settings}>
              {data?.response?.map((listItem: Banner, index: number) => {
                return (
                  <div className="w-full h-full" key={index}>
                    <img src={listItem?.image_url} alt="Slider" className="w-full h-full" />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="col l-4 m-0-4 c-4">
            <div>
              {data?.response?.map((item: Banner, index: number) => {
                return (
                  index > data?.response?.length - 3 && (
                    <div className="mb-[5px]" key={index}>
                      <img src={item.image_url} alt="Carousel09" className="w-full h-[96%]" />
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default memo(Carousel);
