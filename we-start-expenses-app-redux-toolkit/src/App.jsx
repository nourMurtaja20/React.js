import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ExpensesForm from "./component/ExpensesForm";
import ExpensesTable from "./component/ExpensesTable";
import { expensesActions } from "./redux/redux-store";
import "./resources/css/style.css";
import mainImage from "./resources/images/m1.png";
function App() {
  let dispatch = useDispatch();

  let fetchExpenses = () => {
    axios
      .get(
        "https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses.json"
      )
      .then(function (response) {
        let expenses = [];
        for (let key in response.data) {
          let expense = response.data[key];
          expense.firebase_id = key;
          expenses.push(expense);
        }
        dispatch(expensesActions.read(expenses));
      })
      .catch(function (error) { });
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
          <ExpensesForm />
        </section>
      </section>
      <ExpensesTable />
    </section>
  );
}

export default App;
