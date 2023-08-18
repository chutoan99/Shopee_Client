//? LIBRARY
import { useState, memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//? APPS
import { validateLogin } from '../../utils/validate';
import { useMutationLogin } from '../../services/auth/index.hook';
import { Loading, LoginFaceBook, LoginGoogle } from '../../components';

function LoginForm() {
  const [emailLogin, setEmailLogin] = useState('');
  const [passWordLogin, SetPassWordLogin] = useState('');
  const [validationMsg, setValidationMsg] = useState<any>({});
  const [payload, setPayload] = useState({
    email: emailLogin,
    password: passWordLogin,
  });
  const { loading, refetch } = useMutationLogin(payload);

  useEffect(() => {
    setPayload(() => {
      return {
        email: emailLogin,
        password: passWordLogin,
      };
    });
  }, [emailLogin, passWordLogin]);

  const onLogin = async () => {
    const isValid = await validateLogin(emailLogin, passWordLogin, setValidationMsg);
    if (!isValid) return;
    refetch();
  };

  const handelKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onLogin();
    }
  };
  return (
    <>
      {loading && <Loading />}
      <div className="auth-form">
        <div className="auth-form__container">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">Đăng Nhập</h3>
            <NavLink to="/register" className="auth-form__switch-btn">
              Đăng Ký
            </NavLink>
          </div>
          <div className="auth-form__form">
            <div className="auth-form__group">
              <input
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
                type="text"
                placeholder="Email của bạn"
                className="auth-form__input"
                onKeyDown={handelKeyDown}
              />
              <span className="text-[#ee4d2d] text-xs ml-[15px]">{validationMsg.emailLogin}</span>
            </div>
            <div className="auth-form__group">
              <input
                value={passWordLogin}
                onChange={(e) => SetPassWordLogin(e.target.value)}
                type="password"
                placeholder="Mật khẩu của bạn"
                className="auth-form__input"
                onKeyDown={handelKeyDown}
              />
              <span className="text-[#ee4d2d] text-xs ml-[15px]">{validationMsg.passWordLogin}</span>
            </div>
          </div>
          <div className="auth-form-help">
            <NavLink to="/forgotPassword" className="auth-form__help-link auth-form__help-forgot">
              Quên mật khẩu
            </NavLink>
            <span className="auth-form__help-separate"></span>
            <NavLink to="# " className="auth-form__help-link">
              Cần trợ giúp?
            </NavLink>
          </div>
          <div className="auth-form__controls">
            <NavLink to="/" className="btn auth-form__controls-back btn--normal">
              TRỞ LẠI
            </NavLink>

            <button className="btn btn--prinary" onClick={onLogin}>
              ĐĂNG NHẬP
            </button>
          </div>
        </div>
        <div className="auth-form__socials">
          <LoginFaceBook />
          <LoginGoogle />
        </div>
      </div>
    </>
  );
}
export default memo(LoginForm);
