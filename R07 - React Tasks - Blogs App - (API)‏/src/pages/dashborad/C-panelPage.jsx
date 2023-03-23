import { Fragment } from "react"
import TableRow from "../../component/dashboard/TableRow";
import "../../resources/css/C-Panel.css"
import { NavLink } from "react-router-dom";
let CPanelPage = () => {
    return (<Fragment>

        <span>All Blogs</span>
        <section class="section-filter">
            <i class='bx bx-filter-alt'></i>
            <div class="custom-select">
                <select>
                    <option value="0">Category</option>
                    <option value="1">Blog title</option>
                    <option value="2">Due date</option>
                    <option value="3">Publisher</option>
                </select>
            </div>
            <div class="custom-select">
                <select>
                    <option value="0">All</option>
                    <option value="1">Development</option>
                    <option value="2">Design</option>
                </select>
            </div>
            <i class='bx bx-trash'></i>
            <NavLink className="NavLink1" to="/dashboard/addNewBlog">Create New Blog</NavLink>
        </section>
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Category</th>
                    <th>Blog title</th>
                    <th>Due date</th>
                    <th>Publisher</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>

    </Fragment >)
}
export default CPanelPage;