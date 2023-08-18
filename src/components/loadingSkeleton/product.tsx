import { LoadingSkeleton } from '../index';

function SkeletonProduct({ isLoading }: { isLoading: boolean }) {
  return (
    <>
      {isLoading && (
        <div className="Home-product">
          <div className="row sm-gutter">
            {Array(48)
              .fill(0)
              .map((_, index: number) => (
                <div className="col l-2 mo-4 c-6" key={index}>
                  <div className="Home-product-item">
                    <div className="Home-product-item_img w-full" style={{ height: '191px' }}>
                      <LoadingSkeleton className="w-full  mb-[5px] Home-product-item_img h-full"></LoadingSkeleton>
                    </div>
                    <div className="Home-product-item-name" style={{ height: '36px' }}>
                      <LoadingSkeleton className="w-full mb-1 h-9 Home-product-item-name"></LoadingSkeleton>
                    </div>
                    <div className="Home-product-item-name" style={{ height: '36px', marginTop: 'unset' }}>
                      <LoadingSkeleton className="w-full mb-1 h-9 Home-product-item-name"></LoadingSkeleton>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
export default SkeletonProduct;
