//? LIBRARY

import { memo, useState } from 'react';
//? APPS

import { ProductList, Pagination } from '../../containers';
import { useGetProductsQuery } from '../../services/post/index.hook';
import { Loading } from '../../components';

function Daily() {
  const [payload, setPayload] = useState({
    limit: 96,
    page: 1,
  });
  const { data, isLoading } = useGetProductsQuery(payload);

  return (
    <div className="bg-[#f5f5f5] overflow-hidden mt-[120px]">
      <div className="grid wide">
        <div className="row sm-gutter">
          <div className="col l-12 mo-12 c-12">
            <div className="flex h-[3.5rem] my-[50px] relative">
              <h1 className=" text-xl leading-none tracking-[0.01em] select-none cursor-default absolute -translate-x-2/4 font-medium text-[#fff] inline-block bg-[#ee4d2d] z-[1] capitalize m-auto px-5 py-[1.125rem] rounded-[0.625rem] left-2/4">
                Tất cả
              </h1>
              <hr
                style={{ display: 'flex' }}
                className="absolute w-full m-0 border-t-[rgba(0,0,0,0.5)] border-t border-dotted left-0 top-2/4"
              />
            </div>
            <ProductList items={data?.response || []} col={'col l-2 mo-4 c-6'} loading={isLoading} />
            {isLoading ? <Loading /> : <Pagination setPayload={setPayload} totalPage={data?.totalPage} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Daily);
