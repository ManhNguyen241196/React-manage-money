import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 1, 28);
  //   const expenseTitle = "Car";
  //   const expenseAmount = 249.67;
  //   console.log(props);
  const [title, setTitle] = useState(props.title); //ddijnh nghiax bieesn nayf
  //là một biến sử dụng trạng thái state

  const clickHandler = () => {
    setTitle("update");
  };

  return (
    <Card className="expense-item" bien="hi">
      {" "}
      {/* // các thứ dk coi là biến nếu nó dk gán giá trị và năm trong thẻ chính. Còn nếu nó nằm giữa
    thẻ mở và thẻ đóng thì coi là children*/}
      {/* // bien khi đưa vào component Card luôn dưới dạng 1 object*/}
      {/* // có thể là 1 khi bao dạng biến bằng 1 giá trị như thông thường hoặc có thể là */}
      {/* //cụm thẻ html. khi đó chúng sẽ được gộp thành 1 array các thẻ html . */}
      <ExpenseDate date={props.date}> </ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> $ {props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change title </button>
    </Card>
  );
}

export default ExpenseItem;
