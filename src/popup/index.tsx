import React from "react";
import "./style.scss";

export default function PopupDetail(props: any) {
  return (
    props.popup == true && (
      <div className="popupDetail fixed z-40">
        <div className="over-lay absolute" onClick={props.handlePopup}></div>
        <div className="popup-wrapper z-50 absolute overflow-y-scroll pb-5">
          <div
            className="closeBtn text-2xl flex items-center justify-end font-semibold gap-3 px-4 py-2"
            onClick={props.handlePopup}
          >
            <span className="text-3xl">X</span> Close{" "}
          </div>
          {props.children}
        </div>
      </div>
    )
  );
}
