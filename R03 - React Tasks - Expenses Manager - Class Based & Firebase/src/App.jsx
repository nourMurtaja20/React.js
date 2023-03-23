import React from "react";
import ExpensesForm from "./component/ExpensesForm";
import ExpensesTable from "./component/ExpensesTable";
import "./resources/css/style.css";
import axios from "axios";
import mainImage from "./resources/images/m1.png";
class App extends React.Component {
    constructor() {
        super();
        this.state = { expenses: [] };
    }
    // onNewExpenseHandler = (newExpense) => {
    //     this.setState((prevState) => ({
    //         expenses: [newExpense, ...prevState.expenses],
    //     }));
    //     // this.setState({ expenses: [newExpense, ...this.state.expenses] });
    // };
    // onDeleteExpenseHandler = (id) => {
    //     console.log(id)
    //     let filteredExpenses = this.state.expenses.filter((element) => element.id !== id);
    //     this.setState({ expenses: filteredExpenses });
    // };

    onNewExpenseHandler(newExpense) {
        console.log(newExpense);
        axios
            .post(
                "https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses.json",
                newExpense,
                {
                    headers: { accept: "application/json" },
                }
            )
            .then((response) => {
                newExpense.firebase_id = response.data.name;
                console.log(newExpense);
                this.setState((prevState) => ({
                    expenses: [newExpense, ...prevState.expenses],
                }));
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => { });
    }

    onDeleteExpenseHandler = (firebaseId) => {
        axios
            .delete(
                `https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses/${firebaseId}.json`,
                {
                    headers: {
                        accept: "application/json",
                    },
                }
            )
            .then((response) => {
                console.log(response.data)
                let filteredExpenses = this.state.expenses.filter(
                    (element) => element.firebase_id !== firebaseId
                );
                this.setState({ expenses: filteredExpenses });
            })
            .catch((error) => { });
    };


    //useEfect(fetchExpenses,[]);
    componentDidMount() {
        this.fetchExpenses();
    }

    fetchExpenses = () => {
        axios
            .get(
                `https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses.json`,
                {
                    headers: {
                        accept: "application/json",
                    },
                }
            )
            .then((response) => {
                let expensesArray = [];
                for (let key in response.data) {
                    let expense = response.data[key];
                    expense.firebase_id = key;
                    expensesArray.push(expense);
                }
                this.setState({ expenses: expensesArray });
            })
            .catch((error) => { });
    };

    render() {
        return <section className="content-wrapar">
            <section className="top-section">
                <img src={mainImage} alt="this is image" />
                <section>
                    <span>Welcome to Expenses Manager</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam
                    </p>
                    <ExpensesForm onNewExpense={this.onNewExpenseHandler.bind(this)} />
                </section>
            </section>
            <ExpensesTable expenses={this.state.expenses} onDeleteExpense={this.onDeleteExpenseHandler} />
        </section>
    }
}
export default App;