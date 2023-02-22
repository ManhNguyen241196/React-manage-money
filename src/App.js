// import logo from "./logo.svg";
// import "./App.css";

//component
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      title: "car",
      amount: 12.5,
      date: new Date(2021, 1, 28),
    },
    {
      title: "bike",
      amount: 10.5,
      date: new Date(2021, 2, 29),
    },
    {
      title: "room",
      amount: 15.7,
      date: new Date(2021, 3, 21),
    },
    {
      title: "game",
      amount: 123.5,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      </header>
      <body>
        <>
          <ExpenseItem
            title={expense[0].title}
            amount={expense[0].amount}
            date={expense[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={expense[1].title}
            amount={expense[1].amount}
            date={expense[1].date}
          ></ExpenseItem>
        </>
      </body>
    </div>
  );
}

export default App;
