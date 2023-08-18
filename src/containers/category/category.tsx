//? LIBRARY
import './category.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface CategoryModel {
  data: any;
  loading: boolean;
  settings: any;
}

function Category({ data, loading, settings }: CategoryModel) {
  return (
    <div className="col l-12 mo-12 c-12">
      <div className="category-main">
        {!loading && (
          <div className="bg-white">
            <div className="category-header">DANH MỤC</div>
            <Slider {...settings}>
              {data?.map((category: any, index: number) => (
                <div key={index}>
                  {category?.map((ele: any, index: number) => (
                    <NavLink to={`/categories/${ele.display_name}/${ele.catid}`} className="category-item" key={index}>
                      <img src={`https://cf.shopee.vn/file/${ele.image}`} className="category-image" alt={ele.display_name} />
                      <div className="category-name">
                        <h4>{ele.display_name}</h4>
                      </div>
                    </NavLink>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}
export default memo(Category);
