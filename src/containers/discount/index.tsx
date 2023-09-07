//? LIBRARY
import { memo } from 'react';
//? APPS
import { BatchList } from '../../types/batchList';
import { useGetBatchListQuery } from '../../services/batchList/index.hook';
function Discount() {
  const { data, isLoading } = useGetBatchListQuery();
  return (
    <div className="col l-12 mo-12 c-12">
      {!isLoading && (
        <div className="bg-[#fff] px-[0.625rem] py-[1.25rem] min-h-[100px] h-[130px]">
          <div className="flex justify-around gap-[10px]">
            {data?.response?.map((item: BatchList, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-y-[5px] items-center h-20 cursor-pointer transition-all duration-500 w-[10%]">
                  <img src={item.banner_image} className="w-[40%]" alt="{discount.title}" />
                  <div
                    className="text-[.8125rem] text-center text-[rgba(0, 0, 0, 0.8)] no-underline leading-[0.781rem] overflow-hidden"
                    style={{
                      wordBreak: 'break-word',
                      display: '-webkit-box',
                      textOverflow: 'ellipsis',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                    }}
                  >
                    <h4>{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default memo(Discount);
