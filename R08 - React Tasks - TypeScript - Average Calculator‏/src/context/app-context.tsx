import { createContext } from "react";
import { useState } from "react";
import Mark from "../models/Mark";


export const AppContext = createContext<{ marks: Mark[]; setMarks: (mark: Mark) => void; deleteMark: (id: number) => void }>({
    marks: [],
    setMarks: () => { },
    deleteMark: () => { }
});
export const AppContextProvider = (props: { children: React.ReactNode }) => {
    let [marks, setMarks] = useState<Mark[]>([]);
    let setNewMark = (mark: Mark) => {
        setMarks((prevState: Mark[]) => {
            return [mark, ...prevState];
        });
    };
    let deleteMark = (id: number) => {
        let filteredMark = marks.filter((element) => element.id != id);
        setMarks(filteredMark);
    }
    return <AppContext.Provider value={{ marks: marks, setMarks: setNewMark, deleteMark: deleteMark, }}>
        {props.children}
    </AppContext.Provider>
}