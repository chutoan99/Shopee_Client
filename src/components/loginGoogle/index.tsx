//? LIBRARY
import ICON from '../../../public/assets/icons';
function loginGoogle() {
  return (
    <button disabled className="auth-form__socials--google  btn--size-s btn--with-icon hover:bg-white">
      <span className="auth-form__socials--google auth-form__socials-icon">{ICON.GOOGLE}</span>
      <span className="auth-form__socials-title">Đăng Nhập với google</span>
    </button>
  );
}
export default loginGoogle;
