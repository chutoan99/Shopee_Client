//? LIBRARY
function loginFacebook() {
  return (
    <button
      className="box-border h-[34px] overflow-hidden text-ellipsis text-sm capitalize leading-[1.6rem] text-[#fff] no-underline bg-[rgb(58_90_152_/_1)] px-1.5 py-0 rounded-sm border-0 hover:bg-[rgb(58_90_152_/_0.8)] hover:text-[#fff] cursor-pointer"
      disabled
    >
      <span className="text-lg leading-7">
        <i className="fa-brands fa-facebook-square"></i>
      </span>
      <span className="text-[0.9rem] px-[15px]">Đăng nhập với Facebook</span>
    </button>
  );
}
export default loginFacebook;
