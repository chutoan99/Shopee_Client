//? LIBRARY
import './styles/oder.css';
import './styles/payment_Methods.css';
import ICON from '../../../public/assets/icons';
import IMG from '../../../public/assets/imgs';
import SVG from '../../../public/assets/svgs';
import toast from 'react-hot-toast';
import { useState, memo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//? APPS
import { Cart } from '../../types/cart';
import { Loading2 } from '../../components';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';
import { formatPrice } from '../../utils/fomarPrice';
import { ALERT_INVALID_ADDRESS_ORDER, ALERT_INVALID_PHONE_ORDER } from '../../constants/msg';
import { useDeleteCartMutation } from '../../services/cart/index.hook';
import { useCreateOrderMutation } from '../../services/order/index.hook';

interface payload {
  item_groups_id: string;
  amount: string;
  option: string;
  final_total: number;
  total_num_items: number;
  note: string;
  shopid: number;
  shop_name: string;
}

function Oder() {
  const ship = 30000;
  const navigate = useNavigate();
  const { data } = useAppSelector((state: RootState) => state.buyCart);
  const { data: dataUser } = useAppSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalShip, setTotalShip] = useState(0);
  const [dataPayload, setDataPayload] = useState<payload[]>([]);
  const [banners, setBanners] = useState(false);
  const [variation, setVariation] = useState(undefined);
  const [deleteCart] = useDeleteCartMutation();
  const [createOrder] = useCreateOrderMutation();
  useEffect(() => {
    const dataTempt: Cart[] = [];
    data?.forEach((item: any) => {
      item.forEach((element: Cart) => {
        dataTempt.push(element);
      });
    });
    setTotalShip((data?.length ?? 1) * ship);
    setTotal(dataTempt.reduce((acc, curr) => acc + curr.overview.price * curr.amount, 0));

    if (dataTempt.length === 0) {
      navigate('/cart');
    }
    const newData = data.map((item: Cart[]) => {
      return {
        item_groups_id: JSON.stringify(item.map((ele) => ele.itemid)),
        amount: JSON.stringify(item.map((ele) => ele.amount)),
        option: JSON.stringify(item.map((ele) => ele.option)),
        final_total: item.reduce((acc, curr) => acc + curr.overview.price * curr.amount, 0) + ship,
        shopid: item[0]?.shopid,
        shop_name: item[0]?.overview?.shop_name,
        total_num_items: item.length,
        note: '',
      };
    });

    setDataPayload(newData);
  }, [data, ship, navigate]);

  const handleChangeVariation = (item: any, index: any) => {
    setVariation(item);
    setBanners(index === 0);
  };
  const updateNote = (newNote: string, index: number) => {
    dataPayload[index].note = newNote;
  };

  const handelSubmit = async () => {
    try {
      if (!dataUser.phone) {
        return (
          toast.error(ALERT_INVALID_PHONE_ORDER),
          setTimeout(() => {
            navigate('/user/profile');
          }, 3000)
        );
      }
      if (!dataUser.address) {
        return (
          toast.error(ALERT_INVALID_ADDRESS_ORDER),
          setTimeout(() => {
            navigate('/user/profile');
          }, 3000)
        );
      }
      setLoading(true);
      const response = await createOrder(dataPayload).unwrap();
      if (response.err === 0) {
        toast.success(response.msg);
        for (const item of data) {
          for (const ele of item) {
            deleteCart(ele.cartid).unwrap();
            setTimeout(() => {
              navigate('/user/purchase');
            }, 3000);
          }
        }
      }
    } catch (err: any) {
      toast.error(err.msg.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading2 />}
      <div className="p-[1.25rem] mt-[120px]" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="order-border"></div>
        <div className="order-info">
          <h1>{ICON.LOCATION}Địa Chỉ Nhận Hàng</h1>
          <div>
            <div className="order-name">
              {dataUser.name} {dataUser.phone ? `SĐT: (+84) ${dataUser.phone}` : ''}
            </div>

            <div className="order-name">{dataUser.phone ? `Mặc Định: ${dataUser.address} ` : ''}</div>
            <NavLink to="/user/purchase">Thay Đổi</NavLink>
          </div>
        </div>
        <div className="tile-content-container-oder Hide-on-mobile">
          <div className="title-content">
            <div className="text-center items-center">
              <p>Sản Phẩm</p>
            </div>
          </div>
          <div className="title-content">
            <p className="text-center">Đơn Giá</p>
          </div>
          <div className="title-content">
            <p className="text-center">Số Lượng</p>
          </div>
          <div className="title-content">
            <p className="text-center">Thành Tiền</p>
          </div>
        </div>

        <>
          {data?.map((ele: Cart[], index: number) => (
            <div key={index}>
              <div className="table-body-list">
                <div>
                  <div className="backR1">
                    <div className="table_body-shop-name table_body-shop-name-order">
                      <span>Yêu Thích</span>
                      <h1 className="table_body-shop">{ele[0]?.overview?.shop_name}</h1>
                      <label className="table_body-shop-icon">{ICON.MESS}</label>
                    </div>
                  </div>
                  {ele?.map((item: Cart) => (
                    <div className="grid oderR2" key={item.cartid}>
                      <div className="shopping_cart">
                        <div className="shopping_cart-img-order">
                          <img src={item?.overview?.image} alt={item?.overview?.name} />
                        </div>
                        <div className="shopping_cart-img-title-order">
                          <div className="title-order-content">{item?.overview?.name}</div>
                          <div className="flex"></div>
                          <div className="shopping_cart-0ld-price px-[5px]">
                            <h2>đ {formatPrice(item?.overview?.price_max)}</h2>
                          </div>
                          <div className="px-[5px] text-center">x{item.amount}</div>
                          <div className="shopping_cart-new-price px-[5px]">đ {formatPrice(item?.overview?.price, item?.amount)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-container">
                <div className="order-note">
                  <span>Lời nhắn:</span>
                  <div className="order-note-input">
                    <input placeholder="Lưu Ý Cho Người Bán..." type="text" onChange={(e) => updateNote(e.target.value, index)}></input>
                  </div>
                </div>
                <div className="order-ship">
                  <div className="order-shipping-unit">
                    <span>Đơn vị vận chuyển</span>
                    <p>Nhanh</p>
                    <label>Thay Đổi</label>
                    <h2> đ {ship.toLocaleString('it-IT')}</h2>
                  </div>
                  <div className="order-received-date">
                    <p>Nhận hàng vào 27 Th08 - 30 Th08</p>
                    <p> (Nhanh tay vào ngay "Shopee Voucher" để săn mã Miễn phí vận chuyển nhé!)</p>
                  </div>
                </div>
              </div>
              <div className="order-price">
                <span>Tổng số tiền ({ele?.reduce((acc: any, curr: any) => acc + curr.amount, 0)} sản phẩm):</span>
                <label>đ{(ele?.reduce((acc, curr) => acc + curr.overview.price * curr.amount, 0) + ship).toLocaleString('it-IT')}</label>
              </div>
            </div>
          ))}
        </>

        <div className="order-shopee-xu">
          <div style={{ borderBottom: '1px solid rgba(0,0,0,.05)' }}>
            <div className="order-shopee-xu-heading">
              <div className="order-shoppe-heading-inner">
                {ICON.TAGS}
                <label>Shopee Voucher</label>
              </div>
              <span>Chọn Voucher</span>
            </div>
          </div>
          <div>
            <div className="order-shopee-xu-footer">
              <div className="order-shopee-xu-footer-inner">
                {SVG.SHOPEEXU}
                <label>Shopee Xu</label>
                <span> Không thể sử dụng Xu</span>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-payment-method-view__current checkout-payment-setting">
          <div className="checkout-payment-method-view__current-title">Phương thức thanh toán</div>
          <div className="checkout-payment-setting__payment-methods-tab">
            {['Ví ShopeePay', 'Thẻ Tín dụng/Ghi nợ', 'Số dư TK Shopee(₫0)', 'Thanh toán khi nhận hàng'].map((item, index) => (
              <button
                className={`product-variation ${variation === item ? 'product-variation--selected' : ''}`}
                onClick={() => {
                  handleChangeVariation(item, index);
                }}
                key={index}
              >
                {item}
                {variation === item ? <div className="product-variation__tick">{ICON.HEART}</div> : null}
              </button>
            ))}
          </div>
        </div>
        {banners && (
          <div className="checkout-payment-setting__banners">
            <div className="channel-banner channel-banner__single" style={{ backgroundColor: 'rgb(238, 77, 45)' }}>
              <div className="channel-banner__icon">
                <img src={IMG.SALES_XU} alt="" />
              </div>
              <div className="channel-banner__logo">
                <img src={IMG.PAY} alt="" />
              </div>
              <div className="channel-banner__main-desc">
                <div>Giảm đến 90K</div>
              </div>
              <div className="channel-banner__sub-desc">Ưu đãi Ví ShopeePay</div>
            </div>
            <div>
              <div className="bank-transfer-category mt-[20px]" style={{ borderTop: '0.0625rem dashed rgba(0, 0, 0, 0.09)' }}>
                <div className="bank-transfer-category__body">
                  <div className="checkout-bank-transfer-item checkout-bank-transfer-item--disabled">
                    <div
                      className="stardust-radio"
                      // tabindex="0"
                      role="radio"
                      aria-checked="false"
                      aria-disabled="false"
                    >
                      <div className="stardust-radio-button">
                        <div className="stardust-radio-button__outer-circle">
                          <div className="stardust-radio-button__inner-circle"></div>
                        </div>
                      </div>
                      <div className="stardust-radio__content">
                        <div className="stardust-radio__label">
                          <div className="checkout-bank-transfer-item__card">
                            <div className="checkout-bank-transfer-item__icon-container">
                              <img
                                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/37110bc844b571f80e7dd14beb5415e9.png"
                                className="checkout-bank-transfer-item__icon"
                                alt=""
                              />
                            </div>
                            <div className="checkout-bank-transfer-item__main">
                              <div className="checkout-bank-transfer-item__title">Ví ShopeePay Số dư</div>
                              <div className="checkout-bank-transfer-item__subtitle">₫0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bank-transfer-category">
                <div className="bank-transfer-category__body">
                  <div className="checkout-bank-transfer-item">
                    <div
                      className="stardust-radio stardust-radio--checked"
                      // tabIndex="0"
                      role="radio"
                      aria-checked="true"
                    >
                      <div className="stardust-radio-button stardust-radio-button--checked">
                        <div className="stardust-radio-button__outer-circle">
                          <div className="stardust-radio-button__inner-circle"></div>
                        </div>
                      </div>
                      <div className="stardust-radio__content">
                        <div className="stardust-radio__label">
                          <div className="checkout-bank-transfer-item__card">
                            <div className="checkout-bank-transfer-item__icon-container">
                              <img
                                src="https://static.v2.airpay.vn/admin/channelIcon/images_v101/c134/icon_c13403_t1610003677268.png"
                                className="checkout-bank-transfer-item__icon"
                                alt=""
                              />
                            </div>
                            <div className="checkout-bank-transfer-item__main">
                              <div className="checkout-bank-transfer-item__title">VietinBank</div>
                              <div className="checkout-bank-transfer-item__subtitle checkout-bank-account-item__number">*7553</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="order-pay">
          <div>
            <div className="order-pay-inner">
              <div></div>
              <div className="order-pay-content">
                <h3>Tổng tiền hàng</h3>
                <h3>Phí vận chuyển</h3>
                <h3>Tổng thanh toán:</h3>
              </div>
              <div className="order-pay-content">
                <h3>đ{formatPrice(total)}</h3>
                <h3>đ{formatPrice(totalShip)}</h3>
                <h1>₫{formatPrice(total, 0, totalShip)}</h1>
              </div>
            </div>
            <div className="order-pay-footer">
              <div className="order-pay-footer-des">
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
                <NavLink to="https://shopee.vn/legaldoc/policies">Điều khoản Shopee</NavLink>
              </div>
              <button onClick={handelSubmit}>Đặt hàng</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(Oder);
