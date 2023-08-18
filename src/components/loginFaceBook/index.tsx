//? LIBRARY
import ICON from '../../../public/assets/icons';

function loginFacebook() {
  return (
    <button className="auth-form__socials--facebook  btn--size-s btn--with-icon hover:bg-[#3a5a98] hover:text-white" disabled>
      <span className="auth-form__socials-icon">{ICON.FACEBOOK}</span>
      <span className="auth-form__socials-title">Đăng nhập với Facebook</span>
    </button>
  );
}
export default loginFacebook;
