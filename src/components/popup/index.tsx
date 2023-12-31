//? LIBRARY
import { useEffect, useState } from 'react';
//? APPS
import { OverPlay } from '../index';

export default function Popup() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 20000);
  }, []);

  const handelClose = () => {
    setTimeout(() => {
      setPopup(false);
    }, 500);
  };
  return (
    <>
      {popup ? (
        <OverPlay handelClose={handelClose}>
          <img
            src="/assets/Img/banner.png"
            alt="popup"
            className="h-[100%] relative animate-[myAnim_0.8s_cubic-bezier(0.7,0,0.84,0)_0s_1_normal_forwards]"
          />
          <span
            className="absolute content-[''] justify-center items-center flex h-[40px] w-[40px] animate-[myAnim2_2s_cubic-bezier(0.11,0,0.5,0)_0s_1_alternate_forwards] rounded-[50%] right-[0%] -top-2.5 "
            style={{ backgroundColor: 'rgb(239, 239, 239)' }}
            onClick={handelClose}
          >
            <i className="fa-solid fa-x text-[1rem] text-[rgba(0, 0, 0, 0.5)]"></i>
          </span>
        </OverPlay>
      ) : null}
    </>
  );
}
Popup;
