import StudentCard from "../component/StudentCard";
import "../resources/css/style.css"
import { useRef, useContext } from "react";
import { FormEvent } from "react";
import { AppContext } from "../context/app-context";
import Mark from "../models/Mark";

let App = () => {
    let nameRef = useRef<HTMLInputElement>(null);
    let midTermRef = useRef<HTMLInputElement>(null);
    let finalTermRef = useRef<HTMLInputElement>(null);
    let activitiesRef = useRef<HTMLInputElement>(null);
    let context = useContext(AppContext);
    let onsubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        if (checkData()) {
            save();
            clear();
        }
    };
    let checkData = () => {
        if (nameRef.current?.value != "" &&
            midTermRef.current?.value != "" &&
            finalTermRef.current?.value != "" &&
            activitiesRef.current?.value != "") {
            return true;
        } else {
            return false;
        }
    }
    let save = () => {
        let mark = new Mark(Date.now(), nameRef.current!.value, Number(midTermRef.current!.value), Number(finalTermRef.current!.value), Number(activitiesRef.current!.value));
        context.setMarks(mark);
    }
    let clear = () => {
        nameRef.current!.value = "";
        midTermRef.current!.value = "";
        finalTermRef.current!.value = "";
        activitiesRef.current!.value = "";

    }
    return (<div className="content-wrapper">
        <section className="form-section">
            <header className="form-header">
                <article className="form-header_content">
                    <span className="form-title">Average Calculator</span>
                    <p className="form-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum
                        consectetur explicabo, molestias, hic aut perferendis, deleniti
                        dolores repellendus natus numquam. Qui laborum alias eligendi, ab
                        voluptas itaque? Exercitationem, minima? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Suscipit veniam sit quisquam
                        vero quod. Eum velit excepturi id ratione, facere aut sequi
                        architecto tempora a numquam odit quidem totam exercitationem.
                    </p>
                </article>
                <figure className="form-header_img">
                    <img
                        src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-2686.jpg?w=2000"
                        alt=""
                    />
                </figure>
            </header>
            <form className="marks-form" onSubmit={onsubmitHandler}>
                <div className="form-group">
                    <label htmlFor="student-name" className="form-label">Student Name</label>
                    <input
                        type="text"
                        id="student-name"
                        name=""
                        ref={nameRef}
                        className="form-input"
                        placeholder="Enter Student Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mid-term" className="form-label">Mid Term</label>
                    <input
                        type="number"
                        id="mid-term"
                        name=""
                        ref={midTermRef}
                        className="form-input"
                        placeholder="Enter Mark"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mid-term" className="form-label">Final</label>
                    <input
                        type="number"
                        id="mid-term"
                        name=""
                        ref={finalTermRef}
                        className="form-input"
                        placeholder="Enter Mark"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mid-term" className="form-label">Activities</label>
                    <input
                        type="number"
                        id="mid-term"
                        name=""
                        ref={activitiesRef}
                        className="form-input"
                        placeholder="Enter Mark"
                    />
                </div>
                <button type="submit" className="form-btn">SAVE</button>
            </form>
        </section>
        <section>
            {context.marks.map((element) => <StudentCard mark={element} />)}
        </section>
    </div>)
}
export default App;