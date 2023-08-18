//? LIBRARY
import { useState, memo, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//? APPS
import { validateForgotPassword } from '../../utils/validate';
import { Loading, LoginFaceBook, LoginGoogle } from '../../components';
import { useMutationForgotPassWord } from '../../services/auth/index.hook';

function ForgotForm() {
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState('');
  const [validationMsg, setValidationMsg] = useState<any>({});
  const [payload, setPayload] = useState({
    email: emailLogin,
  });
  const { loading, refetch } = useMutationForgotPassWord(payload);

  useEffect(() => {
    setPayload(() => {
      return {
        email: emailLogin,
      };
    });
  }, [emailLogin]);

  const onLogin = async () => {
    const isValid = await validateForgotPassword(emailLogin, setValidationMsg);
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
            <span className="auth-form__switch-btn" onClick={() => navigate('/register')}>
              Đăng Ký
            </span>
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
            <button className="btn auth-form__controls-back btn--normal" onClick={() => navigate('/')}>
              TRỞ LẠI
            </button>

            <button className="btn btn--prinary" onClick={onLogin}>
              XÁC NHẬN
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
export default memo(ForgotForm);
