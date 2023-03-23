import ExpensesRow from "./ExpensesRow";

function ExpensesTable(props) {
    return (<section className="bottom-section">
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Value</th>
                    <th>Description</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                {props.expenses.map((element) => (<ExpensesRow expense={element} key={element.id} onDeleteExpenses={props.onDelete}/>))}

            </tbody>
        </table>
    </section>);
}
export default ExpensesTable;