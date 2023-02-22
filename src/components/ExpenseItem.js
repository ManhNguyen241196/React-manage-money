import "./ExpenseItem.css";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 1, 28);
  //   const expenseTitle = "Car";
  //   const expenseAmount = 249.67;
  //   console.log(props);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  console.log(month, year, day);
  return (
    <div className="expense-item">
      <div className="expense-item-date">
        <div className="monthDate">{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> $ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;