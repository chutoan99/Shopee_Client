//? LIBRARY
function loginGoogle() {
  return (
    <button
      className="flex flex-row items-center justify-center bg-[rgb(255_255_255_/_1)] text-[rgb(102_102_102_/_1)] overflow-hidden text-ellipsis text-sm capitalize leading-[1.6rem] box-border h-[34px] px-1.5 py-0 rounded-sm border-0 hover:bg-[rgb(255_255_255_/_0.8)]"
      disabled
    >
      <span className="flex flex-row items-center justify-center bg-[#fff] text-[rgb(102_102_102_/_1)] overflow-hidden text-ellipsis text-sm capitalize leading-[1.6rem] box-border h-[34px] no-underline px-1.5 py-0 rounded-sm border-0">
        <i className="fa-brands fa-google"></i>
      </span>
      <span className="text-[0.9rem] px-[15px]">Đăng Nhập với google</span>
    </button>
  );
}
export default loginGoogle;
