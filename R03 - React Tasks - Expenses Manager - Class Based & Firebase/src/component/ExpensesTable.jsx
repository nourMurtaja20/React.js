import React from "react";
import ExpensesRow from "./ExpensesRow";

class ExpensesTable extends React.Component {
    render() {
        return <section className="bottom-section">
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
                    {this.props.expenses.map((element) => (
                        <ExpensesRow
                            key={element.id}
                            expense={element}
                            onDeleteExpense={this.props.onDeleteExpense}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    }
}
export default ExpensesTable;