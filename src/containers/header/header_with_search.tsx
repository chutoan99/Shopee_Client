//? LIBRARY
import ICON from '../../../public/assets/icons';
import { useState, memo } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
//? APPS
import { SearchHistory } from '../../types/searchHistory';
import { LogoShopee, HeaderCart, SuggestList } from '../../components';
import { useGetSearchSuggestionQuery } from '../../services/searchSuggestion/index.hook';
import { useCreateHistorySearchMutation, useGetHistorySearchQuery } from '../../services/searchHistory/index.hook';
import { RootState } from '../../app/store';
import { useAppSelector } from '../../hooks/hooks';
import { useGetCartsQuery } from '../../services/cart/index.hook';

function HeaderWithSearch() {
  const params = useParams();
  const navigate = useNavigate();
  const { total_cart } = useAppSelector((state: RootState) => state.cart);
  const { data: dataCart, isLoading: isLoadingDataCart } = useGetCartsQuery();
  const { data: dataHistorySearch, isLoading: isLoadingHistorySearch, refetch: refetchHistorySearch } = useGetHistorySearchQuery();
  const { data: dataSearchSuggestion, isLoading: isLoadingSearchSuggestion } = useGetSearchSuggestionQuery();
  const [createHistorySearch] = useCreateHistorySearchMutation();
  const [payload, setPayload] = useState({
    text: params.search,
  });

  const onSearch = async () => {
    if (payload.text === '') return;
    await createHistorySearch(payload).unwrap();
    refetchHistorySearch();
    navigate(`/search/${payload.text}`);
  };

  const handleKeyDown = (e: any) => {
    if (payload.text === '') return;
    if (e.code === 'Enter') {
      onSearch();
    }
  };
  return (
    <>
      <div className="grid wide sm-gutter">
        <div className="Header-with-search sm-gutter">
          <LogoShopee />
          <input type="checkbox" hidden id="Mobile-search-checkbox" className="Header__search-checkbox" />
          <div className="w-full flex justify-center">
            <div className="w-[90%]">
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
                    onKeyDown={handleKeyDown}
                  />
                  <div className="Header__search-history">
                    <h3 className="Header__search-history-heading"> Lịch sử tìm kiếm </h3>

                    {!isLoadingHistorySearch && (
                      <ul className="Header__search-history-list">
                        {dataHistorySearch?.response?.map((item: SearchHistory, index: number) => (
                          <li className="Header__search-history-item" key={index}>
                            <NavLink to={`search/${item.text}`}>{item.text}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="Header__search-select">
                  <span className="Header__search-select-label">Trong shop</span>
                  <span className="Header__search-select-icon">{ICON.ANGEL_DOWN}</span>
                  <ul className="Header__search-option">
                    <li className="Header_search-option-item Header_search-option-item-active">
                      <span>Trong Shop</span>
                      {ICON.HEART}
                    </li>
                    <li className="Header_search-option-item">
                      <span>Ngoài Shop</span>
                      {ICON.HEART}
                    </li>
                  </ul>
                </div>
                <button className="Header__search-btn" onClick={onSearch}>
                  <span className="Header__search-btn-icon">{ICON.MAGNIFYING}</span>
                </button>
              </div>
              {!isLoadingSearchSuggestion && <SuggestList data={dataSearchSuggestion?.response || []} />}
            </div>
          </div>
          <HeaderCart data={dataCart?.response || [[]]} loading={isLoadingDataCart} totalCart={total_cart} />
        </div>
      </div>
    </>
  );
}
export default memo(HeaderWithSearch);
