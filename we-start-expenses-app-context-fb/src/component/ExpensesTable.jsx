import { useContext } from "react";
import { AppContext } from "../context/app-context";
import ExpensesRow from "./ExpensesRow";

function ExpensesTable() {
    let appcontext = useContext(AppContext);
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
                {appcontext.expenses.map((element) => (
                    <ExpensesRow key={element.id} expense={element} />
                ))}

                {/* <ExpensesRow /> */}
            </tbody>
        </table>
    </section>);
}
export default ExpensesTable;