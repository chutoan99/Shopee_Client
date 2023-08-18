//? LIBRARY
import './style/home_Filter.css';
import ICON from '../../../public/assets/icons';
import { NavLink } from 'react-router-dom';

interface HomeFilterModel {
  filterDay: number;
  filterMonth: number;
  onBack: any;
  onNext: any;
}
function HomeFilter({ filterDay, filterMonth, onBack, onNext }: HomeFilterModel) {
  return (
    <div className="mt-[20px] mb-[10px] flex items-center Hide-on-table Hide-on-mobile gap-[10px]">
      <div className="flex  items-center gap-[10px]">
        <span className="text-[0.875rem] text-[#555] font-normal mr-[12px]">Sắp xếp theo</span>
        <button className="btn btn--prinary min-w-[90px]">Phổ biến</button>
        <button className="btn bg-white min-w-[90px]">Mới nhất</button>
        <button className="btn bg-white min-w-[90px]">Bán chạy</button>
      </div>
      <div className="Select-input">
        <span className="Select-input-label">Giá</span>
        <span className="Select-input-icon">{ICON.ANGEL_DOWN}</span>
        <ul className="Select-input-list">
          <li className="Select-input-item">
            <NavLink to="# " className="Select-input-link">
              Giá thấp đến cao
            </NavLink>
          </li>
          <li className="Select-input-item">
            <NavLink to="# " className="Select-input-link">
              Giá cao đến thấp
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Home-filter__page">
        <span className="Home-filter__page-num">
          <span className="Home-filter__page-num-current">Ngày {filterDay}</span> / Tháng {filterMonth}
        </span>
      </div>
      <div className="Home-filter-page-control">
        <span onClick={onBack} className="Home-filter__page-icon Home-filter__page-btn Home-filter__page-disabled">
          {ICON.ANGEL_LEFT}
        </span>
        <span onClick={onNext} className="Home-filter__page-icon Home-filter__page-btn">
          {ICON.ANGEL_RIGHT}
        </span>
      </div>
    </div>
  );
}
export default HomeFilter;
