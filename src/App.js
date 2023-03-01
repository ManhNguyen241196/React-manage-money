// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
//component
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      title: "car",
      amount: 12.5,
      date: new Date(2021, 1, 28),
    },
    {
      id: 2,
      title: "bike",
      amount: 10.5,
      date: new Date(2021, 2, 29),
    },
    {
      id: 3,
      title: "room",
      amount: 15.7,
      date: new Date(2021, 3, 21),
    },
    {
      id: 4,
      title: "real",
      amount: 123.5,
      date: new Date(2021, 4, 28),
    },
  ];

  const [expense, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (add_expense) => {
    console.log(add_expense);
    setExpense((expense) => {
      return [...expense, add_expense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}

export default App;
