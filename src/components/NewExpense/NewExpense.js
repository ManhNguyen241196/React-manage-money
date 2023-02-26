import React from "react";

import "./NewExpense.css";

// add Component

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //hàm lấy data từ hàm con lên parent và đính kèm id vào đó nữa.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
