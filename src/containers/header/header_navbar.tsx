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
  let line = `before:content-[""] before:h-[0.9375rem] before:w-0 before:absolute before:top-[calc(50%_-_7px)] before:border-x-[hsla(0,0%,100%,0.22)] before:border-l before:border-solid before:border-r before:-left-1.5`;
  return (
    <>
      {loading && <Loading />}
      <nav className="Header__navbar">
        <ul className="Heder__navbar--list">
          <li className="group relative min-h-[26px] no-underline text-sm text-[#fff] font-light items-center flex cursor-pointer mx-2 my-0">
            <span className="group-hover:text-[rgba(255,255,255,0.7)]" onClick={handleOpenNewTab}>
              Kênh người bán
            </span>
            <div className="group-hover:block hidden w-[186px] bg-[white] absolute  animate-[fadeIn_ease-in_0.3s] z-[2] shadow-[0_1px_2px_rgb(0,0,0,0.1)] p-2 rounded-sm left-0 top-[120%] before:content-[''] before:absolute before:w-full before:h-5 before:block before:z-[2] before:left-0 before:-top-4">
              <img className="w-full h-full" src={IMG.QRCODE} alt="qR" />
              <div className="flex justify-between">
                <NavLink to="#" className="ml-[15px]">
                  <img className="h-[15px]" src={IMG.GOOGLE} alt="Google" />
                </NavLink>
                <NavLink to="#" className="mr-[11px]">
                  <img className="h-[15px]" src={IMG.APPSTORE} alt="App store" />
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
