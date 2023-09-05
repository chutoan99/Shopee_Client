import IMG from '../../../public/assets/imgs';
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
          <li className=" relative min-h-[26px] no-underline text-sm font-light text-[white] items-center flex mx-2 my-0">
            <span className="cursor-text"> Kết nối</span>
            <NavLink to="https://www.facebook.com/ShopeeVN" className="items-center flex text-[white] no-underline">
              <span className="text-lg mx-1 my-0">
                <i className="fa-brands fa-facebook-square"></i>
              </span>
            </NavLink>
            <NavLink to="https://www.instagram.com/Shopee_VN/" className="items-center flex text-[white] no-underline">
              <span className="text-lg mx-1 my-0">
                <i className="fa-brands fa-instagram-square"></i>
              </span>
            </NavLink>
          </li>
        </ul>
        <ul className="Heder__navbar--list">
          <li className="Header__nav--item Header__nav--item-has-notify">
            <NavLink to="# " className="Header__nav--item--link hover:text-white">
              <div className="text-[white] no-underline items-center flex ">
                <span className="text-lg mx-1 my-0">
                  <i className="far fa-bell"></i>
                </span>
              </div>
              <span className="Header-cart-notify-icon">{totalNotify}</span>
              Thông báo
            </NavLink>
            {!isLoadingNotification && <HeaderNotify data={dataNotification?.response || []} />}
          </li>
          <li className="Header__nav--item">
            <NavLink to="https://help.shopee.vn/portal" className="Header__nav--item--link">
              <NavLink to="https://help.shopee.vn/portal" className="text-[white] no-underline items-center flex">
                <span className="text-lg mx-1 my-0">
                  <i className="fa-solid fa-circle-question"></i>
                </span>
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
                <li className="no-underline text-sm font-light text-[white] relative min-h-[26px] items-center flex mx-2 my-0  after:content-[''] after:absolute after:h-3 after:-translate-y-2/4 after:border-l-[#fb9086] after:border-l after:border-solid after:-right-2.5 after:top-2/4">
                  <Link to="/register" className=" no-underline text-sm text-white items-center flex font-normal leading-[2.125rem]">
                    Đăng ký
                  </Link>
                </li>
              </div>
              <div>
                <li className="no-underline text-sm font-light text-[white] relative min-h-[26px] items-center flex mx-2 my-0">
                  <Link to="/login" className=" no-underline text-sm text-white items-center flex font-normal leading-[2.125rem]">
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
