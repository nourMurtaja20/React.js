import { createContext, useState } from "react";

export const AppContextCategory = createContext({
    // bolgs: [],
    // setBolgs: () => { },
    categories: [],
    setCategories: () => { },
    deleteCategory: () => { },
});

export const AppContextCategoryProvider = (props) => {
    let [categoriesArray, setcategoriesArray] = useState([]);
    let deleteCategory = (id) => {
        let filteredData = categoriesArray.filter((element) => element.id != id);
        setcategoriesArray(filteredData);
    }
    return (
        <AppContextCategory.Provider
            value={{
                categories: categoriesArray,
                setCategories: setcategoriesArray,
                deleteCategory: deleteCategory,
            }}
        >
            {props.children}
        </AppContextCategory.Provider>
    );
};
