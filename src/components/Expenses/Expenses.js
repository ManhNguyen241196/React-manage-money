import React, { useState } from "react";

//style
import Card from "../UI/Card";
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  // Định nghĩa 1 biến phục vụ cho quá trình lọc sau này. giá trị state chọn sẽ phụ thuộc vào việc
  //state của component filter con của nó thế nào.
  const [filteredYear, setFilteredYear] = useState("2021");
  // sau này sử dụng hàm lọc sẽ lấy biến từ filteredYear
  const changeFilterYear = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  let filteredExpense; // Tông dữ liệu sẽ được gán tương ứng với điều kiện khác nhau.
  if (filteredYear === "all") {
    filteredExpense = props.items;
  } else {
    filteredExpense = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter funcChange={changeFilterYear}>
          {" "}
          {console.log(filteredYear)}
        </ExpensesFilter>

        {/* phan bieu do */}
        <ExpenseChart expenses={filteredExpense} />

        {filteredExpense.length === 0 ? (
          <p style={{ color: "white" }}> No result</p>
        ) : (
          filteredExpense.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          })
        )}
      </Card>
    </div>
  );
}

export default Expenses;
