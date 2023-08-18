//? LIBRARY
import './style/sort-Bar.css';
import { NavLink } from 'react-router-dom';
//? APPS
function SortBars() {
  return (
    <ul className="Header_sort-bars mb-[1rem]">
      <li className="Header_sort-item">
        <NavLink to="# " className="Header_sort-link">
          Liên quan
        </NavLink>
      </li>
      <li className="Header_sort-item Header_sort-item-active">
        <NavLink to="# " className="Header_sort-link ">
          Mới nhất
        </NavLink>
      </li>
      <li className="Header_sort-item">
        <NavLink to="# " className="Header_sort-link">
          Bán chạy
        </NavLink>
      </li>
      <li className="Header_sort-item">
        <NavLink to="# " className="Header_sort-link">
          Giá
        </NavLink>
      </li>
    </ul>
  );
}
export default SortBars;
