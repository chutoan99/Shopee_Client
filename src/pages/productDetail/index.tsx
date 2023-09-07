//? LIBRARY
import { toast } from 'react-hot-toast';
import { memo, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
//? APPS
import { Loading2 } from '../../components';
import { AppDispatch } from '../../app/store';
import { CartActions } from '../../redux/cart.slice';
import { useAppDispatch } from '../../hooks/hooks';
import { formatPrice } from '../../utils/fomarPrice';
import { generateStart } from '../../utils/generateStart';
import { useGetProductQuery } from '../../services/post/index.hook';
import { ProductShop, ProductComment, ProductBreadcrumb } from '../../containers';
import { useCreateCartMutation, useGetCartsQuery } from '../../services/cart/index.hook';

function DetailProduct() {
  const params = useParams();
  const dispatch: AppDispatch = useAppDispatch();
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
          <div className="bg-[#f5f5f5] overflow-hidden py-[20px]">
            <ProductBreadcrumb data={data?.response} />
            <div className="grid wide">
              <div className="row sm-gutter pb-[30px] bg-[#fff]">
                <div className="col c-12 mo-5 l-5">
                  <div className="relative w-full cursor-pointer pt-[20px] pb-10 p-[3px]">
                    <img className="w-full relative" src={data?.response?.image} alt="" onClick={() => setShowImg(true)} />
                  </div>
                  <div className="row sm-gutter">
                    <div
                      className="col s-12 c-12  l-12 flex-nowrap overflow-x-auto"
                      style={{
                        display: 'flex',
                      }}
                    >
                      {data?.response?.images.map((image: string, index: number) => {
                        return (
                          <div className="cursor-pointer flex h-[82px] shrink-0 w-[82px] mr-[19px]" key={index}>
                            <img src={image} alt="MobileImgProduct" onClick={() => setShowImg(true)} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col c-12 mo-7 l-7 ">
                  <div className="p-[10px]">
                    <div className="pb-[10px]">
                      <h2 className="text-[#333] text-[1.375rem] font-medium leading-7 rounded-[5px]">
                        <span className="bg-[#ee4d2d] text-[#fff] text-xs mr-2.5 p-[3.5px]">Yêu Thích</span>
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
                        <span className="bg-[#ee4d2d] text-[#fff] text-xs font-semibold leading-3 uppercase whitespace-nowrap px-1 py-0.5 rounded-sm">
                          {data?.response?.discount} giảm
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateAreas: "'aa bb'",
                        columnGap: '20px',
                      }}
                    >
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
                          <div className="flex-wrap flex max-w-[32.1875rem]">
                            {data?.response?.tier_variations?.options?.map((option: any, index: any) => (
                              <button
                                key={index}
                                style={{
                                  outline: 0,
                                  wordBreak: 'break-word',
                                }}
                                className={`overflow-visible bg-[#fff] cursor-pointer min-w-[5rem] min-h-[2.125rem] box-border text-[rgba(0,0,0,0.8)] text-left border relative inline-flex items-center justify-center ml-0 mr-2 mt-0 mb-2 px-3 py-1 rounded-sm border-solid border-[rgba(0,0,0,0.09)] ${
                                  NewOption === option ? '!text-[#ee4d2d] !border-[#ee4d2d]' : ''
                                }`}
                                onClick={() => setNewOption(option)}
                              >
                                {option}
                                {NewOption === option && (
                                  <div className="w-[0.9375rem] h-[0.9375rem] absolute overflow-hidden right-0 bottom-0 before:content-[''] before:absolute before:right-[-0.9375rem] before:border-b-[#ee4d2d] before:border-[0.9375rem] before:border-solid before:border-transparent before:bottom-0">
                                    <svg
                                      enableBackground="new 0 0 12 12"
                                      viewBox="0 0 12 12"
                                      x={0}
                                      y={0}
                                      className="absolute text-[#fff] text-[8px] inline-block w-[1em] h-[1em] fill-current right-0 bottom-0"
                                    >
                                      <g>
                                        <path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z" />
                                      </g>
                                    </svg>
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </>
                      )}

                      {data?.response?.size_chart && (
                        <h3
                          className="text-[#0055aa] cursor-pointer col-[2/3] text-sm leading-[1.05rem] capitalize"
                          onClick={() => setShowTableSize(true)}
                        >
                          bảng quy đổi kích thước
                        </h3>
                      )}
                      {showTableSize && (
                        <div
                          className="w-full h-full fixed bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[9000] left-0 top-0"
                          style={{
                            WebkitBoxAlign: 'center',
                            WebkitBoxPack: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          }}
                          onClick={() => setShowTableSize(false)}
                        >
                          <div className="flex-initial relative max-w-full max-h-full">
                            <img src={data?.response?.size_chart} alt="tableSize" />
                          </div>
                        </div>
                      )}
                      <>
                        <div className="items-center text-[#757575] text-sm leading-[1.05rem] capitalize flex mt-4">
                          <h3 className="text-[#757575] w-[110px] capitalize shrink-0">số lượng</h3>
                        </div>
                        <div className="items-center text-[#757575] text-sm leading-[1.05rem] capitalize flex mt-4">
                          <div>
                            <button onClick={onReduced} className="w-10 h-[30px] border cursor-pointer border-solid border-[#ccc]">
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <button className="w-10 h-[30px] border cursor-pointer border-solid border-[#ccc]">{amount}</button>
                            <button onClick={onIncrease} className="w-10 h-[30px] border cursor-pointer border-solid border-[#ccc]">
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                          <span className="text-[#757575] text-sm leading-[1.05rem] ml-2.5">{data?.response?.stock} sản phẩm có sẵn</span>
                        </div>
                      </>
                    </div>
                    <div className="text-black flex text-[0.875rem] leading-[1.05rem] pt-[30px]">
                      <button
                        className="min-w-[11.25rem] text-sm flex items-center justify-center capitalize box-border text-ellipsis h-12 max-w-[250px] text-[#ee4d2d] !border shadow-[0_1px_1px_0_rgba(0,0,0,0.03)] relative overflow-visible flex-row mr-[0.9375rem] px-[20px] py-0 rounded-sm !border-solid !border-[#ee4d2d]"
                        onClick={onAddToCart}
                        style={{
                          WebkitLineClamp: '1',
                          background: 'rgba(255, 87, 34, 0.1)',
                          outline: '0',
                        }}
                      >
                        <span
                          style={{
                            animationName: 'cartPlus',
                            animationDelay: '1s',
                            animationDuration: '4s',
                          }}
                        >
                          <i className="fa-solid fa-cart-plus mr-[10px]"></i>
                        </span>
                        Thêm Vào Giỏ Hàng
                      </button>
                      <NavLink
                        to="/cart"
                        className="flex justify-center items-center min-h-[48px]  h-[30px] min-w-[115px] overflow-hidden text-ellipsis border capitalize  font-normal text-[1rem]  py-2 rounded-sm border-solid border-transparent bg-[#ee4d2d] text-[#fff] hover:bg-[#d73211] hover:border-[#ba2b0f]"
                      >
                        Mua Ngay
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showImg && (
              <div
                className="w-full h-full fixed bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[9000] left-0 top-0"
                style={{
                  WebkitBoxAlign: 'center',
                  WebkitBoxPack: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }}
              >
                <div className="flex-initial  max-w-full max-h-full bg-[#fff] w-[836px] h-[540px] content-[''] flex absolute m-auto inset-y-0">
                  <div className=" ml-3 mr-0 my-3">
                    <div className="w-[516px] h-[516px]">
                      <img src={data?.response?.images[indexImg]} alt="img" />
                    </div>
                  </div>
                  <div className="w-[285px] h-[540px] ml-3 mr-0 my-3">
                    <div className="l-12 mo-12 c-12">
                      <div
                        className="flex text-lg mb-1.5 cursor-pointer "
                        onClick={() => setShowImg(false)}
                        style={{
                          justifyContent: 'end',
                        }}
                      >
                        <i className="fa-regular fa-circle-xmark"></i>
                      </div>
                      <div
                        className="overflow-hidden text-ellipsis text-[0.938rem] text-black font-[350] mr-3 mb-2 pl-3"
                        style={{
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: '2',
                          wordWrap: 'break-word',
                        }}
                      >
                        <h3>{data?.response?.name}</h3>
                      </div>
                      <div className="flex flex-wrap">
                        {data?.response?.images.map((image: string, index: number) => {
                          return (
                            <img
                              src={image}
                              onClick={() => setIndexImg(index)}
                              key={index}
                              alt=""
                              className={`w-[33%] p-2.5 hover:!border-2 hover:!border-solid hover:!border-[#ee4d2d] ${
                                indexImg === index ? '!border-2 !border-solid !border-[#ee4d2d]' : ''
                              }`}
                            />
                          );
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
                    <div className="bg-[#fff] overflow-hidden mt-[0.9375rem] p-2.5 rounded-sm">
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
