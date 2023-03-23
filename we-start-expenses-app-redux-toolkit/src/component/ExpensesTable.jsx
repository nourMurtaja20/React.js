import ExpensesRow from "./ExpensesRow";
import { useSelector } from "react-redux"
function ExpensesTable() {
    let expenses = useSelector((state) => state.expenses);
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
                {expenses.map((element) => (<ExpensesRow expense={element} key={element.id} />))}

            </tbody>
        </table>
    </section>);
}
export default ExpensesTable;