import { Fragment, useContext } from "react"
import "../../resources/css/C-Panel.css"
import "../../resources/css/Category.css"
import { NavLink } from "react-router-dom";
import { AppContextCategory } from "../../context/app-context-category";
import DivCategory from "../../component/dashboard/DivCategory";

let CategoryDashboardPage = () => {
    let context = useContext(AppContextCategory);
    return (<Fragment>

        <span>All Categories</span>

        <div class="div-category">
            {context.categories.map((element) => (<DivCategory key={element.id} category={element} />))}
            <div class="div-create">
                <NavLink to="/addnewcategory">
                    <span className="createNew"><i class='bx bx-message-square-add'></i>Create new category</span>
                </NavLink>
            </div>
            {/* <div class="div-design">
                <span>Design <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-development">
                <span>Development <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-Medical">
                <span>Medical <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-Motion">
                <span>Motion <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-design">
                <span>Design <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-development">
                <span>Development <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-Medical">
                <span>Medical <i class='bx bx-trash'></i></span>
                <span>Blog No.</span>
                <span><i class='bx bx-check-circle'></i> 23 Blog</span>
            </div>
            <div class="div-create">
                <NavLink to="/addnewcategory">
                    <span className="createNew"><i class='bx bx-message-square-add'></i>Create new category</span>
                </NavLink>
            </div> */}
        </div>

    </Fragment>)
}
export default CategoryDashboardPage;