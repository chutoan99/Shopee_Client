//? LIBRARY
import ICON from '../../../public/assets/icons';
import IMG from '../../../public/assets/imgs';
import { memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//? APPS
import { PostSimple } from '../../types/post';
import { formatPrice } from '../../utils/fomarPrice';
import { generateStart } from '../../utils/generateStart';
import { useAppDispatch } from '../../hooks/hooks';
import { OtherActions } from '../../redux/otherSlice';
import { AppDispatch } from '../../app/store';
interface HomeProducts {
  items: PostSimple[];
  col: string;
  loading: boolean;
}
function ProductList({ items, col, loading }: HomeProducts) {
  const dispatch: AppDispatch = useAppDispatch();
  const [likes, setLikes] = useState<string[]>(items.map(() => 'fa-regular fa-heart'));
  const changeLike = (index: number) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];

      if (prevLikes[index] === 'fa-solid fa-heart') {
        newLikes[index] = 'fa-regular fa-heart';
        dispatch(OtherActions.updateHeartFalse());
      } else {
        newLikes[index] = 'fa-solid fa-heart';
        dispatch(OtherActions.updateHeartTrue());
        setTimeout(() => {
          dispatch(OtherActions.updateHeartFalse());
        }, 1400);
      }
      return newLikes;
    });
  };

  return (
    <div className="Home-product">
      <div className="row sm-gutter">
        {items?.map((item: PostSimple, index: number) => (
          <div className={col} key={index}>
            <div className="Home-product-item" key={item.itemid}>
              {item?.show_free_shipping === 1 ? <img src={IMG.SALE_STICKER} className="absolute" style={{ zIndex: '9' }} alt=" " /> : null}
              <LazyLoadImage effect="blur" src={item.image} alt="itemProduct" className="Home-product-item_img" />
              <NavLink to={`/detailProduct/${item?.itemid}/${item?.shopid}`} className="Home-product-item-name">
                {item?.name}
              </NavLink>
              <div className="Home-product-item_price">
                {item?.price_before_discount !== 0 ? (
                  <span className="Home-product-item_price-old">{formatPrice(item.price_before_discount)}đ</span>
                ) : (
                  <span className="Home-product-item_price-old"></span>
                )}

                <span className="Home-product-item_price-current">{formatPrice(item?.price)}đ</span>
              </div>
              <div className="Home-product-item_actiton">
                <span className="Home-product-item_like Home-product-item_liked" onClick={() => changeLike(index)}>
                  <i className={likes[index]}></i>
                </span>
                <div className="Home-product-item_rating">{generateStart(4)}</div>
                <span className="Home-product-item-sold">{item?.historical_sold}đã bán</span>
              </div>
              {item?.is_official_shop ? (
                <div
                  className="Home-product-item_favourite bg-red-600"
                  style={{ background: '#d0011b', lineHeight: '1.3rem', width: '35px' }}
                >
                  <span className="ml-[5px]"> Mall</span>
                </div>
              ) : (
                <div className="Home-product-item_favourite">
                  {ICON.HEART}
                  <span>Yêu thích</span>
                </div>
              )}
              {item.discount && (
                <div className="Home-product-item_sale-off">
                  <span className="Home-product-item_sale-off-percent">{item.discount}</span>
                  <br></br>s<span className="Home-product-item_sale-off-label">Giảm</span>
                </div>
              )}

              <div className="home-product-item-footer">Tìm sản phẩm tương tự</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(ProductList);
