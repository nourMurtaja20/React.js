import { useState } from "react";
import "./App.css";
import ExpensesForm from "./component/ExpensesForm";
import ExpensesTable from "./component/ExpensesTable";
import "./resources/css/style.css";
import mainImage from "./resources/images/m1.png";
function App() {
  let [expenses, setExpenses] = useState([]);
  let onNewExpensesHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  let onDeleteExpensesHandler = (id) => {
    console.log(id);
    let filteredArray = expenses.filter((element)=>element.id !== id);
    setExpenses(filteredArray);
  };
  return (
    <section className="content-wrapar">
      <section className="top-section">
        <img src={mainImage} alt="this is image" />
        <section>
          <span className="topSectionSpan">Welcome to Expenses Manager</span>
          <p className="topSectionp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <ExpensesForm onNewExpenses={onNewExpensesHandler} />
        </section>
      </section>
      <ExpensesTable expenses={expenses} onDelete={onDeleteExpensesHandler} />
    </section>
  );
}

export default App;
