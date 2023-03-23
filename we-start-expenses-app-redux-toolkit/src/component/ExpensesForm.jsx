import { useRef } from "react";
import { useDispatch } from "react-redux";
import { expensesActions } from "../redux/redux-store";
import axios from "axios";
function ExpensesForm() {
    let titleRef = useRef();
    let dateRef = useRef();
    let valueRef = useRef();
    let descriptionRef = useRef();

    let despatch = useDispatch();

    let onSubmitHandler = (event) => {
        event.preventDefault();
        if (checkData()) {
            saveData();
        }
    };

    let checkData = () => {
        if (titleRef.current.value !== "" && dateRef.current.value !== "" && valueRef.current.value !== 0 && descriptionRef.current.value !== "") {
            return true;
        }
        alert("Enter required data ")
        return false;
    };

    let saveData = () => {
        let expense = {
            id: Date.now(),
            title: titleRef.current.value,
            date: dateRef.current.value,
            value: valueRef.current.value,
            description: descriptionRef.current.value,
        }
        axios.post("https://ws-expenses-manager-default-rtdb.firebaseio.com/expenses.json",
            expense, {
            headers: {
                accept: "application.json",
                "content-type": "application.json"
            },
        }).then(function (response) {
            console.log(Response);
            expense.firebase_id = response.data.id;
            despatch(expensesActions.save(expense));
            clear();

        }).catch(function (error) { });
    }
    let clear = () => {
        titleRef.current.value = "";
        dateRef.current.value = "";
        valueRef.current.value = 0;
        descriptionRef.current.value = "";
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        ref={titleRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" placeholder="Date"
                        ref={dateRef} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="value">Value</label>
                    <input
                        type="number"
                        name="value"
                        id="value"
                        placeholder="Value"
                        ref={valueRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description"
                        ref={descriptionRef}
                    />
                </div>
            </div>
            <button className="save-btn" type="submit">
                Save
            </button>
        </form>);
}
export default ExpensesForm;