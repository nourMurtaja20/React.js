import { useContext } from "react";
import { AppContext } from "../context/app-context";

function ExpensesRow(props) {
    let appcontext = useContext(AppContext);
    let onDeleteExpensesHandler = () => {
        let filteredArray = appcontext.expenses.filter((element) => element.id !== props.expense.id);
        appcontext.setExpenses(filteredArray);

    };
    return (
        // <tr>
        //     <td>Title #1Title #1Title #1Title#1Title#1Title #1Title #1</td>
        //     <td>2022-01-01</td>
        //     <td>$30</td>
        //     <td>Description Here</td>
        // </tr>
        <tr>
            <td>{props.expense.title}</td>
            <td>{props.expense.date}</td>
            <td>${props.expense.value}</td>
            <td>{props.expense.description}</td>
            <td><a href="#" onClick={onDeleteExpensesHandler}>delete</a></td>
        </tr>
    );
}
export default ExpensesRow;