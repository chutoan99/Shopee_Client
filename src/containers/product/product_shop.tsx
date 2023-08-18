//? LIBRARY
import { memo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//? APPS
import { ShopInterface } from '../../types/shop';
import { AppDispatch } from '../../app/store';
import { useAppDispatch } from '../../hooks/hooks';
import { OtherActions } from '../../redux/otherSlice';
import { useCreateRoomMutation } from '../../services/room/index.hook';
interface ProductShopModel {
  data: ShopInterface;
}
interface PayloadRoom {
  shopid: number;
}
function ProductShop({ data }: ProductShopModel) {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const [createRoom] = useCreateRoomMutation();

  const onChatWithShop = async () => {
    const payload: PayloadRoom = {
      shopid: data.shopid,
    };
    dispatch(OtherActions.ToggleIsChat());
    createRoom(payload).unwrap();
  };

  return (
    <div className="bg-[#f5f5f5] overflow-hidden py-[16px]">
      <div className="grid wide">
        <div className="NLeTwo page-product__shop">
          <div className="jwlMoy">
            <div onClick={() => navigate(`/shop/${data?.shopid}`)} className="W0LQye">
              <div className="shopee-avatar UadQpu">
                <div className="shopee-avatar__placeholder">
                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-headshot">
                    <g>
                      <circle cx="7.5" cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                      <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                    </g>
                  </svg>
                </div>
                <img className="shopee-avatar__img" src={data?.portrait} alt="" />
              </div>
            </div>
            <div className="oAVg4E">
              <div className="VlDReK">{data?.username}</div>
              <div className="TaEoi4">
                <div className="zSXxlI">Online 13 phút trước</div>
              </div>
              <div className="Uwka-w">
                <button type="button" className="btn btn-tinted btn--s btn--inline Q-sdJs">
                  <svg viewBox="0 0 16 16" className="shopee-svg-icon JWAQyX">
                    <g fillRule="evenodd">
                      <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                    </g>
                  </svg>
                  <span className="cursor-pointer" onClick={onChatWithShop}>
                    Chat ngay
                  </span>
                </button>
                <button
                  onClick={() => navigate(`/shop/${data?.shopid}`)}
                  className="btn btn-light btn--s btn--inline btn-light--link Vf+pt4"
                  style={{ border: '1px solid #ccc' }}
                >
                  <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} strokeWidth={0} className="shopee-svg-icon _9Sz-n3">
                    <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" />
                  </svg>
                  <span>xem shop</span>
                </button>
              </div>
            </div>
          </div>
          <div className="Po6c6I">
            <div className="R7Q8ES">
              <label className="siK1qW">Đánh giá</label>
              <span className="Xkm22X">{data?.rating_bad + data?.rating_good + data?.rating_normal}</span>
            </div>
            <div className="R7Q8ES">
              <label className="siK1qW">tỉ lệ phản hồi</label>
              <span className="Xkm22X">{data?.response_rate}%</span>
            </div>
            <div className="R7Q8ES">
              <label className="siK1qW">tham gia</label>
              <span className="Xkm22X">6 năm trước</span>
            </div>
            <NavLink className="R7Q8ES p48aHT" to="/">
              <label className="siK1qW">Sản phẩm</label>
              <span className="Xkm22X">{data?.item_count}</span>
            </NavLink>
            <div className="R7Q8ES">
              <label className="siK1qW">thời gian phản hồi</label>
              <span className="Xkm22X">{data?.response_time}</span>
            </div>
            <div className="R7Q8ES">
              <label className="siK1qW">Người theo dõi</label>
              <span className="Xkm22X">{data?.follower_count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductShop);
