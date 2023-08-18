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
              <div className="bg-[#f5f5f5] overflow-hidden mob:mt-[120px] min-h-[380px] mt-[120px]">
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
                  <section className="rnocow uEhFYV">
                    <h2 className="a11y-hidden">cart_accessibility_footer</h2>
                    <div className="exGqmz WjgNv5">
                      <h3 className="a11y-hidden">cart_accessibility_footer_voucher_row</h3>
                      <svg fill="none" viewBox="0 -2 23 22" className="shopee-svg-icon icon-voucher-line">
                        <g filter="url(#voucher-filter0_d)">
                          <mask id="a" fill="#fff">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z"
                            />
                          </mask>
                          <path
                            d="M19 2h1V1h-1v1zM1 2V1H0v1h1zm18 2.32l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zm0 .65l.4.92.6-.26v-.66h-1zm0 2.75h1v-.65l-.6-.26-.4.91zM19 16v1h1v-1h-1zM1 16H0v1h1v-1zm0-2.12l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zm0-.65l-.4-.92-.6.26v.66h1zm0-2.75H0v.65l.6.26.4-.91zM19 1H1v2h18V1zm1 3.32V2h-2v2.32h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zm.6 1.56v-.65h-2v.65h2zm-.9 1.38c0-.2.12-.38.3-.46l-.8-1.83a2.5 2.5 0 00-1.5 2.29h2zm.3.46a.5.5 0 01-.3-.46h-2c0 1.03.62 1.9 1.5 2.3l.8-1.84zM20 16v-2.13h-2V16h2zM1 17h18v-2H1v2zm-1-3.12V16h2v-2.12H0zm1.4.91a2.5 2.5 0 001.5-2.29h-2a.5.5 0 01-.3.46l.8 1.83zm1.5-2.29a2.5 2.5 0 00-1.5-2.3l-.8 1.84c.18.08.3.26.3.46h2zM0 10.48v.65h2v-.65H0zM.9 9.1a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 9.1h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 8.65zM0 7.08v.65h2v-.65H0zM.9 5.7a.5.5 0 01-.3.46l.8 1.83A2.5 2.5 0 002.9 5.7h-2zm-.3-.46c.18.08.3.26.3.46h2a2.5 2.5 0 00-1.5-2.3L.6 5.25zM0 2v2.33h2V2H0z"
                            mask="url(#a)"
                          />
                        </g>
                        <path
                          clipRule="evenodd"
                          d="M6.49 14.18h.86v-1.6h-.86v1.6zM6.49 11.18h.86v-1.6h-.86v1.6zM6.49 8.18h.86v-1.6h-.86v1.6zM6.49 5.18h.86v-1.6h-.86v1.6z"
                        />
                        <defs>
                          <filter
                            id="voucher-filter0_d"
                            x={0}
                            y={1}
                            width={20}
                            height={16}
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset />
                            <feGaussianBlur stdDeviation=".5" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                      <div className="C9vN6U">Shopee Voucher</div>
                      <div className="GdUwdD" />
                      <button className="ORcGEd">Chọn hoặc nhập mã</button>
                    </div>
                    <div className="h-Ivjs _1Xi-wS" />
                    <h3 className="a11y-hidden">cart_accessibility_footer_coin_row</h3>
                    <div className="nPjHJw ceZa-G">
                      <label className="stardust-checkbox stardust-checkbox--disabled">
                        <input
                          className="stardust-checkbox__input"
                          type="checkbox"
                          aria-checked="false"
                          aria-disabled="true"
                          tabIndex={0}
                          role="checkbox"
                          aria-label="Coins Balance 0"
                        />
                        <div className="stardust-checkbox__box" />
                      </label>
                    </div>
                    <div className="nPjHJw K98a1N _1dLWkp r71pqT">
                      <svg fill="none" viewBox="0 0 18 18" className="shopee-svg-icon hpZGIt icon-coin-line">
                        <path stroke="#FFA600" strokeWidth="1.3" d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z" />
                        <path
                          fill="#FFA600"
                          fillRule="evenodd"
                          stroke="#FFA600"
                          strokeWidth=".2"
                          d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="korYGr">Shopee Xu</div>
                      <div className="WpXi0X">Bạn chưa chọn sản phẩm</div>
                      <div className="stardust-popover _2Z2rR4" id="stardust-popover0" tabIndex={0}>
                        <div role="button" className="stardust-popover__target">
                          <div>
                            <svg
                              enableBackground="new 0 0 15 15"
                              viewBox="0 0 15 15"
                              x={0}
                              y={0}
                              className="shopee-svg-icon OzpV75 icon-help"
                            >
                              <g>
                                <circle cx="7.5" cy="7.5" fill="none" r="6.5" strokeMiterlimit={10} />
                                <path
                                  d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                  stroke="none"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nPjHJw _4kUN8t _9d15-k">-₫0</div>
                    <div className="h-Ivjs ivEpTY" />
                    <div className="s1Gxkq c2pfrq">
                      <h3 className="a11y-hidden">cart_accessibility_footer_checkout_row</h3>
                      <div className="wqjloc">
                        <label className="shopping_cart-checkBox">
                          <input type="checkbox" checked={allChecked} onChange={onAllCheck} />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <button className="iGlIrs clear-btn-style">Chọn Tất Cả ({dataCart?.total_cart})</button>
                      <button className="clear-btn-style ukPYq9">Xóa</button>
                      <div className="" />
                      <button className="clear-btn-style KbDVuv">Lưu vào mục Đã thích</button>
                      <div className="UlxAss" />
                      <div className="UQv8V6" role="region">
                        <div className="fyYBP1">
                          <div className="aiyQAr">
                            <div className="A-CcKC">Tổng thanh toán ({checked?.length} Sản Phẩm):</div>
                            <div className="WC0us+">₫ {total.toLocaleString('it-IT')}</div>
                          </div>
                        </div>
                        <div className="onR5FG" />
                      </div>
                      <button onClick={onBuyCart} className="shopee-button-solid shopee-button-solid--primary">
                        <span className="TTXpRG">Mua hàng</span>
                      </button>
                    </div>
                  </section>
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
