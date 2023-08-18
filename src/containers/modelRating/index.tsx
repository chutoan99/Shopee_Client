//? LIBRARY
import { toast } from 'react-hot-toast';
import { Order } from '../../types/order';
import './styles/index.css';
import { memo, useState } from 'react';
import { Rating } from 'react-rainbow-components';
import { CreateComment } from '../../services/comment/index.service';
import { Loading } from '../../components';
//? APPS

interface RatingModel {
  isShow: boolean;
  onCloseModel: any;
  data: Order;
}

function ModelRatting({ isShow, onCloseModel, data }: RatingModel) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [fileImages, setFileImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [payLoad, setPayload] = useState<any>({
    comment: '',
    rating_star: 5,
  });

  const onFileChange = (event: any) => {
    const files = event.target.files;
    if (files.length + imageUrls.length > 5) {
      toast.error('Bạn chỉ được tải tối đa 5 ảnh');
      event.target.value = '';
      return;
    }
    const newImages: string[] = [];
    const newFiles: any[] = [];
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      const imageURL: string = URL.createObjectURL(file);
      newImages.push(imageURL);
      newFiles.push(file);
    }

    setImageUrls((prevImageUrls) => [...prevImageUrls, ...newImages]);
    setFileImages((prev: any) => [...prev, ...newFiles]);
  };
  const onRemoveFile = (index: number) => {
    const updatedImageUrls = [...imageUrls];
    updatedImageUrls.splice(index, 1);
    setImageUrls(updatedImageUrls);
  };

  const onSubmit = () => {
    if (!payLoad.comment) return toast.error('Vui lòng nhập nhận xét của bạn');
    if (imageUrls?.length === 0) return toast.error('Vui lòng cập nhật hình ảnh');
    const payloadCreateComment = data?.posts?.map((payload: any, index: number) => {
      return {
        itemid: payload.itemid,
        shopid: data.shopid,
        orderid: data.orderid,
        images: fileImages,
        options: data?.option[index],
        model_name: '',
        comment: payLoad?.comment,
        rating_star: payLoad?.rating_star,
      };
    });
    onCreateComment(payloadCreateComment);
  };

  const onCreateComment = async (payload: any) => {
    try {
      setLoading(true);
      for (const item of payload) {
        const response = await CreateComment(item);
        if (response.err === 0) {
          onCloseModel();
          toast.success('Bạn vừa thêm bình luận');
        }
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      onCloseModel();
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loading />}
      {isShow && (
        <div id="modal">
          <div>
            <div className="shopee-popup shopee-modal__transition-enter-done">
              <div className="shopee-popup__overlay" onClick={onCloseModel} />
              <div className="shopee-popup__container">
                <div style={{ display: 'contents' }}>
                  <div>
                    <div className="shopee-popup-form OU2Nj+">
                      <div className="shopee-popup-form__header">
                        <div className="shopee-popup-form__title">Đánh giá sản phẩm</div>
                      </div>
                      <div className="shopee-popup-form__main">
                        <div className="shopee-popup-form__main-container">
                          {/* <div className="vTGJzu">
                            <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon izk1hM">
                              <linearGradient
                                id="coingold-a"
                                gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                                gradientUnits="userSpaceOnUse"
                                x1="2.9694"
                                x2="12.0447"
                                y1="-811.8111"
                                y2="-823.427"
                              >
                                <stop offset={0} stopColor="#f6c430" />
                                <stop offset=".5281" stopColor="#ffecaa" />
                                <stop offset=".6639" stopColor="#fdde82" />
                                <stop offset=".9673" stopColor="#f7bc1e" />
                                <stop offset={1} stopColor="#f6b813" />
                              </linearGradient>
                              <linearGradient
                                id="coingold-b"
                                gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                                gradientUnits="userSpaceOnUse"
                                x1="7.5"
                                x2="7.5"
                                y1="-810.2517"
                                y2="-824.9919"
                              >
                                <stop offset={0} stopColor="#e49b00" />
                                <stop offset=".9416" stopColor="#d67b00" />
                                <stop offset={1} stopColor="#d57900" />
                              </linearGradient>
                              <linearGradient
                                id="coingold-c"
                                gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                                gradientUnits="userSpaceOnUse"
                                x1="4.0932"
                                x2="10.9068"
                                y1="-813.5499"
                                y2="-821.6702"
                              >
                                <stop offset={0} stopColor="#f99d00" />
                                <stop offset=".1752" stopColor="#eea10b" />
                                <stop offset=".5066" stopColor="#fcd21f" />
                                <stop offset=".6657" stopColor="#f2ba10" />
                                <stop offset={1} stopColor="#d57900" />
                              </linearGradient>
                              <linearGradient
                                id="coingold-d"
                                gradientUnits="userSpaceOnUse"
                                x1="5.4204"
                                x2="9.7379"
                                y1="5.0428"
                                y2="10.188"
                              >
                                <stop offset={0} stopColor="#ffec88" />
                                <stop offset=".5003" stopColor="#fdf4cb" />
                                <stop offset=".7556" stopColor="#fceba4" />
                                <stop offset={1} stopColor="#fae17a" />
                              </linearGradient>
                              <g>
                                <circle cx="7.5" cy="7.5" fill="url(#coingold-a)" r="7.4" />
                                <path
                                  d="m7.5.4c3.9 0 7.1 3.2 7.1 7.1s-3.2 7.1-7.1 7.1-7.1-3.2-7.1-7.1 3.2-7.1 7.1-7.1m0-.3c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4-3.3-7.4-7.4-7.4z"
                                  fill="url(#coingold-b)"
                                />
                                <path
                                  d="m14.4 7.7c0-.1 0-.1 0-.2 0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v.2c.1-3.7 3.1-6.7 6.9-6.7s6.8 3 6.9 6.7z"
                                  fill="#fff5c9"
                                />
                                <circle cx="7.5" cy="7.5" fill="url(#coingold-c)" r="5.3" />
                                <path
                                  d="m11.4 4c1.1 1 1.8 2.4 1.8 3.9 0 2.9-2.4 5.3-5.3 5.3-1.6 0-3-.7-3.9-1.8.9.8 2.2 1.4 3.5 1.4 2.9 0 5.3-2.4 5.3-5.3 0-1.4-.5-2.6-1.4-3.5z"
                                  fill="#ffeead"
                                />
                                <path
                                  d="m11.4 4c-1-1.1-2.4-1.8-3.9-1.8-2.9 0-5.3 2.4-5.3 5.3 0 1.6.7 3 1.8 3.9-.8-.9-1.4-2.2-1.4-3.5 0-2.9 2.4-5.3 5.3-5.3 1.4 0 2.6.5 3.5 1.4z"
                                  fill="#c97201"
                                />
                                <path
                                  d="m6.2 4.8c-.5.4-.6 1.1-.5 1.7.1.5.5 1 1.1 1.3.7.4 2.4.8 2.4 1.7 0 .2-.1.5-.2.6-.3.4-.8.5-1.3.5-.3 0-.7-.1-1-.2s-.6-.3-.9-.5c-.2-.1-.4 0-.5.1-.1.2 0 .4.1.5.5.4 1 .7 1.7.8.6.1 1.3.1 1.8-.2.5-.2.9-.6 1-1.2s-.1-1.2-.5-1.6c-.5-.5-2-1-2.4-1.3-.3-.2-.6-.5-.6-1 .1-.6.5-.9 1.1-.9.5 0 1.1.1 1.6.4.4.3.8-.4.4-.7-1-.6-2.5-.7-3.3 0z"
                                  fill="#c67830"
                                />
                                <path
                                  d="m6.1 4.5c-.5.4-.6 1.1-.5 1.7.1.5.5 1 1.1 1.3.7.4 2.4.8 2.4 1.7 0 .2-.1.5-.2.6-.3.4-.8.5-1.3.5-.3 0-.7-.1-1-.2s-.6-.3-.9-.5c-.2-.1-.4 0-.5.1-.1.2 0 .4.1.5.5.4 1 .7 1.7.8.6.1 1.3.1 1.8-.2.5-.2.9-.6 1-1.2s-.2-1.2-.6-1.6c-.5-.5-1.9-1-2.3-1.3-.3-.2-.6-.5-.6-1 .1-.6.5-.9 1.1-.9.5 0 1.1.1 1.6.4.4.3.8-.4.4-.7-1-.6-2.5-.7-3.3 0z"
                                  fill="url(#coingold-d)"
                                />
                              </g>
                            </svg>
                            <span className="_1oVQkX">
                              Xem Hướng dẫn đánh giá chuẩn để nhận đến <span className="_5c1DB5">200 xu</span>!
                            </span>
                            <div className="stardust-popover" id="stardust-popover1" tabIndex={0}>
                              <div role="button" className="stardust-popover__target">
                                <span>
                                  <span className="V-sGOI">
                                    <span className="ej1BZw" />
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div> */}
                          <div className="rating-modal-handler__container rating-modal-handler__container--last">
                            {data?.posts?.map((post: any, index: number) => (
                              <div className="PinpOp UYED6+" key={post?.itemid}>
                                <div className="rGP9Yd">
                                  <div className="shopee-image__wrapper">
                                    <div className="shopping_cart-img">
                                      <img src={post?.image} alt={post?.name} />
                                    </div>
                                    <div
                                      className="shopee-image__content"
                                      style={{
                                        backgroundImage: `${post?.image}`,
                                      }}
                                    >
                                      <div className="shopee-image__content--blur"> </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="U2w1su">
                                  <div className="D7LjRB">{post?.name}</div>
                                  <div className="q7YFPv">Phân loại hàng: {data?.option[index]}</div>
                                </div>
                              </div>
                            ))}

                            <div style={{ margin: '20px 0px' }}>
                              <div className="dmvG7c">
                                <div className="jcQ0KT">
                                  <span>Chất lượng sản phẩm</span>
                                </div>
                                <div className="rainbow-m-around_big">
                                  <Rating
                                    value={payLoad.rating_star}
                                    onChange={(e: any) =>
                                      setPayload((prev: any) => {
                                        return {
                                          ...prev,
                                          rating_star: +e.target.value,
                                        };
                                      })
                                    }
                                  />
                                </div>
                                <span className="_6m3yfK" style={{ color: 'rgb(237, 165, 0)' }}>
                                  {['Tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Tuyệt vời'][payLoad?.rating_star - 1]}
                                </span>
                              </div>
                            </div>
                            <div className="jz-Ezz">
                              <div className="X3Qjvs">
                                <div className="UzvaFO">
                                  <div className="ej4ckG" style={{ fontWeight: 'normal' }}>
                                    Chất lượng sản phẩm:
                                  </div>
                                  <textarea className="_2LhMgE" rows={1} placeholder="để lại đánh giá." defaultValue={''} />
                                </div>
                                <div className="UzvaFO">
                                  <div className="ej4ckG" style={{ fontWeight: 'normal' }}>
                                    Đúng với mô tả:
                                  </div>
                                  <textarea className="_2LhMgE" rows={1} placeholder="" defaultValue={''} />
                                </div>
                                <div className="CLFTQP" />
                                <div style={{ position: 'relative' }}>
                                  <textarea
                                    className="_2LhMgE"
                                    rows={3}
                                    placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này với những người mua khác nhé."
                                    style={{
                                      minHeight: 100,
                                      color: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                    value={payLoad.comment}
                                    onChange={(e: any) =>
                                      setPayload((prev: any) => {
                                        return {
                                          ...prev,
                                          comment: e.target.value,
                                        };
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              {imageUrls.length === 0 && (
                                <div className="_46Yt1i">
                                  <label className="Vad+7d">
                                    <svg width={20} height={18} viewBox="0 0 20 18" fill="none">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.15377 9.76895C6.15377 11.8927 7.87492 13.6151 9.99992 13.6151C12.1236 13.6151 13.8461 11.8927 13.8461 9.76895C13.8461 7.6446 12.1236 5.9228 9.99992 5.9228C7.87492 5.9228 6.15377 7.6446 6.15377 9.76895ZM5 9.76896C5 7.00771 7.23813 4.76896 10 4.76896C12.7613 4.76896 15 7.00771 15 9.76896C15 12.5296 12.7613 14.769 10 14.769C7.23813 14.769 5 12.5296 5 9.76896ZM1.15385 17.2606C0.489784 17.2606 0 16.7249 0 16.0662V4.12218C0 3.46224 0.489784 2.8459 1.15385 2.8459H4.61538L5.21635 1.73267C5.21635 1.73267 5.75421 0.538208 6.41827 0.538208H13.5817C14.2452 0.538208 14.7837 1.73267 14.7837 1.73267L15.3846 2.8459H18.8462C19.5096 2.8459 20 3.46224 20 4.12218V16.0662C20 16.7249 19.5096 17.2606 18.8462 17.2606H1.15385Z"
                                        fill="#EE4D2D"
                                      />
                                    </svg>
                                    <span className="C7VJzu">Thêm Hình ảnh</span>
                                    <input className="JiUFY3" type="file" accept="image/*" multiple onChange={onFileChange} />
                                  </label>
                                  {/* <label className="Vad+7d">
                                    <svg width={20} height={15} viewBox="0 0 20 15" fill="none">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1 0.0769043C0.447715 0.0769043 0 0.524619 0 1.0769V13.1945C0 13.7468 0.447715 14.1945 1 14.1945H13.1176C13.6699 14.1945 14.1176 13.7468 14.1176 13.1945V1.0769C14.1176 0.52462 13.6699 0.0769043 13.1176 0.0769043H1ZM10.5883 7.1356C10.5883 9.08484 9.00811 10.665 7.05887 10.665C5.10963 10.665 3.52946 9.08484 3.52946 7.1356C3.52946 5.18636 5.10963 3.60619 7.05887 3.60619C9.00811 3.60619 10.5883 5.18636 10.5883 7.1356ZM7.05916 9.48862C8.35865 9.48862 9.4121 8.43517 9.4121 7.13568C9.4121 5.83619 8.35865 4.78274 7.05916 4.78274C5.75966 4.78274 4.70622 5.83619 4.70622 7.13568C4.70622 8.43517 5.75966 9.48862 7.05916 9.48862ZM20.0003 1.25341L15.2944 4.78244V9.4887L20.0003 13.0181V1.25341Z"
                                        fill="#EE4D2D"
                                      />
                                    </svg>
                                    <span className="C7VJzu">Thêm Video</span>
                                    <input className="JiUFY3" type="file" accept="video/mp4" />
                                  </label> */}
                                </div>
                              )}

                              <div className="_46Yt1i">
                                {imageUrls?.map((url, index) => (
                                  <div
                                    key={index}
                                    className="zcGDMl"
                                    style={{
                                      backgroundImage: `url('${url}')`,
                                      border: 'none',
                                    }}
                                  >
                                    <button>
                                      <svg width={10} height={10} viewBox="0 0 10 10" fill="none" onClick={() => onRemoveFile(index)}>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M8.28268 0.908882C8.47794 0.71362 8.79452 0.71362 8.98978 0.908882L9.0908 1.0099C9.28606 1.20516 9.28606 1.52174 9.0908 1.717L1.71669 9.09112C1.52142 9.28638 1.20484 9.28638 1.00958 9.09112L0.908564 8.9901C0.713301 8.79484 0.713301 8.47826 0.908563 8.283L8.28268 0.908882Z"
                                          fill="#F6F6F6"
                                        />
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M1.00973 0.908882C1.20499 0.71362 1.52157 0.71362 1.71683 0.908882L9.09095 8.28299C9.28621 8.47826 9.28621 8.79484 9.09095 8.9901L8.98993 9.09112C8.79467 9.28638 8.47809 9.28638 8.28283 9.09112L0.908713 1.717C0.713451 1.52174 0.71345 1.20516 0.908713 1.0099L1.00973 0.908882Z"
                                          fill="#F6F6F6"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                ))}

                                {imageUrls.length > 0 && (
                                  <>
                                    {Array.from({ length: 5 }).map((_, index: number) => (
                                      <>
                                        {index < 5 - imageUrls.length && (
                                          <label className="--ENop" key={index}>
                                            <svg width={20} height={18} viewBox="0 0 20 18" fill="none">
                                              <svg width={20} height={18} viewBox="0 0 20 18" fill="none">
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M6.15377 9.76902C6.15377 11.8927 7.87492 13.6152 9.99992 13.6152C12.1236 13.6152 13.8461 11.8927 13.8461 9.76902C13.8461 7.64466 12.1236 5.92286 9.99992 5.92286C7.87492 5.92286 6.15377 7.64466 6.15377 9.76902ZM5 9.76902C5 7.00777 7.23813 4.76902 10 4.76902C12.7613 4.76902 15 7.00777 15 9.76902C15 12.5296 12.7613 14.769 10 14.769C7.23813 14.769 5 12.5296 5 9.76902ZM1.15385 17.2607C0.489784 17.2607 0 16.725 0 16.0662V4.12224C0 3.4623 0.489784 2.84596 1.15385 2.84596H4.61538L5.21635 1.73273C5.21635 1.73273 5.75421 0.538269 6.41827 0.538269H13.5817C14.2452 0.538269 14.7837 1.73273 14.7837 1.73273L15.3846 2.84596H18.8462C19.5096 2.84596 20 3.4623 20 4.12224V16.0662C20 16.725 19.5096 17.2607 18.8462 17.2607H1.15385Z"
                                                  fill="black"
                                                  fillOpacity="0.26"
                                                />
                                              </svg>
                                            </svg>
                                            {/* <span className="C7VJzu">{5 - index}/5</span> */}
                                            <input className="JiUFY3" type="file" accept="image/*" multiple onChange={onFileChange} />
                                          </label>
                                        )}
                                      </>
                                    ))}
                                  </>
                                )}
                              </div>

                              {/* <div className="p9mPpj">
                                Thêm 50 ký tự và 1 hình ảnh và 1 video để nhận <span className="bMPOc7">200 xu</span>
                              </div> */}
                            </div>
                            <div className="rating-modal-handler__rating-anonymous-wrapper">
                              <label className="stardust-checkbox stardust-checkbox--checked">
                                <input className="stardust-checkbox__input" type="checkbox" />
                                <div className="stardust-checkbox__box" />
                              </label>
                              <div style={{ marginLeft: 4 }}>
                                <div className="rating-modal-handler__rating-anonymous-hint">Hiển thị tên đăng nhập trên đánh giá này</div>
                                <div className="rating-modal-handler__rating-anonymous-username">
                                  Tên tài khoản sẽ được hiển thị như chutoan2306
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div id="wrapper">
                            <div>
                              <div className="wQt6l3">Về Dịch vụ</div>
                              <div className="HiyfuD">
                                <div className="u-INmW">
                                  <div className="dmvG7c">
                                    <div className="jcQ0KT">
                                      <span>Dịch vụ của người bán</span>
                                    </div>
                                    <div className="rainbow-m-around_big">
                                      <Rating value={payLoad[0].rating_star} onChange={(e) => onchangeStart(e)} />
                                    </div>
                                    <span className="_6m3yfK" style={{ color: 'rgb(237, 165, 0)' }}>
                                      {['Tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Tuyệt vời'][payLoad[0].rating_star - 1]}
                                    </span>
                                  </div>
                                </div>
                                <div className="u-INmW">
                                  <div className="dmvG7c">
                                    <div className="jcQ0KT">
                                      <span>Dịch vụ vận chuyển</span>
                                    </div>
                                    <div className="rainbow-m-around_big">
                                      <Rating value={payLoad[0].rating_star} onChange={(e) => onchangeStart(e)} />
                                    </div>
                                    <span className="_6m3yfK" style={{ color: 'rgb(237, 165, 0)' }}>
                                      {['Tệ', 'Không hài lòng', 'Bình thường', 'Hài lòng', 'Tuyệt vời'][payLoad[0].rating_star - 1]}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                      <div className="shopee-popup-form__footer">
                        <button className="cancel-btn">Trở Lại</button>
                        <button type="button" className="btn btn-solid-primary btn--s btn--inline rL4kG2" onClick={onSubmit}>
                          Hoàn thành
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style
            id="modal-inset"
            data-top={0}
            data-right={0}
            data-bottom={0}
            data-left={0}
            dangerouslySetInnerHTML={{
              __html: '.modal-inset{top:0;right:0;bottom:0;left:0;position:fixed;pointer-events:none}.modal-inset>*{pointer-events:auto}',
            }}
          />
        </div>
      )}
    </>
  );
}
export default memo(ModelRatting);
