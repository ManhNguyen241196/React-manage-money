import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.expenses) {
    //vòng lặp trỏ tới từng object trong chuỗi array tổng các thẻ việc đã khai
    const expenseMonth = expense.date.getMonth(); // nó sẽ trả ra dưới dạng số 0,1,2,3,4,5....11 tương ứng 12 tháng.
    // nó cũng sẽ là hệ số cho array chartDataPoint vừa khai báo bên trên.
    chartDataPoints[expenseMonth].value =
      chartDataPoints[expenseMonth].value + expense.amount; // đây chính là trỏ tới key value của  từng phẩn tử của array bên trên.
    //lặp tới 1 giá trị sẽ cộng dồn vào giá trị value ban đầu  (tức là = 0 )
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
