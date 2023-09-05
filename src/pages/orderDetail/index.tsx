//? LIBRARY
import { memo, useEffect, useState } from 'react';
import { Loading } from '../../components';
import { useGetOrderQuery } from '../../services/order/index.hook';
import { Order } from '../../types/order';
import { NavLink, useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/fomarPrice';
import { ModelRating } from '../../containers';
import { formatDate } from '../../utils/formatTimestamp';

function OrderDetail() {
  const params = useParams();
  const { data, isLoading } = useGetOrderQuery(params);
  const [dataOrder, setDataOrder] = useState<Order>();
  const [isShowModel, setIsShowModel] = useState(false);
  useEffect(() => {
    data?.response && setDataOrder(data?.response);
  }, [data]);
  const onShowModel = () => setIsShowModel(true);
  const onCloseModel = () => setIsShowModel(false);
  return (
    <>
      {isLoading && <Loading />}
      <div className="col-lg-10 bg-white pl-0 pr-0">
        <div className="bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.05)] rounded-sm">
          <div className="text-sm leading-4 flex justify-between items-center px-6 py-3">
            <div className="flex text-[rgba(0,0,0,0.54)] mr-4">
              <svg
                enableBackground="new 0 0 11 11"
                viewBox="0 0 11 11"
                x={0}
                y={0}
                className="inline-block w-[1em] h-[1em] fill-current relative icon-arrow-left"
              >
                <g>
                  <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                </g>
              </svg>
              <NavLink to="/user/purchase">TRỞ LẠI</NavLink>
            </div>
            <div className="flex text-right">
              <span>MÃ ĐƠN HÀNG. {dataOrder?.orderid}</span>
              <span className="mx-2 my-0">|</span>
              <span className="text-[#ee4d2d] uppercase">{dataOrder?.state}</span>
            </div>
          </div>

          <div className="px-6 py-10">
            <div className="relative justify-between box-border flex-nowrap flex">
              <div
                className="w-[140px] text-center select-none cursor-default z-[1]"
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                }}
              >
                <div
                  className="box-border flex flex-col justify-center items-center relative w-[60px] h-[60px] text-3xl m-auto rounded-[50%] border-4 border-solid border-[#e0e0e0] !bg-[#2dc258] !text-white !fill-[#2dc258] !border-[#2dc258]"
                  style={{
                    transition:
                      'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                  }}
                >
                  <svg
                    enableBackground="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    x={0}
                    y={0}
                    className="inline-block w-[1em] h-[1em] fill-current relative stroke-current"
                  >
                    <g>
                      <path
                        d="m5 3.4v23.7c0 .4.3.7.7.7.2 0 .3 0 .3-.2.5-.4 1-.5 1.7-.5.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1s1.7.4 2.2 1.1c.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.7 0 1.2.2 1.7.5.2.2.3.2.3.2.3 0 .7-.4.7-.7v-23.7z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <g>
                        <line fill="none" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3} x1={10} x2={22} y1="11.5" y2="11.5" />
                        <line fill="none" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3} x1={10} x2={22} y1="18.5" y2="18.5" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="capitalize text-sm text-[rgba(0,0,0,0.8)] leading-5 mt-[1.25rem] mb-[0.25rem] mx-0">Đơn hàng đã đặt</div>
                {dataOrder?.createdAt && (
                  <div className="text-[0.75rem] text-[rgba(0,0,0,0.26)] h-[0.875rem]"> {formatDate(dataOrder?.createdAt)}</div>
                )}
              </div>
              <div
                className="w-[140px] text-center select-none cursor-default z-[1]"
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                }}
              >
                <div
                  className="bg-white box-border flex flex-col justify-center items-center relative w-[60px] h-[60px] text-3xl m-auto rounded-[50%] border-4 border-solid border-[#e0e0e0] !text-[#2dc258] !border-[#2dc258]"
                  style={{
                    transition:
                      'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                  }}
                >
                  <svg
                    enableBackground="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    x={0}
                    y={0}
                    className="inline-block w-[1em] h-[1em] fill-current relative stroke-current"
                  >
                    <g>
                      <path
                        clipRule="evenodd"
                        d="m24 22h-21c-.5 0-1-.5-1-1v-15c0-.6.5-1 1-1h21c .5 0 1 .4 1 1v15c0 .5-.5 1-1 1z"
                        fill="none"
                        fillRule="evenodd"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <path
                        clipRule="evenodd"
                        d="m24.8 10h4.2c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1h-21c-.6 0-1-.4-1-1v-4"
                        fill="none"
                        fillRule="evenodd"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <path
                        d="m12.9 17.2c-.7-.1-1.5-.4-2.1-.9l.8-1.2c.6.5 1.1.7 1.7.7.7 0 1-.3 1-.8 0-1.2-3.2-1.2-3.2-3.4 0-1.2.7-2 1.8-2.2v-1.3h1.2v1.2c.8.1 1.3.5 1.8 1l-.9 1c-.4-.4-.8-.6-1.3-.6-.6 0-.9.2-.9.8 0 1.1 3.2 1 3.2 3.3 0 1.2-.6 2-1.9 2.3v1.2h-1.2z"
                        stroke="none"
                      />
                    </g>
                  </svg>
                </div>
                <div className="capitalize text-sm text-[rgba(0,0,0,0.8)] leading-5 mt-[1.25rem] mb-[0.25rem] mx-0">
                  Đơn hàng đã thanh toán
                </div>
              </div>
              <div
                className="w-[140px] text-center select-none cursor-default z-[1]"
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                }}
              >
                <div
                  className="bg-white box-border flex flex-col justify-center items-center relative w-[60px] h-[60px] text-3xl m-auto rounded-[50%] border-4 border-solid border-[#e0e0e0] !text-[#2dc258] !border-[#2dc258]"
                  style={{
                    transition:
                      'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                  }}
                >
                  <svg
                    enableBackground="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    x={0}
                    y={0}
                    className="inline-block w-[1em] h-[1em] fill-current relative stroke-current"
                  >
                    <g>
                      <line
                        fill="none"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                        x1="18.1"
                        x2="9.6"
                        y1="20.5"
                        y2="20.5"
                      />
                      <circle cx="7.5" cy="23.5" fill="none" r={4} strokeMiterlimit={10} strokeWidth={3} />
                      <circle cx="20.5" cy="23.5" fill="none" r={4} strokeMiterlimit={10} strokeWidth={3} />
                      <line fill="none" strokeMiterlimit={10} strokeWidth={3} x1="19.7" x2={30} y1="15.5" y2="15.5" />
                      <polyline
                        fill="none"
                        points="4.6 20.5 1.5 20.5 1.5 4.5 20.5 4.5 20.5 18.4"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <polyline
                        fill="none"
                        points="20.5 9 29.5 9 30.5 22 24.7 22"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                    </g>
                  </svg>
                </div>
                <div className="capitalize text-sm text-[rgba(0,0,0,0.8)] leading-5 mt-[1.25rem] mb-[0.25rem] mx-0">Đã giao cho ĐVVC</div>
                {/* <div className="text-[0.75rem] text-[rgba(0,0,0,0.26)] h-[0.875rem]">15:27 15-07-2023</div> */}
              </div>
              <div
                className="w-[140px] text-center select-none cursor-default z-[1]"
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                }}
              >
                <div
                  className="bg-white box-border flex flex-col justify-center items-center relative w-[60px] h-[60px] text-3xl m-auto rounded-[50%] border-4 border-solid border-[#e0e0e0] !text-[#2dc258] !border-[#2dc258]"
                  style={{
                    transition:
                      'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                  }}
                >
                  <svg
                    enableBackground="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    x={0}
                    y={0}
                    className="inline-block w-[1em] h-[1em] fill-current relative stroke-current"
                  >
                    <g>
                      <polygon
                        fill="none"
                        points="2 28 2 19.2 10.6 19.2 11.7 21.5 19.8 21.5 20.9 19.2 30 19.1 30 28"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <polyline
                        fill="none"
                        points="21 8 27 8 30 19.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <polyline
                        fill="none"
                        points="2 19.2 5 8 11 8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                      />
                      <line
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                        x1={16}
                        x2={16}
                        y1={4}
                        y2={14}
                      />
                      <path d="m20.1 13.4-3.6 3.6c-.3.3-.7.3-.9 0l-3.6-3.6c-.4-.4-.1-1.1.5-1.1h7.2c.5 0 .8.7.4 1.1z" stroke="none" />
                    </g>
                  </svg>
                </div>
                <div className="capitalize text-sm text-[rgba(0,0,0,0.8)] leading-5 mt-[1.25rem] mb-[0.25rem] mx-0">Đã nhận được hàng</div>
                {/* <div className="text-[0.75rem] text-[rgba(0,0,0,0.26)] h-[0.875rem]">07:36 20-07-2023</div> */}
              </div>
              <div
                className="w-[140px] text-center select-none cursor-default z-[1] text-[#2dc258] border-[#2dc258]"
                style={{
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                }}
              >
                <div
                  className="bg-white box-border flex flex-col justify-center items-center relative w-[60px] h-[60px] text-3xl m-auto rounded-[50%] border-4 border-solid border-[#e0e0e0] !text-[#2dc258] !border-[#2dc258]"
                  style={{
                    transition:
                      'background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s, color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                  }}
                >
                  <svg
                    enableBackground="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    x={0}
                    y={0}
                    className="inline-block w-[1em] h-[1em] fill-current relative stroke-current"
                  >
                    <polygon
                      fill="none"
                      points="16 3.2 20.2 11.9 29.5 13 22.2 19 24.3 28.8 16 23.8 7.7 28.8 9.8 19 2.5 13 11.8 11.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={3}
                    />
                  </svg>
                </div>
                <div className="capitalize text-sm text-[rgba(0,0,0,0.8)] leading-5 mt-[1.25rem] mb-[0.25rem] mx-0">đánh giá</div>
                <div className="text-[0.75rem] text-[rgba(0,0,0,0.26)] h-[0.875rem]" />
              </div>
              <div className="absolute h-1 w-full top-[29px]">
                <div
                  className="absolute w-[calc(100%_-_140px)] h-full box-border mx-[70px] my-0"
                  style={{ background: 'rgb(224, 224, 224)' }}
                />
                <div
                  className="transition-[width] duration-[1s] ease-in-out absolute h-full box-border mx-[70px] my-0"
                  style={{
                    width: 'calc((100% - 140px) * 1)',
                    background: 'rgb(45, 194, 88)',
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-nowrap items-center justify-between box-border bg-[#fffcf5] px-6 py-3 border-t-[rgba(0,0,0,0.09)] border-t border-dotted">
              <div className="text-left text-[rgba(0,0,0,0.54)] text-xs leading-4 pl-0 pr-3 py-0;" style={{ wordWrap: 'break-word' }}>
                Đánh giá sản phẩm để nhận 200 Shopee xu!
              </div>
              <div className="text-right shrink-0" onClick={onShowModel}>
                <button className="font-normal text-sm border bg-[#ee4d2d] text-white hover:bg-[#d73211] hover:border-[#ba2b0f] min-w-[150px] min-h-[40px] capitalize px-5 py-2 rounded-[5px] w-[220px] overflow-hidden text-ellipsis">
                  Đánh giá
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-nowrap items-center justify-between box-border bg-[#fffcf5] px-6 py-3 border-t-[rgba(0,0,0,0.09)] border-t border-dotted">
              <div className="text-left text-[rgba(0,0,0,0.54)] text-xs leading-4 pl-0 pr-3 py-0;" style={{ wordWrap: 'break-word' }} />
              <div className="text-right shrink-0">
                <button className="font-normal  text-sm  border bg-white text-[rgba(0,0,0,0.87)] border-solid border-[rgba(0,0,0,0.26)] stardust-button--secondary min-w-[150px] min-h-[40px]  capitalize px-5 py-2 rounded-[5px] w-[220px] overflow-hidden text-ellipsis hover:!bg-[rgba(0,0,0,0.02)] hover:!border hover:!border-solid hover:!border-[rgba(0,0,0,0.09)]">
                  Liên hệ Người bán
                </button>
              </div>
            </div>
            <div className="flex flex-nowrap items-center justify-between box-border bg-[#fffcf5] px-6 py-3 border-t-[rgba(0,0,0,0.09)] border-t border-dotted">
              <div className="text-left text-[rgba(0,0,0,0.54)] text-xs leading-4 pl-0 pr-3 py-0;" style={{ wordWrap: 'break-word' }} />
              <div className="text-right shrink-0">
                <button className="font-normal text-sm  border bg-white text-[rgba(0,0,0,0.87)] border-solid border-[rgba(0,0,0,0.26)] stardust-button--secondary min-w-[150px] min-h-[40px] capitalize px-5 py-2 rounded-[5px] w-[220px] overflow-hidden text-ellipsis hover:!bg-[rgba(0,0,0,0.02)] hover:!border hover:!border-solid hover:!border-[rgba(0,0,0,0.09)]">
                  <NavLink to={`/shop/${dataOrder?.shopid}`}>Mua lại</NavLink>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="pt-5 pb-6 px-6">
              <div className="flex justify-between items-end pt-0 pb-3 px-0">
                <div className="capitalize text-[rgba(0,0,0,0.8)] text-xl leading-6">Địa chỉ nhận hàng</div>
                <div className="flex items-start leading-[14px] max-w-[50%]">
                  <div className="text-right text-xs text-[rgba(0,0,0,0.54)]" style={{ wordWrap: 'break-word' }}>
                    <div>
                      <div>Shopee Xpress</div>
                      <div>SPXVN039481973747</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="max-w-full leading-[22px] flex-1 pl-0 pr-6 pt-2.5 pb-0">
                  <div className="max-w-full overflow-hidden text-ellipsis text-[rgba(0,0,0,0.8)] mt-0 mb-[7px] mx-0">
                    {dataOrder?.user?.name}
                  </div>
                  <div className="text-[rgba(0,0,0,0.54)] text-xs whitespace-pre-line">
                    <span>(+84) {dataOrder?.user?.phone}</span>
                    <br />
                    {dataOrder?.user?.address}
                  </div>
                </div>
                <div className="w-[620px] pl-3 pr-0 pt-1 pb-0 border-l-[rgba(0,0,0,0.09)] border-l border-solid">
                  <div>
                    <div className="relative flex items-start gap-3 p-0 cuJgPF">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <img
                            className="relative h-6 w-6 z-[2]"
                            title="image"
                            src="https://cf.shopee.vn/file/delivered_parcel_active_3x"
                          />
                        </div>

                        <div className="m-w-0">
                          <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">10:39 16-07-2023</div>
                        </div>
                        <div className="leading-5 mt-px mb-2 mx-0">
                          <p className="font-bold leading-5 -mb-0.5 text-[#26aa99]">Đã giao</p>
                          <p className="text-[#26aa99]">
                            Đơn hàng đã được giao thành công
                            <span>. Người nhận hàng: Truong Van Chu Toan--</span>.{' '}
                            <span className="whitespace-nowrap text-[#05a] cursor-pointer" tabIndex={0}>
                              Xem hình ảnh giao hàng
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-3 p-0">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <img className="relative h-6 w-6 z-[2]" title="image" src="https://cf.shopee.vn/file/domestic_transit_3x" />
                        </div>
                        <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">09:42 16-07-2023</div>
                        <div className="min-w-0">
                          <p className="font-bold leading-5 -mb-0.5">Đang vận chuyển</p>
                          <p className='className="leading-5 mt-px mb-2 mx-0"'>Đơn hàng đang trên đường giao đến bạn</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-3 p-0">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <div className="w-[11px] h-[11px] shrink-0 z-[1] ml-0.5 rounded-[50%] bg-[#d8d8d8]" />
                        </div>
                        <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">05:46 16-07-2023</div>
                        <div className="m-w-0">
                          <p className="font-bold leading-5 -mb-0.5" />
                          <p className='className="leading-5 mt-px mb-2 mx-0"'>
                            Đơn hàng đã đến bưu cục 50-HCM Binh Chanh/Phong Phu LM Hub
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-3 p-0">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <div className="w-[11px] h-[11px] shrink-0 z-[1] ml-0.5 rounded-[50%] bg-[#d8d8d8]" />
                        </div>
                        <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">03:26 16-07-2023</div>
                        <div className="m-w-0">
                          <p className="font-bold leading-5 -mb-0.5" />
                          <p className='className="leading-5 mt-px mb-2 mx-0"'>
                            Đơn hàng đang được trung chuyển tới 50-HCM Binh Chanh/Phong Phu LM Hub
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-3 p-0">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <div className="w-[11px] h-[11px] shrink-0 z-[1] ml-0.5 rounded-[50%] bg-[#d8d8d8]" />
                        </div>
                        <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">00:56 16-07-2023</div>
                        <div className="m-w-0">
                          <p className="font-bold leading-5 -mb-0.5" />
                          <p className="leading-5 mt-px mb-2 mx-0">Đơn hàng đã đến kho phân loại BW SOC</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-3 p-0">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <div className="w-[11px] h-[11px] shrink-0 z-[1] ml-0.5 rounded-[50%] bg-[#d8d8d8]" />
                        </div>
                        <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">21:00 15-07-2023</div>
                        <div className="m-w-0">
                          <p className="font-bold leading-5 -mb-0.5" />
                          <p className="leading-5 mt-px mb-2 mx-0">Đơn hàng đang được trung chuyển tới BW SOC</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex items-start gap-3 p-0 cuJgPF">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8]  last:hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <img className="relative h-6 w-6 z-[2]" title="image" src="https://cf.shopee.vn/file/preparing_to_ship_3x" />
                        </div>
                        <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">08:43 07-07-2023</div>
                        <div className="m-w-0">
                          <p className="font-bold leading-5 -mb-0.5 text-[#26aa99]">Đang chuẩn bị</p>
                          <p className="leading-5 mt-px mb-2 mx-0 text-[#26aa99]">Người bán đang chuẩn bị hàng</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-start gap-3 p-0">
                      <div className="w-px h-full absolute left-3 top-3 bg-[#d8d8d8] hidden" />
                      <div className="flex items-start justify-start flex-nowrap w-full text-[rgba(0,0,0,0.54)] text-sm">
                        <div className="flex items-center justify-center h-6 w-6 min-w-[24px]">
                          <img className="relative h-6 w-6 z-[2]" title="image" src="https://cf.shopee.vn/file/order_placed_3x" alt="" />
                        </div>
                        {dataOrder?.createdAt && (
                          <div className="w-[155px] shrink-0 text-[rgba(0,0,0,0.8)] mt-[3px] px-3 py-0">
                            {formatDate(dataOrder?.createdAt)}
                          </div>
                        )}
                        <div className="m-w-0">
                          <p className="font-bold leading-5 -mb-0.5">Đơn đã đặt</p>
                          <p className="leading-5 mt-px mb-2 mx-0">Đơn hàng đã được đặt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!isLoading && (
            <>
              <div className="bg-neutral-50 px-6 py-3">
                <div className="flex items-center justify-between pt-0 pb-3 px-0">
                  <div className="flex items-center whitespace-nowrap">
                    <div className="flex items-center">
                      <svg className="mr-[5px]" xmlns="http://www.w3.org/2000/svg" width={70} height={16} fill="none">
                        <path
                          fill="#EE4D2D"
                          fillRule="evenodd"
                          d="M0 2C0 .9.9 0 2 0h66a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                          clipRule="evenodd"
                        />
                        <g clipPath="url(#clip0)">
                          <path
                            fill="#fff"
                            d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                          />
                        </g>
                        <g clipPath="url(#clip1)">
                          <path fill="#fff" d="M63 8.2h2.2v1.6H63V12h-1.6V9.8h-2.2V8.2h2.2V6H63v2.3z" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path fill="#fff" d="M0 0h55v16H0z" transform="translate(4)" />
                          </clipPath>
                          <clipPath id="clip1">
                            <path fill="#fff" d="M0 0h7v16H0z" transform="translate(59)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="max-w-[200px] text-sm font-semibold overflow-hidden text-ellipsis ml-2 mr-0 my-0">
                      {dataOrder?.shop_name}
                    </div>
                    <div className="ml-2 mr-0 my-0">
                      <button className="text-xs capitalize border bg-[#ee4d2d] text-white px-2 py-1 rounded-sm border-solid border-transparent  flex items-center hover:bg-[#d73211] hover:border-[#ba2b0f]">
                        <svg
                          viewBox="0 0 17 17"
                          className="mr-[5px] inline-block w-[1em] h-[1em] fill-current relative"
                          style={{ fill: 'white' }}
                        >
                          <g fillRule="evenodd">
                            <path
                              d="M13.89 0C14.504 0 15 .512 15 1.144l-.003.088-.159 2.117.162.001c.79 0 1.46.558 1.618 1.346l.024.15.008.154v9.932a1.15 1.15 0 01-1.779.963l-.107-.08-1.882-1.567-7.962.002a1.653 1.653 0 01-1.587-1.21l-.036-.148-.021-.155-.071-.836h-.01L.91 13.868a.547.547 0 01-.26.124L.556 14a.56.56 0 01-.546-.47L0 13.429V1.144C0 .512.497 0 1.11 0h12.78zM15 4.65l-.259-.001-.461 6.197c-.045.596-.527 1.057-1.106 1.057L4.509 11.9l.058.69.01.08a.35.35 0 00.273.272l.07.007 8.434-.001 1.995 1.662.002-9.574-.003-.079a.35.35 0 00-.274-.3L15 4.65zM13.688 1.3H1.3v10.516l1.413-1.214h10.281l.694-9.302zM4.234 5.234a.8.8 0 011.042-.077l.187.164c.141.111.327.208.552.286.382.131.795.193 1.185.193s.803-.062 1.185-.193c.225-.078.41-.175.552-.286l.187-.164a.8.8 0 011.042 1.209c-.33.33-.753.579-1.26.753A5.211 5.211 0 017.2 7.4a5.211 5.211 0 01-1.706-.28c-.507-.175-.93-.424-1.26-.754a.8.8 0 010-1.132z"
                              fillRule="nonzero"
                            />
                          </g>
                        </svg>
                        <span className="align-middle ml-1 mr-0 my-0">chat</span>
                      </button>
                    </div>
                    <NavLink className="ml-2 mr-0 my-0" to={`/shop/${dataOrder?.shopid}`}>
                      <button className="text-xs flex items-center capitalize text-[#555] border px-2 py-1 rounded-sm border-solid border-[rgba(0,0,0,0.09)] hover:bg-[rgba(0,0,0,0.02)] hover:border hover:border-solid hover:border-[rgba(0,0,0,0.09)]">
                        <svg
                          enableBackground="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x={0}
                          y={0}
                          className="mr-[5px] inline-block w-[1em] h-[1em] fill-current relative"
                        >
                          <path d="m15 4.8c-.1-1-.8-2-1.6-2.9-.4-.3-.7-.5-1-.8-.1-.1-.7-.5-.7-.5h-8.5s-1.4 1.4-1.6 1.6c-.4.4-.8 1-1.1 1.4-.1.4-.4.8-.4 1.1-.3 1.4 0 2.3.6 3.3l.3.3v3.5c0 1.5 1.1 2.6 2.6 2.6h8c1.5 0 2.5-1.1 2.5-2.6v-3.7c.1-.1.1-.3.3-.3.4-.8.7-1.7.6-3zm-3 7c0 .4-.1.5-.4.5h-8c-.3 0-.5-.1-.5-.5v-3.1c.3 0 .5-.1.8-.4.1 0 .3-.1.3-.1.4.4 1 .7 1.5.7.7 0 1.2-.1 1.6-.5.5.3 1.1.4 1.6.4.7 0 1.2-.3 1.8-.7.1.1.3.3.5.4.3.1.5.3.8.3zm.5-5.2c0 .1-.4.7-.3.5l-.1.1c-.1 0-.3 0-.4-.1s-.3-.3-.5-.5l-.5-1.1-.5 1.1c-.4.4-.8.7-1.4.7-.5 0-.7 0-1-.5l-.6-1.1-.5 1.1c-.3.5-.6.6-1.1.6-.3 0-.6-.2-.9-.8l-.5-1-.7 1c-.1.3-.3.4-.4.6-.1 0-.3.1-.3.1s-.4-.4-.4-.5c-.4-.5-.5-.9-.4-1.5 0-.1.1-.4.3-.5.3-.5.4-.8.8-1.2.7-.8.8-1 1-1h7s .3.1.8.7c.5.5 1.1 1.2 1.1 1.8-.1.7-.2 1.2-.5 1.5z" />
                        </svg>
                        <span className="align-middle ml-1 mr-0 my-0">Xem Shop</span>
                      </button>
                    </NavLink>
                  </div>
                  <div className="flex items-center pl-2.5 pr-0 py-0">
                    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path clipRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14z" stroke="#000" strokeOpacity=".54" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 6a1 1 0 100-2 1 1 0 000 2zM7.25 7.932v3.636c0 .377.336.682.75.682s.75-.305.75-.682V7.932c0-.377-.336-.682-.75-.682s-.75.305-.75.682z"
                        fill="#000"
                        fillOpacity=".54"
                      />
                    </svg>
                  </div>
                </div>
                <hr className="border-b-[rgba(0,0,0,0.06)] border-b border-solid" />
                {dataOrder?.posts.map((post: any, index: number) => (
                  <NavLink key={post.itemid} className="mb-[10px]" to={`/detailProduct/${post?.itemid}/${post?.shopid}`}>
                    <div className="">
                      <div>
                        <span className="items-center flex-nowrap text-[rgba(0,0,0,0.87)] flex pt-3 pb-0 px-0">
                          <div />
                          <div className="flex-1 items-start flex-nowrap flex pl-0 pr-3 py-0">
                            <div className=" w-[81px] h-[81px]">
                              <div className="relative">
                                <div className="w-20 h-20 mr-3">
                                  <img className="w-full h-full" src={post?.image} alt={post?.name} />
                                </div>
                                <div
                                  className="bg-[50%] bg-cover bg-no-repeat absolute w-full h-full left-0 top-0"
                                  style={{
                                    backgroundImage: `${post?.image}`,
                                  }}
                                >
                                  <div className="w-full h-full"></div>
                                </div>
                              </div>
                            </div>

                            <div className="min-w-0 flex flex-1 flex-col items-start pl-3 pr-0 py-0">
                              <div>
                                <div
                                  className="overflow-hidden text-ellipsis text-base leading-22 max-h-12 mt-0 mb-[5px] mx-0"
                                  style={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                  }}
                                >
                                  <span>{post?.name}</span>
                                </div>
                              </div>
                              <div className="mt-0 mx-0">
                                <div className="text-[rgba(0,0,0,0.54)] mb-[5px]">Phân loại hàng: {dataOrder?.option[index]}</div>
                                <div className="">x{dataOrder?.amount[index]}</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div>
                              <span className="align-middle text-sm leading-4 text-[rgba(0,0,0,0.87)]">
                                <div
                                  className="text-sm flex justify-center flex-col text-center text-[rgba(0, 0, 0, 0.87)] font-medium"
                                  style={{ flexDirection: 'row', gap: '8px' }}
                                >
                                  <h3>₫ {formatPrice(post?.price, post?.amount)}</h3>
                                </div>
                              </span>
                            </div>
                          </div>
                        </span>
                      </div>
                      <div className="h-2.5 border-b-[rgba(0,0,0,0.09)] border-b border-solid" />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className="bg-neutral-50 border-t-[rgba(0,0,0,0.09)] border-t border-solid">
                <div className="flex justify-end items-center text-right px-6 py-0 border-b-[rgba(0,0,0,0.09)] border-b border-dotted">
                  <div className="text-[rgba(0,0,0,0.54)] text-xs px-2.5 py-[13px]">
                    <span>Tổng tiền hàng</span>
                  </div>
                  <div className="w-60 text-[rgba(0,0,0,0.8)] pl-2.5 pr-0 py-[13px] border-l-[rgba(0,0,0,0.09)] border-l border-dotted">
                    {dataOrder?.final_total && <div> đ{formatPrice(dataOrder?.final_total - 30000, 1)}</div>}
                  </div>
                </div>
                <div className="flex justify-end items-center text-right px-6 py-0 border-b-[rgba(0,0,0,0.09)] border-b border-dotted">
                  <div className="text-[rgba(0,0,0,0.54)] text-xs px-2.5 py-[13px]">
                    <span>Phí vận chuyển</span>
                  </div>
                  <div className="w-60 text-[rgba(0,0,0,0.8)] pl-2.5 pr-0 py-[13px] border-l-[rgba(0,0,0,0.09)] border-l border-dotted">
                    <div>₫{formatPrice(30000, 1)}</div>
                  </div>
                </div>
                <div className="text-right flex justify-end items-start px-6 py-0 border-0">
                  <div className="text-[rgba(0,0,0,0.54)] text-xs px-2.5 py-[13px]">
                    <span>Thành tiền</span>
                  </div>
                  <div className="w-60 text-[rgba(0,0,0,0.8)] pl-2.5 pr-0 py-[13px] border-l-[rgba(0,0,0,0.09)] border-l border-dotted">
                    {dataOrder?.final_total && <div className="text-[#ee4d2d] text-2xl">₫{formatPrice(dataOrder.final_total)}</div>}
                  </div>
                </div>
              </div>
              {dataOrder?.final_total && (
                <div className="flex items-center border shadow-[0_1px_1px_rgba(0,0,0,0.05)] mt-0 mb-1.5 mx-0 px-[23px] py-3 rounded-sm border-solid border-[rgba(224,168,0,0.4)] bg-[#fffefb]">
                  <svg
                    height={16}
                    width={16}
                    viewBox="0 0 16 16"
                    className="inline-block w-[1em] h-[1em] fill-current relative _5Fq+5W text-[#ffbf00]"
                  >
                    <g fillRule="evenodd">
                      <path
                        d="m8 15c-3.8596721 0-7-3.1397891-7-6.9994612 0-3.8602109 3.1403279-7.0005388 7-7.0005388 3.8602109 0 7 3.1403279 7 7.0005388 0 3.8596721-3.1397891 6.9994612-7 6.9994612z"
                        fill="none"
                        strokeWidth={1}
                        stroke="currentColor"
                      />
                      <path
                        d="m10.4132188 9.3999583h-5.050999c-.204396 0-.3841766-.1081321-.4918691-.297583-.0404396-.0712089-.1556047-.3239567.0413188-.6303309.0694507-.1248354.1643959-.2835171.2738467-.4593416.1050552-.1701102.1969235-.3371435.2791214-.5112098.086154-.1789015.1617586-.3705502.2259345-.5709901.0553847-.1771432.0839562-.3674733.0839562-.5652758 0-.2738467.0404396-.5287923.1204398-.7556059.075165-.2197807.1797806-.4193415.3098907-.5934078.125275-.1674729.2747258-.3151655.4457152-.4382426.1397805-.0989013.2826379-.1775828.4276932-.2369235.6247463-.29029 1.6628604-.0523078 1.6487945.0083517.1424179.0589012.2707698.1279123.3890118.2096707.1767036.1217585.333627.2747258.4646163.4540668.1283519.1784619.2312092.3810997.3050556.6013199.0760441.2232971.1147255.4738471.1147255.7437377 0 .1912092.0281319.3802205.0848353.5626385.0637364.2052751.1397805.3995612.2268136.5780231.0887914.1850553.1832971.3542864.2821984.5050559.1046156.1604399.1982421.297583.2826379.4123085.0874727.1160442.1296706.2505499.122198.3876931-.0061539.1107695-.0404396.2162642-.0989013.3041764-.0562639.0870331-.1305497.1591212-.2101103.2026378-.0685716.0404396-.1665937.0892309-.2769236.0892309zm-3.9906114.7572683h3.0423323c-.1878895.8170573-.6949449 1.2255859-1.5211662 1.2255859s-1.3332766-.4085286-1.5211662-1.2255859z"
                        stroke="none"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  <div className="flex-1 text-xs leading-[14px] text-[rgba(0,0,0,0.54)] pl-2 pr-0 py-0">
                    <span>
                      Vui lòng thanh toán <span className="font-medium text-[#ee4d2d]">₫{formatPrice(dataOrder?.final_total + 30000)}</span>{' '}
                      khi nhận hàng.
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
          <div className="bg-[#fafafa]">
            <div>
              <div> </div>
              <div> </div>
            </div>
            <div className="flex justify-end items-center text-right px-6 py-0">
              <div className="text-[rgba(0,0,0,0.54)] text-xs px-2.5 py-[13px]">
                <span className="flex gap-[5px] items-center">
                  <span className="cursor-pointer flex items-center">
                    <span className="align-middle">
                      <svg width={16} height={17} viewBox="0 0 253 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M126.5 0.389801C126.5 0.389801 82.61 27.8998 5.75 26.8598C5.08763 26.8507 4.43006 26.9733 3.81548 27.2205C3.20091 27.4677 2.64159 27.8346 2.17 28.2998C1.69998 28.7657 1.32713 29.3203 1.07307 29.9314C0.819019 30.5425 0.688805 31.198 0.689995 31.8598V106.97C0.687073 131.07 6.77532 154.78 18.3892 175.898C30.003 197.015 46.7657 214.855 67.12 227.76L118.47 260.28C120.872 261.802 123.657 262.61 126.5 262.61C129.343 262.61 132.128 261.802 134.53 260.28L185.88 227.73C206.234 214.825 222.997 196.985 234.611 175.868C246.225 154.75 252.313 131.04 252.31 106.94V31.8598C252.31 31.1973 252.178 30.5414 251.922 29.9303C251.667 29.3191 251.292 28.7649 250.82 28.2998C250.35 27.8358 249.792 27.4696 249.179 27.2225C248.566 26.9753 247.911 26.852 247.25 26.8598C170.39 27.8998 126.5 0.389801 126.5 0.389801Z"
                          fill="#ee4d2d"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M207.7 149.66L119.61 107.03C116.386 105.472 113.914 102.697 112.736 99.3154C111.558 95.9342 111.772 92.2235 113.33 88.9998C114.888 85.7761 117.663 83.3034 121.044 82.1257C124.426 80.948 128.136 81.1617 131.36 82.7198L215.43 123.38C215.7 120.38 215.85 117.38 215.85 114.31V61.0298C215.848 60.5592 215.753 60.0936 215.57 59.6598C215.393 59.2232 215.128 58.8281 214.79 58.4998C214.457 58.1705 214.063 57.909 213.63 57.7298C213.194 57.5576 212.729 57.4727 212.26 57.4798C157.69 58.2298 126.5 38.6798 126.5 38.6798C126.5 38.6798 95.31 58.2298 40.71 57.4798C40.2401 57.4732 39.7735 57.5602 39.3376 57.7357C38.9017 57.9113 38.5051 58.1719 38.1709 58.5023C37.8367 58.8328 37.5717 59.2264 37.3913 59.6604C37.2108 60.0943 37.1186 60.5599 37.12 61.0298V108.03L118.84 147.57C121.591 148.902 123.808 151.128 125.129 153.884C126.45 156.64 126.797 159.762 126.113 162.741C125.429 165.72 123.755 168.378 121.363 170.282C118.972 172.185 116.006 173.221 112.95 173.22C110.919 173.221 108.915 172.76 107.09 171.87L40.24 139.48C46.6407 164.573 62.3785 186.277 84.24 200.16L124.49 225.7C125.061 226.053 125.719 226.24 126.39 226.24C127.061 226.24 127.719 226.053 128.29 225.7L168.57 200.16C187.187 188.399 201.464 170.892 209.24 150.29C208.715 150.11 208.2 149.9 207.7 149.66Z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="align-middle">Phương thức Thanh toán</span>
                </span>
              </div>
              <div className="w-60 text-[rgba(0,0,0,0.8)] pl-2.5 pr-0 py-[13px] border-l-[rgba(0,0,0,0.09)] border-l border-dotted">
                <div>Thanh toán khi nhận hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {dataOrder && <ModelRating isShow={isShowModel} onCloseModel={onCloseModel} data={dataOrder} />}
    </>
  );
}
export default memo(OrderDetail);
