import { Rooms } from '../../types/room';
interface interfaceItemChat {
  data: Rooms[] | [];
  des: string;
  setIsChat: any;
  setRoom: any;
}
function ItemChat({ data, des, setIsChat, setRoom }: interfaceItemChat) {
  const OnChangeShop = (room: Rooms) => {
    setIsChat(true);
    setRoom(room);
  };
  return (
    <>
      {data.map((room: Rooms) => (
        <div
          onClick={() => OnChangeShop(room)}
          className="ZSOu4_Ofaf cursor-pointer "
          style={{ height: '56px', width: '100%' }}
          key={room.roomid}
        >
          <div className="A5POhX5QaK">
            <div className="BZhT7Wu45x " style={{ backgroundColor: 'unset' }}>
              <div className="_3sFmo1i0B">
                <div className="flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0">
                  <img src={room?.shop_info?.portrait} className="w-8 h-8 rounded-full" />
                </div>
                <div className="Iy0k3CFNAj"></div>
              </div>
            </div>
          </div>
          <div className="Dcv8CzncwR">
            <div className="w2wVXkKXGr">
              <div className="sWAADuFSbu" title="linlin.studio">
                {room?.shop_info?.username}
              </div>
              {/* <div className="hDW6jxfus9 G3oVgfPncv ">{countMess}</div> */}
            </div>
            <div className="gkrHNrj52G">
              <div className="PMNySQqlyZ">
                <span title="Honey ơi, sản phẩm bạn thích đang giảm mạnh đến 50">{des}</span>
              </div>
              <div className="zJkRJX4szQ">{/* <div className="atSHhfkNYh">{dateOnline}</div> */}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ItemChat;
