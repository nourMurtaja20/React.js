import { Fragment } from "react"
import { NavLink } from "react-router-dom";

let NavMenu =()=>{
    return(<Fragment>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
            <i class='bx bx-menu' id="btn"></i>
            <i class='bx bx-x' id="cancel"></i>
        </label>
        <aside class="aside-column">
            <span>BOLGS</span>
            <span>Admin Tools</span>
            <ul>
                <li>
                    <a href="#">
                        <i class='bx bx-link-external'></i>
                        <span>overview</span>
                    </a>
                </li>
                <li>
                    <NavLink to="/dashboard">
                        <i class="bx bx-server"></i>
                        <span>All Blogs</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/category">
                        <i class="bx bx-category"></i>
                        <span>Categories</span>
                    </NavLink>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-cog'></i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
            <span>Insights</span>
            <ul>
                <li>
                    <NavLink to="/dashboard/notifications">
                        <i class='bx bx-bell'></i>
                        <span>Notifications</span>
                    </NavLink>
                </li>
            </ul>
            <div class="div-row">
                <figure>
                    <img src="images/img9.png" alt="" />
                </figure>
                <article>
                    <span>Momen</span>
                    <span>Sisalem</span>
                </article>
                <a href="#"><i class='bx bx-log-out'></i></a>
            </div>
        </aside>
    </Fragment>)
};
export default NavMenu;