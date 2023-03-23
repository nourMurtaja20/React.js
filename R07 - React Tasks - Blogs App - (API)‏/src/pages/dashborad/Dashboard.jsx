import { Fragment } from "react"
import { Outlet } from "react-router-dom";
import NavMenu from "../../component/dashboard/NavManu";

let Dashboard = () => {
    return (
        <Fragment>
            <NavMenu />
            <section class="main-section">
                <header>
                    <span>Hi <span>Dr.Momen,</span></span>
                    <div class="seach-box">
                        <input type="text" placeholder="Search" />
                        <i class='bx bx-search'></i>
                    </div>
                </header>
                <Outlet />
            </section>
        </Fragment>
    )
}
export default Dashboard;