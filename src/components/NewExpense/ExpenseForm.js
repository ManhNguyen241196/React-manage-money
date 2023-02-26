import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //1. cách tạo ra các array và quản lí các state 1 cách riêng biệt
  // với phương pháp này, mỗi 1 giá trị thay đổi sẽ được gán 1 array state riêng. Do đó việc cập nhật sẽ diễn ra độc
  // độc lập với nhau. Chúng được quản lí hoàn toàn riêng biệt.

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enterInforText, setEnterInforText] = useState("");

  //2. Cách quản lí các state 1 cách tập trung. chỉ sử dụng 1 state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDateL: "",
  //   });

  const titleChangeHandle = (value) => {
    setEnteredTitle(value);

    if (value.trim().length < 3) {
      setEnterInforText("Không được chấp nhận");
    } else setEnterInforText(" giá trị được chấp nhận");
  };

  const amountChangeHandle = (value) => {
    setEnteredAmount(value);
  };

  const dateChangeHandle = (value) => {
    setEnteredDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className=".new-expense__control">
          <lable>Title</lable>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => {
              titleChangeHandle(event.target.value);
            }}
          />
          <span className="inforText">{enterInforText}</span>
        </div>
        <div className=".new-expense__control">
          <lable>Amount</lable>
          <input
            type="number"
            value={enteredAmount}
            onChange={(event) => {
              amountChangeHandle(event.target.value);
            }}
          />
        </div>
        <div className=".new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-01-01"
            onChange={(event) => {
              dateChangeHandle(event.target.value);
            }}
          />
        </div>
        <div className=".new-expense__control">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
