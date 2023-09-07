//? LIBRARY
import { NavLink } from 'react-router-dom';
//? APPS
function SortBars() {
  return (
    <ul className="h-[46px] bg-[#fff] flex border border-neutral-200 m-0 pl-0 border-solid mb-[1rem]" style={{ display: 'flex' }}>
      <li className="flex-1">
        <NavLink to="# " className="no-underline text-sm text-[#333] block h-full leading-[46px] text-center relative ">
          Liên quan
        </NavLink>
      </li>
      <li className="flex-1 text-[#ee4d2d]">
        <NavLink
          to="# "
          className="no-underline text-sm text-[#333] block h-full leading-[46px] text-center relative before:content-[''] before:absolute before:-translate-y-2/4 before:h-3/5 before:border-l-[none] before:left-0  before:top-2/4 before:border-l-neutral-200 before:border-l before:border-solid"
        >
          Mới nhất
        </NavLink>
      </li>
      <li className="flex-1">
        <NavLink
          to="# "
          className="no-underline text-sm text-[#333] block h-full leading-[46px] text-center relative before:content-[''] before:absolute before:-translate-y-2/4 before:h-3/5 before:border-l-[none] before:left-0  before:top-2/4 before:border-l-neutral-200 before:border-l before:border-solid"
        >
          Bán chạy
        </NavLink>
      </li>
      <li className="flex-1">
        <NavLink
          to="# "
          className="no-underline text-sm text-[#333] block h-full leading-[46px] text-center relative before:content-[''] before:absolute before:-translate-y-2/4 before:h-3/5 before:border-l-[none] before:left-0  before:top-2/4 before:border-l-neutral-200 before:border-l before:border-solid"
        >
          Giá
        </NavLink>
      </li>
    </ul>
  );
}
export default SortBars;
