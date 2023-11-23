import React from "react";
import Popup from "reactjs-popup";
import "./PopupContact.scss";
import useWindowSize from "../../CustomHook";

const PopupContact = () => {
  const windowSize = useWindowSize();

  return (
    <Popup trigger={<button>Send</button>} modal nested>
      {(close) => (
        <div
          className={`modal nes-container is-rounded  ${
            windowSize <= 768 ? "mobile" : ""
          }`}
        >
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="msg-container">
            <p>Message envoyé</p>
            <div className="i-container">
              <i className="item-2 fa-regular fa-envelope"></i>
              <i className="item-3 fa-solid fa-envelope"></i>
            </div>
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PopupContact;
