import { useState, createContext } from "react";

interface SubmenuData {
    isOpened:boolean,
    setisOpened: React.Dispatch<React.SetStateAction<boolean>>,

}

export const SubmenuContext = createContext({} as SubmenuData)

export const SubmenuProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const [isOpened, setisOpened] = useState(false)

    return(
        <SubmenuContext.Provider
            value = { { isOpened: isOpened, setisOpened:setisOpened} }
        >
            {children}
        </SubmenuContext.Provider>
    );
};