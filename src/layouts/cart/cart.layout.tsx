//? LIBRARY
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//? APPS
import { LogoShopee, Loading, HeaderNavbar } from '../../components';
import { useGetCartsQuery } from '../../modules/cart/hook';
import { useCreateHistorySearchMutation } from '../../modules/searchHistory/hook';

export default function CartLayout({ children }: any) {
  const params = useParams();
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    text: params.search,
  });
  const [createHistorySearch] = useCreateHistorySearchMutation();
  const { isLoading } = useGetCartsQuery();
  const onSearch = async () => {
    if (payload.text === '') return;
    createHistorySearch(payload).unwrap();
    navigate(`/search/${payload.text}`);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Toaster position="top-right" reverseOrder={false} />
      <header className="h-[120px] bg-[linear-gradient(0,#fe6433,#f53e2d)] fixed z-10 top-0 inset-x-0">
        <div className="grid wide">
          <HeaderNavbar></HeaderNavbar>
          <div className="h-[82px] flex gap-[5px] items-center px-2  sm-gutter">
            <LogoShopee />
            <div className="bg-[#fff] h-10 flex items-center mt-[15px] rounded-sm w-full">
              <div className="flex-1 h-full relative group" id="header_search">
                <input
                  type="text"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                  className="header_input w-full h-full text-sm text-[#333] px-3 py-0 rounded-[3px] border-[none] focus:border-none focus:outline-none"
                  value={payload.text}
                  onChange={(e) =>
                    setPayload((prev: any) => {
                      return {
                        text: e.target.value,
                      };
                    })
                  }
                />
              </div>
              <button className="h-[34px] w-[60px] bg-[#ee4d2d] mr-[3px] rounded-[3px] border-[none]" onClick={onSearch}>
                <span className="text-[0.875rem] text-[#fff]">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
