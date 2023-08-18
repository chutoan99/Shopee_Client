//? LIBRARY
import { memo } from 'react';

//? APPS
import { useParams } from 'react-router-dom';
import { Loading2 } from '../../components';
import { ProductList, ShopPageInfo } from '../../containers';
import { useGetItemsShopQuery, useGetShopIdQuery } from '../../services/shop/index.hook';
function Shop() {
  const params = useParams();
  const { data: dataInfoShop } = useGetShopIdQuery(params);
  const { data: dataItemsShop, isLoading: loadingQueyItemsShop } = useGetItemsShopQuery(params);

  return (
    <>
      {loadingQueyItemsShop ? (
        <Loading2 />
      ) : (
        <>
          {dataInfoShop?.response && <ShopPageInfo data={dataInfoShop?.response} />}
          <div className="bg-[#f5f5f5] overflow-hidden pb-[50px]">
            <div className="grid wide">
              <div className="row sm-gutter pt-[16px]">
                <ProductList items={dataItemsShop?.response || []} col={'col l-2-4 mo-4 c-6'} loading={loadingQueyItemsShop} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default memo(Shop);
