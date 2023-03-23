import { Fragment } from "react"
import NavMenu from "../../component/dashboard/NavManu"
import NotificationCard from "../../component/dashboard/NotifiactionCard"
import "../../resources/css/C-Panel.css"
import "../../resources/css/Notifications.css"
let NotificationsPage = () => {
    return (<Fragment>


        <span>Notifications</span>
        <span>Recent Notification</span>
        <NotificationCard />

        <button class="btnL">Load More</button>

    </Fragment>)
}
export default NotificationsPage;