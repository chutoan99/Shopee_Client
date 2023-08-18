import IMG from '../../../public/assets/imgs';
import ICON from '../../../public/assets/icons';
import { memo, useEffect, useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { HeaderNotify } from '../../components';
import { useGetNotificationQuery } from '../../services/notification/index.hook';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppDispatch, RootState } from '../../app/store';
import { ApiLogout } from '../../services/auth/index.service';
import toast from 'react-hot-toast';
import { ALERT_LOGOUT_SUCCESS } from '../../constants/msg';
import Loading from '../../components/loading';
import { UserActions } from '../../redux/userSlice';

function HeaderNavbar() {
  const dispatch: AppDispatch = useAppDispatch();
  const navigate = useNavigate();
  const [totalNotify, setTotalNotify] = useState(0);
  const { data: dataUser, isLogin } = useAppSelector((state: RootState) => state.user);
  const { data: dataNotification, isLoading: isLoadingNotification } = useGetNotificationQuery();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTotalNotify(dataNotification?.response?.length || 0);
  }, [dataNotification]);

  const handleOpenNewTab = () => {
    window.open('https://shopee-admin.vercel.app', '_blank');
  };

  const onLogout = async () => {
    setLoading(true);
    try {
      const response = await ApiLogout();
      if (response.err === 0) {
        toast.success(ALERT_LOGOUT_SUCCESS);
        localStorage.remove('token-shopee');
      } else {
        toast.error(response.msg);
      }
    } catch (error: any) {
      toast.error(error.msg);
    } finally {
      setLoading(false);
      setTimeout(() => {
        navigate('./login');
      }, 2000);
      dispatch(UserActions.updateUser({ data: null, isLogin: false }));
    }
  };

  return (
    <>
      {loading && <Loading />}
      <nav className="Header__navbar Hide-on-mobile">
        <ul className="Heder__navbar--list">
          <li className="Header__nav--item Header__nav-item--has--QR Header__nav--separater hide-on-table-middle">
            <span onClick={handleOpenNewTab}>Kênh người bán</span>
            <div className="Header__qr">
              <img className="Header__qr--img" src={IMG.QRCODE} alt="qR" />
              <div className="Heder__qr--app">
                <NavLink to="https://shopee.vn/web" className="Header__qr-link">
                  <img className="Header__qr--dowload--img" src={IMG.GOOGLE} alt="Google" />
                </NavLink>
                <NavLink to="https://shopee.vn/web" className="Header__qr-link">
                  <img className="Header__qr--dowload--img" src={IMG.APPSTORE} alt="App store" />
                </NavLink>
              </div>
            </div>
          </li>
          <li className="Header__nav--item">
            <span className="Header_nav-title--no-poiter"> Kết nối</span>
            <NavLink to="https://www.facebook.com/ShopeeVN" className="Header__navbar--icon-link">
              <span className="Header__nav--icon">{ICON.FACE}</span>
            </NavLink>
            <NavLink to="https://www.instagram.com/Shopee_VN/" className="Header__navbar--icon-link">
              <span className="Header__nav--icon">{ICON.INSTAGRAM}</span>
            </NavLink>
          </li>
        </ul>
        <ul className="Heder__navbar--list">
          <li className="Header__nav--item Header__nav--item-has-notify">
            <NavLink to="# " className="Header__nav--item--link hover:text-white">
              <div className="Header__navbar--icon-link ">
                <span className="Header__nav--icon">{ICON.BELL}</span>
              </div>
              <span className="Header-cart-notify-icon">{totalNotify}</span>
              Thông báo
            </NavLink>
            {!isLoadingNotification && <HeaderNotify data={dataNotification?.response || []} />}
          </li>
          <li className="Header__nav--item">
            <NavLink to="https://help.shopee.vn/portal" className="Header__nav--item--link">
              <NavLink to="https://help.shopee.vn/portal" className="Header__navbar--icon-link">
                <span className="Header__nav--icon">{ICON.CIRCLE_QUESTION}</span>
              </NavLink>
              Trợ giúp
            </NavLink>
          </li>
          {isLogin ? (
            <li className="Header__nav--item Header__nav-user">
              <img className="Header__nav-item Header__nav-user-img" src={dataUser?.avatar} alt="UserImg" />
              <span className="Header__nav-name">{dataUser?.name}</span>
              <ul className="Header__nav-user-menu py-[10px]">
                <li className="Header__nav-user-item mb-[5px]">
                  <NavLink to="/user/profile">
                    <span>Tài khoản của tôi</span>
                  </NavLink>
                </li>
                <li className="Header__nav-user-item mb-[5px]">
                  <NavLink to="/user/purchase">
                    <span>Đơn mua</span>
                  </NavLink>
                </li>
                <li className="Header__nav-user-item Header__nav-user-item--separate">
                  <span onClick={onLogout}>Đăng xuất</span>
                </li>
              </ul>
            </li>
          ) : (
            <>
              <div>
                <li className="Header__nav--item Header__nav--separater">
                  <Link to="/register" className="Header__nav--item--link Header__nav--item--strong">
                    Đăng ký
                  </Link>
                </li>
              </div>
              <div>
                <li className="Header__nav--item">
                  <Link to="/login" className="Header__nav--item--link Header__nav--item--strong">
                    Đăng nhập
                  </Link>
                </li>
              </div>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
export default memo(HeaderNavbar);
