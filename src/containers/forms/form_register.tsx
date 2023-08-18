//? LIBRARY
import { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//? APPS
import { validateRegister } from '../../utils/validate';
import { Loading, LoginFaceBook, LoginGoogle } from '../../components';
import { useMutationRegister } from '../../services/auth/index.hook';

function RegisterForm() {
  const [validationMsg, setValidationMsg] = useState<any>({});
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passWordRegister, SetPassWordRegister] = useState('');
  const [payload, setPayload] = useState({
    name: nameRegister,
    password: passWordRegister,
    email: emailRegister,
  });

  const { refetch, loading } = useMutationRegister(payload);

  useEffect(() => {
    setPayload(() => {
      return {
        name: nameRegister,
        password: passWordRegister,
        email: emailRegister,
      };
    });
  }, [nameRegister, passWordRegister, emailRegister]);

  const onRegister = async () => {
    const isValid = await validateRegister(nameRegister, emailRegister, passWordRegister, setValidationMsg);
    if (!isValid) return;
    refetch();
  };

  const handelKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onRegister();
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="auth-form">
        <div className="auth-form__container">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">Đăng Ký</h3>
            <NavLink to="/login" className="auth-form__switch-btn">
              Đăng Nhập
            </NavLink>
          </div>
          <div className="auth-form__form">
            <div className="auth-form__group">
              <input
                value={nameRegister}
                onChange={(e) => setNameRegister(e.target.value)}
                type="text"
                required
                placeholder="Tên của bạn"
                className="auth-form__input"
                onKeyDown={handelKeyDown}
              />
              <span className="text-[#ee4d2d] text-xs ml-[15px]">{validationMsg.nameRegister}</span>
            </div>
            <div className="auth-form__group">
              <input
                value={emailRegister}
                onChange={(e) => setEmailRegister(e.target.value)}
                type="text"
                placeholder="Email của bạn"
                className="auth-form__input"
                onKeyDown={handelKeyDown}
              />
              <span className="text-[#ee4d2d] text-xs ml-[15px]">{validationMsg.emailRegister}</span>
            </div>
            <div className="auth-form__group">
              <input
                value={passWordRegister}
                onChange={(e) => SetPassWordRegister(e.target.value)}
                type="password"
                placeholder="Mật khẩu của bạn"
                className="auth-form__input"
                onKeyDown={handelKeyDown}
              />
              <span className="text-[#ee4d2d] text-xs ml-[15px]">{validationMsg.passWordRegister}</span>
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
            <button className="btn btn--prinary" onClick={onRegister}>
              ĐĂNG KÝ
            </button>
          </div>
        </div>
        <div className="auth-form__socials">
          <div className="auth-form__socials">
            <LoginFaceBook />
            <LoginGoogle />
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(RegisterForm);
