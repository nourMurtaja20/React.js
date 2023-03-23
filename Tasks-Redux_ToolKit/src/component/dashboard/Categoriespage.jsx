import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryRow from "../categories/CategoryRow";

let CategoriesPage = () => {
    let categories = useSelector((state) => state.categories.data);
    return <Fragment>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Categories</h1>
            </div>
            <div className="row mt-5">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((element) => (
                            <CategoryRow key={element.id} category={element} />))}
                    </tbody>
                </table>
                {/* {categories.map((element) => (
                    <CategoryItem key={element.id} category={element} />))} */}

            </div>
        </main>
    </Fragment>
}
export default CategoriesPage;