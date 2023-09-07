//? LIBRARY
import { useEffect, memo, useState } from 'react';
import { useParams } from 'react-router-dom';
//? APPS
import { SearchEmpty, SortBars, Loading } from '../../components';
import { Pagination, ProductList, SearchFilter } from '../../containers';
import { useSearchCategoriesQuery } from '../../services/post/index.hook';

function Categories() {
  const params = useParams();
  const [totalPage, setTotalPage] = useState(10);
  const [payload, setPayload] = useState({
    params: params,
    limit: 50,
    page: 1,
  });
  const { data, isLoading } = useSearchCategoriesQuery(payload);

  useEffect(() => {
    data?.totalPage && setTotalPage(data?.totalPage);
  }, [payload, data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data?.response?.rows?.length === 0 ? (
            <SearchEmpty />
          ) : (
            <div className="row sm-gutter pt-[30px]">
              <div className="col l-2 col-smo-3 c-3">
                <SearchFilter />
              </div>
              <div className="col l-10">
                <div className="padding-search mob:pt-[50px] mob:hidden block"></div>
                <SortBars />
                <ProductList items={data?.response.rows || []} col={'col l-2-4 mo-4 c-6'} loading={isLoading} />
                <Pagination setPayload={setPayload} totalPage={totalPage} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
export default memo(Categories);
