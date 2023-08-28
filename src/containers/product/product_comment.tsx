//? LIBRARY
import IMG from '../../../public/assets/imgs';
import ICON from '../../../public/assets/icons';
import { useEffect, useState } from 'react';
//? APPS
import { Comment } from '../../types/comment';
import { formatTime } from '../../utils/generateTime';
import { generateStart } from '../../utils/generateStart';
import { useParams } from 'react-router-dom';
import { useGetCommentsQuery } from '../../services/comment/index.hook';
import { Rating } from 'react-rainbow-components';

function ProductComment() {
  const params = useParams();
  const [data, setData] = useState<Comment[]>([]);
  const [active, setActive] = useState('fa-solid fa-thumbs-up');
  const { data: dataComments } = useGetCommentsQuery(params);
  const [number, setNumber] = useState(0);
  const handleChangeStatus = () => {
    setActive('fa-solid fa-thumbs-up icons-active');
    setNumber(number + 1);
  };
  useEffect(() => {
    dataComments?.response && setData(dataComments?.response || []);
  }, [dataComments]);

  return (
    <div className="wrapper">
      <div className="productDes_inner">
        <p className="product-comment-heading">ĐÁNH GIÁ SẢN PHẨM</p>
        <div className="product-rating-overview">
          <div className="product-comment-rating">
            <div>
              <span>
                4.9 <label>trên 5</label>
              </span>
            </div>
            <div className="product-items-content-rating-icons">{generateStart(5)}</div>
          </div>
          <div className="product-comment-filter">
            <span className="product-comment-filter-active">Tất Cả</span>
            <span>5 Sao </span>
            <span>4 Sao </span>
            <span>3 Sao </span>
            <span>2 Sao </span>
            <span>1 Sao </span>
            <span>Có Bình Luận</span>
            <span>Có Hình Ảnh/ Video</span>
          </div>
        </div>
        {data?.length > 0 ? (
          data?.map((item: Comment, index: number) => {
            return (
              <div className="product-comment-content" key={index}>
                <div className="product-comment-avatar">
                  <img src={item?.author_portrait} alt="item" />
                </div>
                <div className="product-comment-main">
                  <>
                    <h3>{item?.author_username}</h3>
                    <div>
                      <div className="rainbow-m-around_small flex">
                        <Rating value={item.rating_star} readOnly />
                      </div>
                    </div>
                    <div className="product-items-content-rating-icons"></div>
                    {formatTime(item?.createdAt)}
                    <p>{item?.comment}</p>
                    <CommentItem item={item} />
                    {item?.comment_rep === null ? null : (
                      <div className="comment-main-shop-feedback">
                        <h3>Phản Hồi Của Người Bán</h3>
                        <p>{item?.comment_rep?.comment}</p>
                      </div>
                    )}
                    <div className="shopee-product-rating__actions" onClick={handleChangeStatus}>
                      <i className={active}></i>
                      <label>{number} Hữu Ích?</label>
                    </div>
                  </>
                </div>
              </div>
            );
          })
        ) : (
          <div className="product-comment-empty">
            <div className="product-comment-empty-img">
              <img src={IMG.EMPTY_COMMENT} alt="emptyComment"></img>
            </div>
            <p className="product-comment-empty-des">Chưa Có Bình Luận Nào</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CommentItem({ item }: any) {
  const [ShowImg, setShowImg] = useState(false);
  const [ShowVideo, setShowVideo] = useState(false);

  const [imgActive, setImgActive] = useState('');
  return (
    <div className="comment-rating">
      <div className="w-full">
        <div className="comment-rating">
          {item?.cover && (
            <div
              className="comment-video"
              onClick={() => {
                if (ShowImg) {
                  setShowImg(false);
                }
                setShowVideo(true);
              }}
              onDoubleClick={() => setShowVideo(false)}
            >
              {ICON.VIDEO}
              <img src={item?.cover} alt="" />
            </div>
          )}

          {item?.images?.map((img: any, index_img: any) => {
            return (
              <div className="comment-rating-img" key={index_img} onClick={() => setImgActive(item?.images[index_img])}>
                <img
                  src={img}
                  alt="item"
                  onClick={() => {
                    if (ShowVideo) {
                      setShowVideo(false);
                    }
                    setShowImg(true);
                  }}
                  onDoubleClick={() => setShowImg(false)}
                />
              </div>
            );
          })}
        </div>
        {ShowVideo && (
          <div className="comment-rating-img-video">
            <video src={item?.videos} controls autoPlay />
          </div>
        )}
        {ShowImg && item?.images && (
          <div className="comment-rating-show-img">
            <img src={imgActive} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductComment;
