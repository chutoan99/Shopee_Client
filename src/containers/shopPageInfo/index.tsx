//? LIBRARY
import './style/index.css';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
//? APPS
import { ShopInterface } from '../../types/shop';
interface ProductShop {
  data: ShopInterface;
}

function ShopPageInfo({ data }: ProductShop) {
  return (
    <div className="shop-page__info mt-[120px] sm-gutter  pb-[30px] bg-[white] p-[25px] flex justify-between response_shop-content">
      <div className="grid wide">
        <div className="section-seller-overview-horizontal container">
          <div className="section-seller-overview-horizontal__leading">
            <div
              className="section-seller-overview-horizontal__leading-background"
              style={{
                backgroundImage: `url(${data?.cover})`,
              }}
            />
            <div className="section-seller-overview-horizontal__leading-background-mask" />
            <div className="section-seller-overview-horizontal__leading-content">
              <div className="section-seller-overview-horizontal__seller-portrait UgJq78">
                <NavLink className="section-seller-overview-horizontal__seller-portrait-link" to="">
                  <div className="shopee-avatar wEpezN">
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
                </NavLink>
                <div className="section-seller-overview-horizontal__portrait-info">
                  <h1 className="section-seller-overview-horizontal__portrait-name">{data?.name}</h1>
                  <div className="section-seller-overview-horizontal__portrait-status">
                    <div className="section-seller-overview-horizontal__active-time">Online 6 phút trước</div>
                  </div>
                </div>
              </div>
              <div className="section-seller-overview-horizontal__buttons">
                <NavLink to="/" className="section-seller-overview-horizontal__button">
                  <button className="shopee-button-outline shopee-button-outline--complement shopee-button-outline--fill">
                    <span className="section-seller-overview-horizontal__icon">
                      <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon icon-plus-sign">
                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                      </svg>
                    </span>
                    theo dõi
                  </button>
                </NavLink>
                <NavLink to="/" className="section-seller-overview-horizontal__button">
                  <button className="shopee-button-outline shopee-button-outline--complement shopee-button-outline--fill">
                    <span className="section-seller-overview-horizontal__icon">
                      <svg viewBox="0 0 16 16" className="shopee-svg-icon">
                        <g fillRule="evenodd">
                          <path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z" />
                        </g>
                      </svg>
                    </span>
                    chat
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="section-seller-overview-horizontal__seller-info-list">
            <div className="section-seller-overview__item section-seller-overview__item--clickable">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} strokeWidth={0} className="shopee-svg-icon">
                  <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" />
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">Sản phẩm:&nbsp;</div>
                <div className="section-seller-overview__item-text-value">{data?.item_count}</div>
              </div>
            </div>
            <div className="section-seller-overview__item">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon">
                  <g>
                    <circle cx="5.5" cy={5} fill="none" r={4} strokeMiterlimit={10} />
                    <path
                      d="m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6"
                      fill="none"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                    <path
                      d="m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                    <path d="m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                  </g>
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">Người theo dõi:&nbsp;</div>
                <div className="section-seller-overview__item-text-value">{data?.follower_count}</div>
              </div>
            </div>
            <div className="section-seller-overview__item">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon">
                  <g>
                    <circle cx={7} cy="4.5" fill="none" r="3.8" strokeMiterlimit={10} />
                    <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1={12} x2={12} y1="11.2" y2="14.2" />
                    <line fill="none" strokeLinecap="round" strokeMiterlimit={10} x1="10.5" x2="13.5" y1="12.8" y2="12.8" />
                    <path d="m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                  </g>
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">Đang Theo:&nbsp;</div>
                <div className="section-seller-overview__item-text-value">{data?.follower_count}</div>
              </div>
            </div>
            <div className="section-seller-overview__item section-seller-overview__item--clickable">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon icon-rating">
                  <polygon
                    fill="none"
                    points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">đánh giá:&nbsp;</div>
                <div className="section-seller-overview__item-text-value">{data?.rating_bad + data?.rating_good + data?.rating_normal}</div>
              </div>
            </div>
            <div className="section-seller-overview__item">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon">
                  <g>
                    <polygon
                      fill="none"
                      points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                    <circle cx={4} cy="5.8" r={1} stroke="none" />
                    <circle cx="7.5" cy="5.8" r={1} stroke="none" />
                    <circle cx={11} cy="5.8" r={1} stroke="none" />
                  </g>
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">Tỉ lệ phản hồi Chat:&nbsp;</div>
                <div className="section-seller-overview__item-text-value">
                  {data?.response_rate}%
                  <div className="section-seller-overview__inline-icon section-seller-overview__inline-icon--help">
                    <svg width={10} height={10}>
                      <g fill="currentColor" fillRule="nonzero" color="currentColor" strokeWidth={0}>
                        <path d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zM5 .675a4.325 4.325 0 1 0 0 8.65 4.325 4.325 0 0 0 0-8.65z" />
                        <path d="M6.235 5.073c.334-.335.519-.79.514-1.264a1.715 1.715 0 0 0-.14-.684 1.814 1.814 0 0 0-.933-.951A1.623 1.623 0 0 0 5 2.03a1.66 1.66 0 0 0-.676.14 1.772 1.772 0 0 0-.934.948c-.093.219-.14.454-.138.691a.381.381 0 0 0 .106.276c.07.073.168.113.27.11a.37.37 0 0 0 .348-.235c.02-.047.031-.099.03-.15a1.006 1.006 0 0 1 .607-.933.954.954 0 0 1 .772.002 1.032 1.032 0 0 1 .61.93c.003.267-.1.525-.288.716l-.567.537c-.343.35-.514.746-.514 1.187a.37.37 0 0 0 .379.382c.1.002.195-.037.265-.108a.375.375 0 0 0 .106-.274c0-.232.097-.446.29-.642l.568-.534zM5 6.927a.491.491 0 0 0-.363.152.53.53 0 0 0 0 .74.508.508 0 0 0 .726 0 .53.53 0 0 0 0-.74A.491.491 0 0 0 5 6.927z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-seller-overview__item">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon">
                  <g>
                    <circle cx="6.8" cy="4.2" fill="none" r="3.8" strokeMiterlimit={10} />
                    <polyline
                      fill="none"
                      points="9.2 12.5 11.2 14.5 14.2 11"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                    />
                    <path d="m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6" fill="none" strokeLinecap="round" strokeMiterlimit={10} />
                  </g>
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">tham gia:&nbsp;</div>
                <div className="section-seller-overview__item-text-value">6 năm trước</div>
              </div>
            </div>
            <div className="section-seller-overview__item">
              <div className="section-seller-overview__item-icon-wrapper">
                <svg width={13} height={14}>
                  <g fill="currentColor" fillRule="nonzero" strokeWidth="0.4">
                    <path d="M9.49.903h.453c.498 0 .903.404.903.903v4.993a.452.452 0 1 0 .904 0V1.806C11.75.808 10.94 0 9.944 0H9.49a.452.452 0 1 0 0 .903zM5.879 12.645H1.813a.903.903 0 0 1-.903-.902V1.806c0-.499.405-.903.903-.903h.452a.451.451 0 0 0 0-.903h-.452C.816 0 .007.808.007 1.806v9.936c0 .998.809 1.806 1.806 1.806h4.065a.452.452 0 0 0 0-.903z" />
                    <path d="M2.265 0H9.49a.451.451 0 1 1 0 .903H2.265a.452.452 0 0 1 0-.903zm.904 3.613H9.04a.452.452 0 1 1 0 .903H3.169a.452.452 0 1 1 0-.903zm0 2.71h3.613a.452.452 0 1 1 0 .904H3.169a.452.452 0 0 1 0-.904zm0 2.709h1.806a.452.452 0 1 1 0 .905H3.169a.452.452 0 0 1 0-.905zm6.322 4.065a2.258 2.258 0 1 0 0-4.515 2.258 2.258 0 0 0 0 4.515zm0 .903a3.161 3.161 0 1 1 0-6.323 3.161 3.161 0 0 1 0 6.323z" />
                    <path d="M7.575 12.117l3.193-3.194a.451.451 0 1 1 .638.639l-3.192 3.192a.451.451 0 0 1-.639-.637z" />
                  </g>
                </svg>
              </div>
              <div className="section-seller-overview__item-text">
                <div className="section-seller-overview__item-text-name">Tỉ lệ Shop hủy đơn:&nbsp;</div>
                <div className="section-seller-overview__inline-icon section-seller-overview__inline-icon--warning">
                  <svg width={10} height={10}>
                    <path
                      d="M5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm.765-7.435c0-.385-.395-.695-.775-.695-.385 0-.765.31-.765.695l.2 2.89c0 .385.175.695.56.695.385 0 .58-.31.58-.695l.2-2.89zM5.01 6.52a.783.783 0 0 0-.785.785c0 .435.35.785.785.785.435 0 .785-.35.785-.785 0-.43-.35-.785-.785-.785z"
                      fill="currentColor"
                      fillRule="nonzero"
                      strokeWidth={0}
                    />
                  </svg>
                </div>
                <div className="section-seller-overview__item-text-value">
                  12%
                  <div className="section-seller-overview__inline-icon section-seller-overview__inline-icon--help">
                    <svg width={10} height={10}>
                      <g fill="currentColor" fillRule="nonzero" color="currentColor" strokeWidth={0}>
                        <path d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zM5 .675a4.325 4.325 0 1 0 0 8.65 4.325 4.325 0 0 0 0-8.65z" />
                        <path d="M6.235 5.073c.334-.335.519-.79.514-1.264a1.715 1.715 0 0 0-.14-.684 1.814 1.814 0 0 0-.933-.951A1.623 1.623 0 0 0 5 2.03a1.66 1.66 0 0 0-.676.14 1.772 1.772 0 0 0-.934.948c-.093.219-.14.454-.138.691a.381.381 0 0 0 .106.276c.07.073.168.113.27.11a.37.37 0 0 0 .348-.235c.02-.047.031-.099.03-.15a1.006 1.006 0 0 1 .607-.933.954.954 0 0 1 .772.002 1.032 1.032 0 0 1 .61.93c.003.267-.1.525-.288.716l-.567.537c-.343.35-.514.746-.514 1.187a.37.37 0 0 0 .379.382c.1.002.195-.037.265-.108a.375.375 0 0 0 .106-.274c0-.232.097-.446.29-.642l.568-.534zM5 6.927a.491.491 0 0 0-.363.152.53.53 0 0 0 0 .74.508.508 0 0 0 .726 0 .53.53 0 0 0 0-.74A.491.491 0 0 0 5 6.927z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ShopPageInfo);
