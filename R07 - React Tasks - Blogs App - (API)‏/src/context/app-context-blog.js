import { createContext, useState } from "react";

export const AppContextBlog = createContext({
    bolgs: [],
    setBolgs: () => { },
    deleteBlog: () => { },
});

export const AppContextBlogProvider = (props) => {
    let [blogsArray, setblogsArray] = useState([]);
    let deleteBlog = (id) => {
        let filteredData = blogsArray.filter((element) => element.id != id);
        setblogsArray(filteredData);
    }
    return (
        <AppContextBlog.Provider
            value={{
                categories: blogsArray,
                setCategories: setblogsArray,
                deleteBlog: deleteBlog,
            }}
        >
            {props.children}
        </AppContextBlog.Provider>
    );
};
