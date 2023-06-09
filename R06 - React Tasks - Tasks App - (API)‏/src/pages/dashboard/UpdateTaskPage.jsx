import { useEffect, useRef } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskController from "../../controllers/task-controller";
import Task from "../../models/Task";
import { tasksActions } from "../../redux/tasks-slic";

let UpdateTaskPage = () => {
    let categories = useSelector((state) => state.categories.data);
    let task = useSelector((state) => state.tasks.item);
    let taskcontroler = new TaskController();
    let dispatch = useDispatch();
    let navigator = useNavigate();

    let nameRef = useRef();
    let categoryRef = useRef();
    let detailsRef = useRef();
    let brief_detailsRef = useRef();
    let from_dateRef = useRef();
    let to_dateRef = useRef();
    let imageRef = useRef();
    
    let checkData = () => {
        if (nameRef.current.value != "" &&
            categoryRef.current.value != "" &&
            detailsRef.current.value != "" &&
            brief_detailsRef.current.value != "" &&
            from_dateRef.current.value != "" &&
            imageRef.current.files.length == 1 &&
            to_dateRef.current.value != "") {
            return true;
        }
        alert("Enter required data")
        return false;
    }
    let save = async () => {
        let category = categories.find((element) => element.id == categoryRef.current.value)
        let task = new Task(nameRef.current.value, category.id, detailsRef.current.value, brief_detailsRef.current.value, from_dateRef.current.value, to_dateRef.current.value, imageRef.current.files[0] ?? null);
        let response = await taskcontroler.update(task);
        if (response.status) {
            task.newTaskId = response.object;
            dispatch(tasksActions.update(response.object));
            navigator(-1)
        }
    }
    let onSubmitHandler = (event) => {
        event.preventDefault();
        if (checkData()) {
            save();
        }
    }

    let setFormData = () => {
        nameRef.current.value = task.name;
        categoryRef.current.value = task.category_id;
        detailsRef.current.value = task.details;
        brief_detailsRef.current.value = task.brief_details;
        from_dateRef.current.value = task.from_date;
        to_dateRef.current.value = task.to_date;
    }
    useEffect(setFormData, []);
    return <Fragment>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2 mt-3">Update Task </h1>

            </div>

            <form onSubmit={onSubmitHandler} className="row mt-5">



                <div className="col-md-12">

                    <div className="form-outline mb-4">
                        <label className="form-label">Task name</label>
                        <input type="texy" id="loginName" className="form-control" placeholder="Task name" ref={nameRef} />
                    </div>
                </div>




                <div className="col-md-12">

                    <div className="form-outline mb-4">
                        <label className="form-label">Task Category</label>
                        <select name="" className=" dropdown form-control " ref={categoryRef} >
                            {categories.map((element) => (
                                <option value={element.id} key={element.id}>{element.name}</option>))}

                        </select>
                        {/* <input id="input-tags" value="category 1,category 2, category 3 , name of category" autocomplete="off"
                            placeholder="Add Category?" /> */}
                    </div>
                </div>



                <div className="col-md-12">

                    <div className="form-outline mb-4">
                        <label className="form-label">Image </label>
                        <input className="form-control" type="file" id="formFile" ref={imageRef} />
                    </div>
                </div>




                <div className="col-md-12">
                    <label className="form-label">Task Details</label>
                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={detailsRef}></textarea>
                    </div>
                </div>

                <div className="col-md-12">
                    <label className="form-label">Task Brief Details</label>
                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={brief_detailsRef}></textarea>
                    </div>
                </div>



                <div className="col-md-6">
                    <div className="form-outline mb-4">
                        <label className="form-label">Form date</label>
                        <input type="date" className="form-control" placeholder="Task name" ref={from_dateRef} />
                    </div>
                </div>




                <div className="col-md-6">
                    <label className="form-label">To date</label>
                    <div className="form-outline mb-4">
                        <input type="date" className="form-control" placeholder="Task name" ref={to_dateRef} />
                    </div>
                </div>





                <div>
                    <button type="submit" className="pull-right btn btn-main mb-4">Update Task</button>

                </div>





            </form>



        </main>
    </Fragment>
}
export default UpdateTaskPage;