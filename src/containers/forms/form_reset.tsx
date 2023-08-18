//? LIBRARY
import { useState, memo, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
//? APPS
import { validateResetPassword } from '../../utils/validate';
import { Loading, LoginFaceBook, LoginGoogle } from '../../components';
import { useMutationResetPassWord } from '../../services/auth/index.hook';

function ResetForm() {
  const params = useParams();
  const [passWord, SetPassWord] = useState('');
  const [validationMsg, setValidationMsg] = useState<any>({});
  const [payload, setPayload] = useState({
    token: params.token,
    email: params.email,
    password: passWord,
  });

  const { loading, refetch } = useMutationResetPassWord(payload);

  useEffect(() => {
    setPayload(() => {
      return {
        token: params.token,
        email: params.email,
        password: passWord,
      };
    });
  }, [params, passWord]);

  const onResetPassWord = async () => {
    const isValid = await validateResetPassword(passWord, setValidationMsg);
    if (!isValid) return;
    refetch();
  };
  const handelKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onResetPassWord();
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
                value={passWord}
                onChange={(e) => SetPassWord(e.target.value)}
                type="password"
                placeholder="Mật khẩu mới của bạn"
                className="auth-form__input"
                onKeyDown={handelKeyDown}
              />
              <span className="text-[#ee4d2d] text-xs ml-[15px]">{validationMsg.passWord}</span>
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

            <button className="btn btn--prinary" onClick={onResetPassWord}>
              CẬP NHẬT
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
export default memo(ResetForm);
