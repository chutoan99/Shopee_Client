//? LIBRARY
import { NavLink } from 'react-router-dom';
import svg from '../../../public/assets/svgs';
function LogoShopee() {
  return (
    <NavLink className="Header__logo " to="/">
      <div className="w-full">{svg.LOGOSHOPEE}</div>
    </NavLink>
  );
}
export default LogoShopee;
