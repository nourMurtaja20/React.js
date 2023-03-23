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
                {props.expenses.map((element) => (
                    <ExpensesRow
                        key={element.id}
                        expense={element}
                        onDeleteExpense={props.onDeleteExpense}
                    />
                ))}
            </tbody>
        </table>
    </section>);
}
export default ExpensesTable;