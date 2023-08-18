//? LIBRARY
import './style/index.css';
import { memo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
//? APPS
import { useGetCategoryTreeParentQuery } from '../../services/category/index.hook';

function SearchFilter() {
  const params = useParams();
  const { data, isLoading } = useGetCategoryTreeParentQuery(params);

  return (
    <div className="shopee-filter-panel">
      {params.display_name && (
        <div className="shopee-category-list">
          <NavLink className="shopee-category-list__header" to="/">
            <svg viewBox="0 0 12 10" className="shopee-svg-icon shopee-category-list__header-icon icon-all-cate">
              <g fillRule="evenodd" stroke="none" strokeWidth={1}>
                <g transform="translate(-373 -208)">
                  <g transform="translate(155 191)">
                    <g transform="translate(218 17)">
                      <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                      <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                      <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Tất cả Danh mục
          </NavLink>
          <div className="shopee-category-list__body">
            <div className="shopee-category-list__category">
              <div className="shopee-category-list__main-category shopee-category-list__main-category--active">
                <NavLink className="shopee-category-list__main-category__link" to="/">
                  <svg
                    viewBox="0 0 4 7"
                    className="shopee-svg-icon shopee-category-list__main-category__caret icon-down-arrow-right-filled"
                  >
                    <polygon points="4 3.5 0 0 0 7" />
                  </svg>
                  {params.display_name}
                </NavLink>
              </div>
              {!isLoading && (
                <>
                  {data?.response?.map((item: any, index: number) => {
                    return (
                      <NavLink className="shopee-category-list__sub-category" to="/" key={index}>
                        {item?.display_name}
                      </NavLink>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <div />
      <div className="shopee-search-filter-status FNPDBK">
        <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x={0} y={0} className="shopee-svg-icon">
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        <div className="shopee-search-filter-status__text">Bộ lọc tìm kiếm</div>
      </div>
      {/* <div className="shopee-filter-group shopee-facet-filter">
      <div className="shopee-filter-group__header">Theo Danh Mục</div>
      <div className="folding-items shopeee-filter-group__body folding-items--folded">
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={100244} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Áo thun (801k+)</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={100242} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Áo sơ mi (183k+)</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={100050} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Áo khoác (174k+)</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={100053} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Quần đùi (145k+)</span>
            </label>
          </div>
        </div>
        <div className="stardust-dropdown folding-items__toggle">
          <div className="stardust-dropdown__item-header">
            <div className="shopee-filter-group__toggle-btn">
              Thêm
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-down">
                <g>
                  <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="stardust-dropdown__item-body">
            <div className="folding-items__folded-items">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100009} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Phụ Kiện Thời Trang (144k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100243} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Áo polo (144k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100047} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quần jean (121k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100048} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Hoodie &amp; Áo nỉ (121k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100052} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quần dài (115k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100055} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Đồ lót (106k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100057} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Bộ (88k+)</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={100017} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Thời Trang Nữ (63k+)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="shopee-filter-group shopee-location-filter">
        <div className="shopee-filter-group__header">Nơi Bán</div>
        <div className="folding-items shopeee-filter-group__body folding-items--folded">
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue="TP. Hồ Chí Minh" />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">TP. Hồ Chí Minh</span>
              </label>
            </div>
          </div>
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue="Hà Nội" />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Hà Nội</span>
              </label>
            </div>
          </div>
          {/* <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue="Quận 1" />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Quận 1</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue="Quận 3" />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Quận 3</span>
            </label>
          </div>
        </div>
        <div className="stardust-dropdown folding-items__toggle">
          <div className="stardust-dropdown__item-header">
            <div className="shopee-filter-group__toggle-btn">
              Thêm
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-down">
                <g>
                  <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="stardust-dropdown__item-body">
            <div className="folding-items__folded-items">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận 6" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận 6</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận 7" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận 7</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận 8" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận 8</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận 10" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận 10</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận 11" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận 11</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận 12" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận 12</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận Gò Vấp" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận Gò Vấp</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận Tân Phú" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận Tân Phú</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận Bình Tân" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận Bình Tân</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận Tân Bình" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận Tân Bình</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Thành Phố Thủ Đức" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Thành Phố Thủ Đức</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận Bình Thạnh" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận Bình Thạnh</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Quận Phú Nhuận" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Quận Phú Nhuận</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue="Huyện Bình Chánh" />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Huyện Bình Chánh</span>
                  </label>
                </div>
              </div>
              <div className="XJ2GHk">
                <div className="stardust-popover" id="stardust-popover2" tabIndex={0}>
                  <div role="button" className="stardust-popover__target">
                    <div className="Fk4kxI">Khác &gt;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
      {/* <div className="shopee-filter-group shopee-logistics-filter">
        <div className="shopee-filter-group__header">Đơn Vị Vận Chuyển</div>
        <div className="folding-items shopeee-filter-group__body folding-items--folded">
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue={1} />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Hỏa Tốc</span>
              </label>
            </div>
          </div>
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue={2} />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Nhanh</span>
              </label>
            </div>
          </div>
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue={3} />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Tiết Kiệm</span>
              </label>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="shopee-filter-group shopee-brands-filter">
      <div className="shopee-filter-group__header">Thương Hiệu</div>
      <div className="folding-items shopeee-filter-group__body folding-items--folded">
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={1277322} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">COOLMATE</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={3383086} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">SENIM</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={3213680} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">KARANTS</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={2241936} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">ROWAY</span>
            </label>
          </div>
        </div>
        <div className="stardust-dropdown folding-items__toggle">
          <div className="stardust-dropdown__item-header">
            <div className="shopee-filter-group__toggle-btn">
              Thêm
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-down">
                <g>
                  <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="stardust-dropdown__item-body">
            <div className="folding-items__folded-items">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={3020933} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">PT Jewelry &amp; Accessories</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={2352745} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">NOCTURNAL</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={3487506} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">L66 Studio</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1664281} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">City Cycle</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1063818} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">AVIANO</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1253300} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">LEVENTS</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1255588} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">GUZADO</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1258193} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">ATINO</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={3682733} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">1HAND OFFICIAL</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1077247} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">TSIMPLE</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1237600} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">POLOMAN</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1250589} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Teelab</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={1544544} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">BẢO ĐĂNG</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={2006352} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">JBAGY</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={2871730} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">VESCA</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={3364901} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Newseven</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="shopee-filter-group shopee-price-range-filter shopee-price-range-filter--vn">
        <div className="shopee-filter-group__header shopee-price-range-filter__header">Khoảng Giá</div>
        <div className="shopee-filter-group__body shopee-price-range-filter__edit">
          <div className="shopee-price-range-filter__inputs">
            <input type="text" maxLength={13} className="shopee-price-range-filter__input pr-[5px]" placeholder="₫ TỪ" defaultValue="" />
            <div className="shopee-price-range-filter__range-line" />
            <input type="text" maxLength={13} className="shopee-price-range-filter__input  pr-[5px]" placeholder="₫ ĐẾN" defaultValue="" />
          </div>
        </div>
        <button className="shopee-button-solid shopee-button-solid--primary pjfrv0" style={{ backgroundColor: 'rgb(238, 77, 45)' }}>
          Áp dụng
        </button>
      </div>
      <div className="shopee-filter-group">
        <div className="shopee-filter-group__header">Loại Shop</div>
        <div className="folding-items shopeee-filter-group__body folding-items--folded">
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue={5} />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Shopee Mall</span>
              </label>
            </div>
          </div>
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue={7} />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Shop Yêu thích</span>
              </label>
            </div>
          </div>
          <div className="shopee-filter shopee-checkbox-filter">
            <div className="shopee-checkbox">
              <label className="shopee-checkbox__control">
                <input type="checkbox" name="" defaultValue={6} />
                <div className="shopee-checkbox__box">
                  <i> </i>
                </div>
                <span className="shopee-checkbox__label">Shop Yêu Thích +</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="shopee-filter-group">
      <div className="shopee-filter-group__header">Tình Trạng</div>
      <div className="folding-items shopeee-filter-group__body folding-items--folded">
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={9} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Đã sử dụng</span>
            </label>
          </div>
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={8} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Mới</span>
            </label>
          </div>
        </div>
      </div>
    </div> */}

      <div className="shopee-filter-group _7mRKuV">
        <div className="shopee-filter-group__header">Đánh Giá</div>
        <div className="folding-items shopeee-filter-group__body folding-items--folded">
          <div className="yWpOcK">
            <div className="rating-stars__container">
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="yWpOcK">
            <div className="rating-stars__container">
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
            </div>{' '}
            trở lên
          </div>
          <div className="yWpOcK">
            <div className="rating-stars__container">
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
            </div>{' '}
            trở lên
          </div>
          <div className="yWpOcK">
            <div className="rating-stars__container">
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
            </div>{' '}
            trở lên
          </div>
          <div className="yWpOcK">
            <div className="rating-stars__container">
              <svg viewBox="0 0 9.5 8" className="shopee-svg-icon rating-stars__star icon-rating-colored">
                <defs>
                  <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#ffca11" />
                    <stop offset={1} stopColor="#ffad27" />
                  </linearGradient>
                  <polygon
                    id="ratingStar"
                    points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                  />
                </defs>
                <g fill="url(#ratingStarGradient)" fillRule="evenodd" stroke="none" strokeWidth={1}>
                  <g transform="translate(-876 -1270)">
                    <g transform="translate(155 992)">
                      <g transform="translate(600 29)">
                        <g transform="translate(10 239)">
                          <g transform="translate(101 10)">
                            <use stroke="#ffa727" strokeWidth=".5" xlinkHref="#ratingStar" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
              <div className="rating-stars__star t+VulT" style={{ width: 14, height: 14 }}>
                <svg viewBox="0 0 30 30" className="o6bbxW">
                  <defs>
                    <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                      <stop offset="0%" stopColor="#FFD211" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="none"
                    fillRule="evenodd"
                    stroke="url(#star__hollow)"
                    strokeWidth={2}
                    d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
                  />
                </svg>
                <svg viewBox="0 0 30 30" className="o6bbxW" style={{ width: '0%' }}>
                  <defs>
                    <linearGradient id="star__solid" x1="50%" x2="50%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFCA11" />
                      <stop offset="100%" stopColor="#FFAD27" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#star__solid)"
                    fillRule="evenodd"
                    d="M14.9988798 25.032153l-8.522024 4.7551739c-.4785069.2670004-.7939037.0347448-.7072938-.5012115l1.6339124-10.1109185-6.8944622-7.1327607c-.3871203-.4005006-.2499178-.7947292.2865507-.8774654l9.5090982-1.46652789L14.5740199.51703028c.2346436-.50460972.6146928-.50543408.8497197 0l4.2693588 9.18141263 9.5090986 1.46652789c.545377.0841102.680337.4700675.28655.8774654l-6.894462 7.1327607 1.633912 10.1109185c.08788.5438118-.232337.7662309-.707293.5012115l-8.5220242-4.7551739z"
                  />
                </svg>
              </div>
            </div>{' '}
            trở lên
          </div>
        </div>
      </div>
      {/* <div className="shopee-filter-group">
      <div className="shopee-filter-group__header">Dịch Vụ &amp; Khuyến Mãi</div>
      <div className="folding-items shopeee-filter-group__body folding-items--folded">
        <div>
          <div style={{ height: 1 }} />
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={10} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Đang giảm giá</span>
            </label>
          </div>
        </div>
        <div>
          <div style={{ height: 1 }} />
        </div>
        <div className="shopee-filter shopee-checkbox-filter">
          <div className="shopee-checkbox">
            <label className="shopee-checkbox__control">
              <input type="checkbox" name="" defaultValue={15} />
              <div className="shopee-checkbox__box">
                <i> </i>
              </div>
              <span className="shopee-checkbox__label">Gì Cũng Rẻ</span>
            </label>
          </div>
        </div>
        <div className="stardust-dropdown folding-items__toggle">
          <div className="stardust-dropdown__item-header">
            <div className="shopee-filter-group__toggle-btn">
              Thêm
              <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x={0} y={0} className="shopee-svg-icon icon-arrow-down">
                <g>
                  <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="stardust-dropdown__item-body">
            <div className="folding-items__folded-items">
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={12} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Hàng có sẵn</span>
                  </label>
                </div>
              </div>
              <div className="shopee-filter shopee-checkbox-filter">
                <div className="shopee-checkbox">
                  <label className="shopee-checkbox__control">
                    <input type="checkbox" name="" defaultValue={14} />
                    <div className="shopee-checkbox__box">
                      <i> </i>
                    </div>
                    <span className="shopee-checkbox__label">Mua giá bán buôn/ bán sỉ</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <button className="shopee-button-solid shopee-button-solid--primary D9zOq+" style={{ backgroundColor: 'rgb(238, 77, 45)' }}>
        Xóa tất cả
      </button>
    </div>
  );
}
export default memo(SearchFilter);
