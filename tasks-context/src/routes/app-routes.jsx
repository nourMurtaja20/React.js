import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard/dashborad";
import TasksPage from "../pages/dashboard/TasksPage";
import NewTasksPage from "../pages/dashboard/NewTaskPage";

import Login from "../pages/Login"
import TasksDetailsPage from "../pages/dashboard/TaskDetailsPage";
let AppRouter = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard" element={<TasksPage />} />
            <Route path="/dashboard/newtask" element={<NewTasksPage />} />
            <Route path="/dashboard/taskdetail" element={<TasksDetailsPage />} />


        </Route>
    </Routes>
}
export default AppRouter;