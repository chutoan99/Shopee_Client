//? LIBRARY
import './style/auth.css';
import IMG from '../../../public/assets/imgs';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
//? APPS
import { Footer } from '../../containers';
import { Toaster } from 'react-hot-toast';

export default function AuthALayout({ children }: any) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [heading, setHeading] = useState('');
  useEffect(() => {
    switch (pathname) {
      case '/register':
        setHeading('Đăng Ký');
        break;
      case '/forgotPassword':
        setHeading('Xác minh tài khoản');
        break;
      case '/login':
        setHeading('Đăng Nhập');
        break;
      default:
        setHeading('Cập nhật mật khẩu');
        break;
    }
  }, [pathname]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="grid wide">
        <header>
          <div className="header_login">
            <div className="header_login-logo mob:pt-[10px]">
              <img src={IMG.LOGO2} alt="logo" onClick={() => navigate('/')} />
              <span>{heading}</span>
            </div>
            <div className="header_login-logo-helps">
              <NavLink to="# ">Bạn cầu giúp đỡ?</NavLink>
            </div>
          </div>
        </header>
      </div>
      <div className="modals">
        <div className="modal__body">
          <div className="modals-logo-shoppe hide-on-table-488 Hide-on-mobile">
            <img src={IMG.LOGO} alt="logo"></img>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
