import { Route, Routes } from "react-router-dom"
import BlogDetailsPage from "../pages/BlogDetailsPage";
import CPanelPage from "../pages/dashborad/C-panelPage";
import CategoriesPage from "../pages/CategoriesPage";
import HomePage from "../pages/HomePage";
import NotificationsPage from "../pages/dashborad/NotificationsPage";
import CategoryDashboardPage from "../pages/dashborad/CategoryDashboardPage";
import Dashboard from "../pages/dashborad/Dashboard";
import AddNewCategory from "../pages/dashborad/AddNewCategory";
// import DeleteBlog from "../pages/dashborad/DeleteBlogPage";
import AddNewBlogPage from "../pages/dashborad/AddNewBlogPage";
let AppRouter = () => {
    return <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/details" element={<BlogDetailsPage />} />
        <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard" element={<CPanelPage />} />
            <Route path="/dashboard/notifications" element={<NotificationsPage />} />
            <Route path="/dashboard/category" element={<CategoryDashboardPage />} />
            {/* <Route path="/dashboard/delete" element={<DeleteBlog />} /> */}
            <Route path="/dashboard/addNewBlog" element={<AddNewBlogPage />} />

        </Route>
            <Route path="/addnewcategory" element={<AddNewCategory />} />

    </Routes>
}
export default AppRouter;