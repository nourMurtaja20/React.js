import axios from "axios";
import { useDispatch } from "react-redux";
import { expensesActions } from "../redux/redux-store";

function ExpensesRow(props) {
    let dispatch = useDispatch();
    let onDeleteExpensesHandler = () => {
        axios.delete(`https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses/${props.expense.firebase_id}.json`)
            .then(function (response) {
                dispatch(expensesActions.delete(props.expense.id));
                console.log(props.expense.id);
            })
            .catch(function (error) {

            });
    };
    return (<tr>
        <td>{props.expense.title}</td>
        <td>{props.expense.date}</td>
        <td>${props.expense.value}</td>
        <td>{props.expense.description}</td>
        <td><a href="#" onClick={onDeleteExpensesHandler}>delete</a></td>


    </tr>);
}
export default ExpensesRow;