import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectYear = (value) => {
    props.funcChange(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          onChange={(event) => {
            selectYear(event.target.value);
          }}
        >
          <option value="all">all</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
