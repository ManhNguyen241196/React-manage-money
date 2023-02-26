import React from "react";
import "./Card.css";
//  thẻ này để đi gộp các css dùng chung và khi trả vể sẽ là 1 thẻ div có chứa cả css cho thẻ card
// và chứa cả css của thẻ chính.
function Card(props) {
  console.log(props);
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
