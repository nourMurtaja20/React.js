
import { useContext, useRef } from "react"
import { AppContextCategory } from "../../context/app-context-category";
import Category from "../../models/Category";
import "../../resources/css/AddNewCategory.css"

let AddNewCategory = () => {
    let categoryNameRef = useRef();
    let context = useContext(AppContextCategory)
    let onsubmitHandler = (event) => {
        event.preventDefault();
        if (checkData()) {
            save();
            categoryNameRef.current.value = "";
        }
    }
    let checkData = () => {
        if (categoryNameRef.current.value != "") {
            return true;
        } else {
            alert("Enter required data");
            return false;
        }
    }
    let save = () => {
        let category = new Category(categoryNameRef.current.value);
        // context.setCategories((prevState) => { return [category, ...prevState] });
        context.setCategories(category);
        // console.log(category)
        console.log(context.categories);
    }
    return (
        <section className="section_new">
            <div>
                <span className="div_span">Add new category</span>
                <i className='bx bx-x div_i1'></i>
            </div>
            <form className="form_category" onSubmit={onsubmitHandler}>
                <label className="label_name" htmlFor="name">Category name</label>
                <input className="input_category" type="text" placeholder="Ex:  Development" ref={categoryNameRef} />
                <div className="form_div">
                    <input className="input_cancel" type="submit" value="Cancel" />
                    <input className="input_done" type="submit" value="Done" />
                </div>
            </form>
        </section>);
}
export default AddNewCategory;