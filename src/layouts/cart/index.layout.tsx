//? LIBRARY
import ICON from '../../../public/assets/icons';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//? APPS
import { LogoShopee } from '../../components';
import { HeaderNavbar } from '../../containers';
import Loading from '../../components/loading';
import { useCreateHistorySearchMutation } from '../../services/searchHistory/index.hook';
import { useGetCartsQuery } from '../../services/cart/index.hook';

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
      <header className="Header">
        <div className="grid wide">
          <HeaderNavbar></HeaderNavbar>
          <div className="Header-with-search sm-gutter">
            <LogoShopee />
            <div className="Header__search">
              <div className="Header__search-input-wrap">
                <input
                  value={payload.text}
                  onChange={(e) =>
                    setPayload((prev: any) => {
                      return {
                        text: e.target.value,
                      };
                    })
                  }
                  type="text"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                  className="Header_search-input"
                />
              </div>
              <button className="Header__search-btn" onClick={onSearch}>
                <span className="Header__search-btn-icon">{ICON.MAGNIFYING}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
