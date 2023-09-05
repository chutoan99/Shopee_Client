//? LIBRARY
import './style/product_item.css';
import './style/index2.css';
import './style/index.css';
import './style/product_comment.css';
import './style/product_Des.css';
import './style/product_shop.css';
import './style/produc-img.css';
import './style/product_img-mobile.css';
import ICON from '../../../public/assets/icons';
import { memo, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

//? SERVICES
import { ProductShop, ProductComment, ProductBreadcrumb } from '../../containers';
import { Loading2 } from '../../components';
import { AppDispatch } from '../../app/store';
import { useAppDispatch } from '../../hooks/hooks';
import { toast } from 'react-hot-toast';
import { CartActions } from '../../redux/cart.slice';
import { formatPrice } from '../../utils/fomarPrice';
import { generateStart } from '../../utils/generateStart';
import { useGetProductQuery } from '../../services/post/index.hook';
import { useCreateCartMutation, useGetCartsQuery } from '../../services/cart/index.hook';

function DetailProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const [animationAddCart] = useState('cartAnimation');
  const [showImg, setShowImg] = useState(false);
  const [indexImg, setIndexImg] = useState(0);
  const [amount, setAmount] = useState(1);
  const [NewOption, setNewOption] = useState(undefined || '');
  const [showTableSize, setShowTableSize] = useState(false);
  const { data, isLoading } = useGetProductQuery(params);
  const { data: dataCart, refetch: FetchCarts } = useGetCartsQuery();
  const [createCart] = useCreateCartMutation();

  const onIncrease = () => {
    setAmount(amount + 1);
  };

  const onReduced = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
    if (amount < 1) {
      setAmount(1);
    }
  };

  const onAddToCart = async () => {
    if (NewOption === '' && data?.response?.tier_variations?.name) {
      return toast.error('Vui lòng chọn sản phẩm');
    }
    const payload = {
      itemid: params.itemid,
      shopid: params.shopid,
      amount: amount,
      option: NewOption || '',
    };
    const response = await createCart(payload).unwrap();
    if (response.err === 0) {
      toast.success('Bạn vừa thêm 1 sản phẩm vào giỏ hàng');
      FetchCarts();
    }
  };
  const isEmptyObject = (obj: any) => {
    if (obj === undefined || obj === null) {
      return true;
    }
    return Object.keys(obj).length === 0;
  };

  useEffect(() => {
    dataCart?.total_cart && dispatch(CartActions.updateTotalCart(dataCart?.total_cart));
  }, [dataCart]);
  return (
    <>
      {isLoading ? (
        <Loading2 />
      ) : (
        <>
          <div className="mt-[120px]"></div>
          <div className="bg-[#f5f5f5] overflow-hidden App__Container_padding-Button py-[20px]">
            <ProductBreadcrumb data={data?.response} />
            <div className="grid wide">
              <div className="row sm-gutter pb-[30px] bg-[white]">
                <div className="col c-12 mo-5 l-5">
                  <div className="product_cart-img">
                    <img className="product_cart-img-re" src={data?.response?.image} alt="" onClick={() => setShowImg(true)} />
                    <img className={animationAddCart} src={data?.response?.image} alt="animationAddCart" onClick={() => setShowImg(true)} />
                  </div>
                  <div className="container-fluid">
                    <div className="row sm-gutter">
                      <div className="col s-12 c-12  l-12 disp">
                        {data?.response?.images.map((image: string, index: number) => {
                          return (
                            <div className="product_cart-list" key={index}>
                              <img src={image} alt="MobileImgProduct" onClick={() => setShowImg(true)} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col c-12  mo-7 l-7 ">
                  <div className="p-[10px]">
                    <div className="pb-[10px]">
                      <h2 className="text-[#333] text-[1.375rem] font-medium leading-7 rounded-[5px]">
                        <span className="bg-[#ee4d2d] text-[white] text-xs mr-2.5 p-[3.5px]">Yêu Thích</span>
                        {data?.response?.name}
                      </h2>
                    </div>
                    <div className="flex text-[#222]">
                      <div className="flex justify-center text-base items-center text-[#ee4d2d] pr-3 border-r-[rgba(0,0,0,0.14)] border-r border-solid">
                        <h3 className="mr-[5px] pb-[3px] border-b-[#ee4d2d] border-b border-solid">
                          {data?.response?.shop_info?.rating_star?.toFixed(1)}
                        </h3>
                        <div className="flex text-[#ee4d2d]">{generateStart(5)}</div>
                      </div>
                      <div className="flex text-base relative pl-2.5 pr-3 border-r-[rgba(0,0,0,0.14)] border-r border-solid">
                        <h3 className="text-[#222] pb-[3px] border-b-[#555] border-b border-solid mr-[5px]">47</h3>
                        <h4 className="text-sm text-[#767676] capitalize">Đánh Giá</h4>
                      </div>
                      <div className="flex text-base relative text-[#222] justify-center items-center mb-[unset] pl-2.5">
                        <h3 className="mr-[5px]">{data?.response?.historical_sold}</h3>
                        <h4 className="text-sm text-[#767676] capitalize">Đã bán</h4>
                      </div>
                    </div>
                    <div className="bg-neutral-100 flex items-center mt-[15px] mb-[30px] mx-0 px-2.5 py-[15px]">
                      <div>
                        {data?.response?.price_before_discount !== 0 && (
                          <h3 className="text-base line-through text-[#929292] mr-2.5">
                            <sup className="text-[75%] leading-[0] relative align-baseline top-[-7px]">đ</sup>
                            {formatPrice(data?.response?.price_min_before_discount)}
                          </h3>
                        )}
                      </div>
                      <div>
                        {data?.response?.price_min === data?.response?.price_max ? (
                          <h3 className="text-[#ee4d2d] font-medium leading-9 text-3xl px-2.5">
                            <sup className="text-[75%] leading-[0] relative align-baseline top-[-7px]">đ</sup>
                            {formatPrice(data?.response?.price_min)}
                          </h3>
                        ) : (
                          <h3 className="text-[#ee4d2d] font-medium leading-9 text-3xl px-2.5">
                            <sup className="text-[75%] leading-[0] relative align-baseline top-[-7px]">đ</sup>
                            {formatPrice(data?.response?.price_min)} -{' '}
                            <sup className="text-[75%] leading-[0] relative align-baseline top-[-7px]">đ</sup>
                            {formatPrice(data?.response?.price_max)}
                          </h3>
                        )}
                      </div>
                      {data?.response?.discount && (
                        <span className="bg-[#ee4d2d] text-white text-xs font-semibold leading-3 uppercase whitespace-nowrap px-1 py-0.5 rounded-sm">
                          {data?.response?.discount} giảm
                        </span>
                      )}
                    </div>
                    <div className="container-fluid container-detail">
                      {data?.response?.is_voucher === 1 && (
                        <>
                          <div className="gap-y-2.5 flex flex-wrap mb-[25px]">
                            <h3 className="text-[#757575] w-[110px] capitalize shrink-0">Mã Giảm Giá Của Shop</h3>
                          </div>
                          <div className="gap-y-2.5 flex flex-wrap mb-[25px]">
                            <label className="h-[25px] text-sm text-[#ee4d2d] bg-[rgba(255,87,34,0.1)] leading-[1.05rem] rounded mr-2.5 p-2 flex items-center">
                              {data?.response?.voucher?.voucher_code}
                            </label>
                          </div>
                        </>
                      )}

                      <div className="gap-y-2.5 flex flex-wrap mb-[25px]">
                        <h3 className="text-[#757575] w-[110px] capitalize shrink-0">Deal Sốc</h3>
                      </div>
                      <div className="gap-y-2.5 flex flex-wrap mb-[25px]">
                        <label className="h-[25px] text-sm text-[#ee4d2d] bg-[rgba(255,87,34,0.1)] leading-[1.05rem] rounded mr-2.5 p-2 flex items-center">
                          Mua Kèm Deal Sốc
                        </label>
                      </div>
                      {!isEmptyObject(data?.response?.tier_variations) && (
                        <>
                          <div className="mt-[5px]">
                            <h3 className="text-[#757575] w-[110px] capitalize shrink-0">{data?.response?.tier_variations?.name}</h3>
                          </div>
                          <div className="product_cart-option">
                            {data?.response?.tier_variations?.options?.map((option: any, index: any) => (
                              <div className="product_cart-variation" key={index}>
                                <button
                                  className={`${NewOption === option ? 'product_cart-variation-active' : ''}`}
                                  onClick={() => setNewOption(option)}
                                >
                                  {option}
                                </button>
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {data?.response?.size_chart && (
                        <h3 className="product_cart-size-table" onClick={() => setShowTableSize(true)}>
                          bảng quy đổi kích thước
                        </h3>
                      )}
                      {showTableSize && (
                        <div className="product_cart-size-chart" onClick={() => setShowTableSize(false)}>
                          <div className=" modal__size">
                            <div className="modal__body">
                              <img src={data?.response?.size_chart} alt="tableSize" />
                            </div>
                          </div>
                        </div>
                      )}
                      <>
                        <div className="product_cart-amount">
                          <h3 className="text-[#757575] w-[110px] capitalize shrink-0">số lượng</h3>
                        </div>
                        <div className="product_cart-amount">
                          <div className="product_cart-amount-button">
                            <button onClick={onReduced}>{ICON.MINUS}</button>
                            <button>{amount}</button>
                            <button onClick={onIncrease}>{ICON.PLUS}</button>
                          </div>
                          <h2>{data?.response?.stock} sản phẩm có sẵn</h2>
                        </div>
                      </>
                    </div>
                    <div className="product_cart ">
                      <button className="product_cart-button mob:hidden">{ICON.CART}Chat ngay</button>
                      <button className="product_cart-button" onClick={onAddToCart}>
                        <span className="cart-plus-animation">{ICON.CART}</span>Thêm Vào Giỏ Hàng
                      </button>
                      <button className="product_cart-button2" onClick={() => navigate('/cart')}>
                        Mua Ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showImg && (
              <div className="image">
                <div className="image-overPlay">
                  <div className="image-slice">
                    <div>
                      <img src={data?.response?.images[indexImg]} alt="img" />
                    </div>
                  </div>
                  <div className="image-slices">
                    <div className="l-12 mo-12 c-12">
                      <div className="image-slices-icon flex-end" onClick={() => setShowImg(false)}>
                        {ICON.CIRCLE_XMARK}
                      </div>
                      <div className="image-slices-heading">
                        <h2>{data?.response?.name}</h2>
                      </div>
                      <div className="image-slices-items">
                        {data?.response?.images.map((image: string, index: number) => {
                          return <img src={image} onClick={() => setIndexImg(index)} key={index} alt="" />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {!isEmptyObject(data?.response?.shop_info) && <ProductShop data={data?.response?.shop_info} />}
          <div className="bg-[#f5f5f5] overflow-hidden py-[12px]">
            <div className="grid wide">
              <div className="row gap-[-20px]">
                <div className="col-lg-10">
                  {!isEmptyObject(data?.response?.attributes) && (
                    <div className="bg-white overflow-hidden mt-[0.9375rem] p-2.5 rounded-sm">
                      <div className="pt-[0.9375rem] pb-0 px-[0.9375rem]">
                        <div
                          className="text-[rgba(0,0,0,0.87)] text-lg capitalize p-3.5;"
                          style={{
                            background: 'rgba(0, 0, 0, 0.02)',
                          }}
                        >
                          CHI TIẾT SẢN PHẨM
                        </div>
                        <div className="mt-[1.875rem] mb-[0.9375rem] mx-[0.9375rem]">
                          <div className="flex mb-[1.125rem]">
                            <label className="text-[rgba(0,0,0,0.4)] text-sm box-border w-[8.75rem] text-ellipsis overflow-hidden whitespace-nowrap pr-3">
                              Danh Mục
                            </label>
                            <div className="flex flex-wrap">
                              <div>
                                <span className="mr-[5px]">
                                  <NavLink to="# ">{data?.response?.categories?.category_name || 'N/A'}</NavLink>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            {!isEmptyObject(data?.response?.attributes) && (
                              <>
                                {data?.response.attributes?.option.map((attribute: any, index: any) => (
                                  <div className="flex mb-[1.125rem]" key={index}>
                                    <label className="text-[rgba(0,0,0,0.4)] text-sm box-border w-[8.75rem] text-ellipsis overflow-hidden whitespace-nowrap pr-3">
                                      {attribute.name}
                                    </label>
                                    <div>{attribute.value}</div>
                                  </div>
                                ))}
                              </>
                            )}
                          </div>
                        </div>
                        <div>
                          <div
                            className="text-[rgba(0,0,0,0.87)] text-lg capitalize p-3.5"
                            style={{
                              background: 'rgba(0, 0, 0, 0.02)',
                            }}
                          >
                            MÔ TẢ SẢN PHẨM
                          </div>
                          <div className="whitespace-pre-wrap text-[rgba(0,0,0,0.8)] text-sm overflow-hidden text-ellipsis leading-[1.7rem]">
                            <p className="mt-[1.875rem] mb-[0.9375rem] mx-[0.9375rem]">{data?.response?.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ProductComment />
        </>
      )}
    </>
  );
}
export default memo(DetailProduct);
