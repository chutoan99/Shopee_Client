//? LIBRARY
import './style/popup.css';
import IMG from '../../../public/assets/imgs';
import ICON from '../../../public/assets/icons';
import { useEffect, useState } from 'react';
//? APPS
import { OverPlay } from '../index';

const Popup = () => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 15000);
  }, []);
  const handelClose = () => {
    setTimeout(() => {
      setPopup(false);
    }, 1500);
  };
  return (
    <>
      {popup ? (
        <OverPlay handelClose={handelClose}>
          <div className=" home-popup__content">
            <img src={IMG.BANNER_IMG} alt="popup" className="w-[70%] h-[100%] relative" id="animation_popup" />
            <span className="popup-close" onClick={handelClose}>
              {ICON.LOSE}
            </span>
          </div>
        </OverPlay>
      ) : null}
    </>
  );
};
export default Popup;
