function ExpensesRow(props) {
    let onDeleteExpensesHandler = () => {
        props.onDeleteExpenses(props.expense.id);
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