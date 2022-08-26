import "./Item.css";

import React from "react";

export default function Item(props) {
  const classCheked = props.checked ? "disabled" : "active";
  return (
    <div>
      <div
        className={classCheked}
        onClick={props.onClick}
      >
        {props.text}
      </div>
    </div>
  );
}
