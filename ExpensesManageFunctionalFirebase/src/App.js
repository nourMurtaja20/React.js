import { useEffect, useState } from "react";
import "./App.css";
import ExpensesForm from "./component/ExpensesForm";
import ExpensesTable from "./component/ExpensesTable";
import "./resources/css/style.css";
import mainImage from "./resources/images/m1.png";
function App() {
  let [expenses, setExpenses] = useState([]);

  let onNewExpensesHandler = (expense) => {
    saveExpenses(expense);
  };

  let saveExpenses = (expense) => {
    fetch(
      "https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json;
      })
      .then(function (jsonData) {
        console.log(jsonData);
        setExpenses((prevState) => {
          return [expense, ...prevState];
        });
      })
      .catch(function (error) {});
  };

  let onDeleteExpenseHandler = (firebaseId) => {
    fetch(
      `https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData);
        let filteredArray = expenses.filter(
          (element) => element.firebase_id !== firebaseId
        );
        setExpenses(filteredArray);
      })
      .catch(function (error) {});
  };

  let fetchExpenses = () => {
    fetch(
      "https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        //
        console.log(jsonData);
        let expensesArray = [];
        for (let key in jsonData) {
          let expense = jsonData[key];
          expense.firebase_id = key;
          expensesArray.push(expense);
        }
        setExpenses(expensesArray);
      })
      .catch(function (error) {});
  };

  useEffect(fetchExpenses, []);
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
      <ExpensesTable
        expenses={expenses}
        onDeleteExpense={onDeleteExpenseHandler}
      />
    </section>
  );
}

export default App;
