//? LIBRARY
import { NavLink } from 'react-router-dom';
//? APPS
import { Notification } from '../../types/notifycation';
interface HeaderNotifyModel {
  data: Notification[];
}

function HeaderNotify({ data }: HeaderNotifyModel) {
  return (
    <div
      style={{ border: 'solid 1px rgb(0, 0, 0, 0.1)' }}
      className="group-hover:block w-[404px] absolute bg-[white] hidden cursor-default will-change-[opacity_transform] origin-[(100%-32px)_top] animate-[HeaderNOtifyGrowth_ease-in_0.25s] z-10 rounded-sm  right-0 top-[118%] before:content-[''] before:z-10 before:absolute before:top-[-37px] before:border-solid before:!border-x-[30px] before:!border-y-[20px] before:border-[transparent_transparent_#fff_transparent] before:right-1 after:content-[''] after:z-10 after:block after:absolute after:w-[118px] after:h-[31px] after:right-0 after:-top-4"
    >
      <header className="h-[40px] bg-[#fff]">
        <h3 className="text-[#999] font-normal text-sm leading-10 ml-3 mr-0 my-0"> Thông báo mới nhận </h3>
      </header>
      <ul className="pl-0">
        {data?.map((item: Notification) => {
          return (
            <li className={item.seen ? `flex bg-[#fff]` : `flex bg-[#f7f7f7]`} key={item.id}>
              <NavLink to="# " className="flex no-underline w-full p-3">
                <div>
                  <img src={item.image} alt="logoSale" className="w-12 object-contain" />
                </div>
                <div className="ml-[12px]">
                  <span className="text-[black] text-sm block font-normal leading-[1.125rem]">{item.title}</span>
                  <span className="text-xs block text-[#756f6e] leading-4 mt-1">{item.content}</span>
                </div>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <footer className="text-[black] text-[0.938rem] text-center w-full px-12 py-2">
        <NavLink to="# " className="no-underline font-normal">
          Xem tất cả
        </NavLink>
      </footer>
    </div>
  );
}
export default HeaderNotify;
