//? LIBRARY
import './styles/shopping.css';
import './styles/item_cart.css';
import './styles/cart.css';
import IMG from '../../../public/assets/imgs';
import ICON from '../../../public/assets/icons';
import SVG from '../../../public/assets/svgs';
import { useState, memo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//? APPS
import { Loading } from '../../components';
import { Cart } from '../../types/cart';
import { AppDispatch } from '../../app/store';
import { formatPrice } from '../../utils/fomarPrice';
import { buyCartActions } from '../../redux/buyCart.slice';
import { useAppDispatch } from '../../hooks/hooks';
import { useDeleteCartMutation, useGetCartsQuery, useUpdateCartMutation } from '../../services/cart/index.hook';
import { toast } from 'react-hot-toast';

function CartPage() {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const [total, setTotal] = useState(0);
  const [checked, setChecked] = useState<any>([]);
  const [allChecked, setAllChecked] = useState(false);
  const [buyCart, setBuyCart] = useState<Cart[]>([]);
  const [deleteCart] = useDeleteCartMutation();
  const [updateCart] = useUpdateCartMutation();
  const [data, setData] = useState<[Cart[]]>([[]]);
  const { data: dataCart, isLoading, refetch: fetchCarts } = useGetCartsQuery();

  const [selectedOption, setSelectedOption] = useState<{ itemIndex: number; variationIndex: number } | null>(null);
  const [agrsUpdate, setAgrsUpdate] = useState({
    cartid: 0,
    payload: {
      amount: 0,
      option: '',
    },
  });

  useEffect(() => {
    dataCart?.response && setData(dataCart?.response);
  }, [dataCart]);

  const onCheck = (itemid: number) => {
    setChecked((prev: any) => {
      const isChecked = checked.includes(itemid);
      if (isChecked) {
        return checked.filter((item: any) => item !== itemid);
      } else {
        return [...prev, itemid];
      }
    });
  };

  const onAllCheck = () => {
    setAllChecked(!allChecked);
    if (!allChecked) {
      const itemIds = data?.flatMap((item: any) => item.map((e: Cart) => e.itemid));
      setChecked(itemIds);
    } else {
      setChecked([]);
    }
  };

  const onIncrease = async (item: any) => {
    const payload = {
      amount: +item.amount + 1,
      option: item.option,
    };
    const agrs = { cartid: item.cartid, body: payload };
    await updateCart(agrs).unwrap();
    fetchCarts();
  };

  const onReduced = async (item: any) => {
    const payload = {
      amount: +item.amount - 1,
      option: item.option,
    };
    if (payload.amount === 0) return;
    const agrs = { cartid: item.cartid, body: payload };
    await updateCart(agrs).unwrap();
    fetchCarts();
  };

  const onChangeOption = async (item: any, option: any) => {
    setAgrsUpdate({
      cartid: item.cartid,
      payload: {
        amount: item?.amount,
        option: option,
      },
    });
  };

  const onSubmitChangeOption = async () => {
    const agrs = { cartid: agrsUpdate.cartid, body: agrsUpdate.payload };
    const response = await updateCart(agrs).unwrap();
    if (response.err === 0) {
      toast.success('Cập nhật thành công');
      onHideOption();
    }
    fetchCarts();
  };

  const onDeleteCart = async (cartid: number) => {
    await deleteCart(cartid).unwrap();
    fetchCarts();
  };

  const onBuyCart = () => {
    if (buyCart.length > 0) {
      dispatch(buyCartActions.addBuyCart(buyCart));
      navigate('/order');
    }
  };

  const onShowOption = (indexItem: number, index: number) => {
    setSelectedOption({ itemIndex: indexItem, variationIndex: index });
  };

  const onHideOption = () => {
    setSelectedOption(null);
  };

  useEffect(() => {
    const dataTempt: Cart[] = [];
    data?.forEach((item: any) =>
      item.forEach((element: Cart) => {
        dataTempt.push(element);
      })
    );
    const filteredData = dataTempt.filter((item) => checked.includes(item.itemid));
    if (checked.length === dataTempt.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
    setTotal(filteredData.reduce((acc, curr) => acc + curr.overview.price * curr.amount, 0));
    setBuyCart(filteredData);
  }, [checked, data]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {dataCart?.total_cart === 0 ? (
            <div className="emptyCart-img">
              <img src={IMG.EMPTY_CART} alt="emptyCart" />
            </div>
          ) : (
            <>
              <div className="bg-[#f5f5f5] overflow-hidden mob:mt-[120px] min-h-[380px]">
                <div className="grid wide pt-[16px]">
                  <div className="sm-gutter">
                    <div className="grid backR">
                      <div className="BjIo5w">
                        <div className="mcsiKT">
                          <label className="shopping_cart-checkBox">
                            <input type="checkbox" checked={allChecked} onChange={onAllCheck} />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div className="yl931K">Sản Phẩm</div>
                        <div className="pZMZa7">Đơn Giá</div>
                        <div className="lKFOxX">Số Lượng</div>
                        <div className="_5f317z">Số Tiền</div>
                        <div className="+4E7yJ text-center flex-1">Thao Tác</div>
                      </div>
                      {data?.map((item: Cart[], indexItem: any) => (
                        <section className="_48e0yS" key={indexItem}>
                          <div className="SFF7z2">
                            <div className="xP1eaK">
                              <NavLink className="wJCpl6" to={`/shop/${item[0]?.shopid}`}>
                                <div className="_0RxYUS">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={62} height={16} fill="none">
                                    <path
                                      fill="#EE4D2D"
                                      fillRule="evenodd"
                                      d="M0 2C0 .9.9 0 2 0h58a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                                      clipRule="evenodd"
                                    />
                                    <g clipPath="url(#clip0)">
                                      <path
                                        fill="#fff"
                                        d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0">
                                        <path fill="#fff" d="M0 0h55v16H0z" transform="translate(4)" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                                <span style={{ marginLeft: 10 }}>{item[0]?.overview?.shop_name}</span>
                              </NavLink>
                              <button className="p2B+nr">
                                <svg viewBox="0 0 16 16" className="shopee-svg-icon bTa6Yo">
                                  <g fillRule="evenodd">
                                    <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                                  </g>
                                </svg>
                              </button>
                              <div className="O-c69N" />
                            </div>
                          </div>
                          {item.map((ele: Cart, index: number) => (
                            <>
                              <section className="Eb+POp" role="list">
                                <div className="VPZ9zs" role="listitem">
                                  <div className="zoXdNN">
                                    <div className="lgcEHJ">
                                      <label className="shopping_cart-checkBox">
                                        <input
                                          type="checkbox"
                                          checked={checked.includes(ele.itemid)}
                                          onChange={() => onCheck(ele.itemid)}
                                        />
                                        <span className="checkmark"></span>
                                      </label>
                                    </div>
                                    <div className="eUrDQm">
                                      <div className="LAQKxn">
                                        <NavLink to={`/detailProduct/${ele.itemid}/${ele.shopid}`}>
                                          <img className="WanNdG" src={ele?.overview?.image} alt={ele?.overview?.name} />
                                        </NavLink>
                                        <div className="TyNN8t">
                                          <NavLink className="JB57cn" to={`/detailProduct/${ele.itemid}/${ele.shopid}`}>
                                            {ele?.overview?.name}
                                          </NavLink>
                                          <img
                                            className="eQNnTs"
                                            src="https://down-vn.img.susercontent.com/file/vn-50009109-7cf61bd7bea21aa5d2d1717a196f35e0"
                                            alt=""
                                          />
                                          <div className="QRuJU-">
                                            <span />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="o7pJBk">
                                      {ele?.option !== '' && (
                                        <div className="MBOFLv">
                                          <button
                                            className="S-Rdfh"
                                            onClick={() =>
                                              selectedOption &&
                                              selectedOption.itemIndex === indexItem &&
                                              selectedOption.variationIndex === index
                                                ? onHideOption()
                                                : onShowOption(indexItem, index)
                                            }
                                          >
                                            <div className="rcEQuz">
                                              Phân loại hàng:
                                              <div className="_75YZdf" />
                                            </div>

                                            <div className="dcPz7Y">{ele?.option}</div>
                                          </button>
                                          {selectedOption &&
                                            selectedOption.itemIndex === indexItem &&
                                            selectedOption.variationIndex === index && (
                                              <div className="k6euw5 shopee-modal__transition-enter-done" role="dialog">
                                                <div className="shopee-arrow-box__container">
                                                  <div className="shopee-arrow-box__arrow shopee-arrow-box__arrow--center">
                                                    <div className="shopee-arrow-box__arrow-outer">
                                                      <div className="shopee-arrow-box__arrow-inner" />
                                                    </div>
                                                  </div>
                                                  <div className="shopee-arrow-box__content">
                                                    <div className="CGxlYZ">
                                                      <div className="_5Nnpso">
                                                        <div className="o0HTfE" role="radiogroup" aria-labelledby="variation_label-Size">
                                                          <label className="_08kYJL" id="variation_label-Size">
                                                            {ele.cart_tier_variations.name}:
                                                          </label>
                                                          <div>
                                                            {JSON.parse(ele.cart_tier_variations.option)?.map(
                                                              (option: any, index_variations: number) => (
                                                                <button
                                                                  key={index_variations}
                                                                  className={`product-variation ${
                                                                    option === agrsUpdate?.payload?.option
                                                                      ? 'product-variation--selected'
                                                                      : ''
                                                                  }`}
                                                                  onClick={() => onChangeOption(ele, option)}
                                                                >
                                                                  {option}
                                                                  {option === agrsUpdate?.payload?.option && (
                                                                    <div className="product-variation__tick">
                                                                      <svg
                                                                        enableBackground="new 0 0 12 12"
                                                                        viewBox="0 0 12 12"
                                                                        x={0}
                                                                        y={0}
                                                                        className="shopee-svg-icon icon-tick-bold"
                                                                      >
                                                                        <g>
                                                                          <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z" />
                                                                        </g>
                                                                      </svg>
                                                                    </div>
                                                                  )}
                                                                </button>
                                                              )
                                                            )}
                                                          </div>
                                                        </div>
                                                        <div className="u2ASRs">
                                                          <button className="cancel-btn">Trở Lại</button>
                                                          <button
                                                            className="shopee-button-solid shopee-button-solid--primary"
                                                            onClick={onSubmitChangeOption}
                                                          >
                                                            Xác nhận
                                                          </button>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            )}
                                          <div />
                                        </div>
                                      )}
                                    </div>

                                    <div className="G7E4B7">
                                      <div>
                                        <span className="M-AAFK vWt6ZL">đ{formatPrice(ele?.overview?.price_before_discount)}</span>
                                        <span className="M-AAFK">₫{formatPrice(ele?.overview?.price)}</span>
                                      </div>
                                    </div>
                                    <div className="MRh9G6">
                                      <div className="_8Xhu5+ shopee-input-quantity">
                                        <button
                                          className="EOdsa-"
                                          aria-label="cart_accessibility_quantity_decrease_button"
                                          onClick={() => onReduced(ele)}
                                        >
                                          <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon">
                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                                          </svg>
                                        </button>

                                        <button className="EOdsa-" aria-label="cart_accessibility_quantity_increase_button" disabled>
                                          {+ele.amount}
                                        </button>
                                        <button
                                          className="EOdsa-"
                                          aria-label="cart_accessibility_quantity_increase_button"
                                          onClick={() => onIncrease(ele)}
                                        >
                                          <svg
                                            enableBackground="new 0 0 10 10"
                                            viewBox="0 0 10 10"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon icon-plus-sign"
                                          >
                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                    <div className="ofQLuG">
                                      <span>₫{formatPrice(ele?.overview?.price, ele?.amount)}</span>
                                    </div>
                                    <div className="mhcjog _0p-F-m">
                                      <button className="fX1Y2g" onClick={() => onDeleteCart(ele?.cartid)}>
                                        Xóa
                                      </button>
                                      <div className="tkUy0S">
                                        <button className="shopee-button-no-outline y36pik">
                                          <span className="i01b-H">Tìm sản phẩm tương tự</span>
                                          <svg
                                            enableBackground="new 0 0 15 15"
                                            viewBox="0 0 15 15"
                                            x={0}
                                            y={0}
                                            className="shopee-svg-icon XHOHXQ icon-down-arrow-filled"
                                          >
                                            <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z" />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </>
                          ))}
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5f5] overflow-hidden fixed z-10 ">
                <div className="grid wide">
                  <div className="pay">
                    <div className="pay1 ">
                      <div className="grid">
                        <div className="cart-Shopee-Voucher">
                          {ICON.TAGS}
                          <h1>Shopee Voucher</h1>
                          <h2>Chọn Hoặc Nhập Mã</h2>
                        </div>
                      </div>
                    </div>
                    <div className="pay2">
                      <div className="grid">
                        <div className="cart-Shopee-coin">
                          {ICON.COIN}
                          <h1>Shopee Xu</h1>
                          <h2> Bạn chưa chọn sản phẩm</h2>
                          {ICON.CIRCLE_QUESTION}
                        </div>
                      </div>
                    </div>
                    <div className="pay3">
                      <div className="grid pay-container">
                        <div className="select-all">
                          <label className="shopping_cart-checkBox">
                            <input type="checkbox" checked={allChecked} onChange={onAllCheck} />
                            <span className="checkmark"></span>
                          </label>
                          <h1 className="Hide-on-mobile">Chọn</h1>
                          <h1>Tất Cả</h1>
                          <h1 className="Hide-on-mobile">({dataCart?.total_cart})</h1>
                        </div>
                        <div className="shopping_cart-delete-total">
                          <span>Xóa</span>
                          <h2>Bỏ sản Phẩm Không Hoạt Động</h2>
                        </div>
                        <div className="shopping_cart-save">
                          <h1>Lưu Vào Thư Mục Đã Thích</h1>
                        </div>
                        <div className="shopping_cart-total-pay">
                          <h1>Tổng Thanh Toán</h1>
                          <h1 className="Hide-on-mobile"> ({checked?.length} Sản Phẩm):</h1>
                          <span>
                            <sup>đ</sup>
                            {total.toLocaleString('it-IT')}
                          </span>
                        </div>
                        <button className="cart-btn-pay" onClick={onBuyCart}>
                          Mua Hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default memo(CartPage);
