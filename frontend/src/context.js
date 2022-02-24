import react, { useState, createContext} from "react";

export const Context = createContext();

const Userprovider = ({children}) => {
    const [state, setState] = useState(undefined);
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Userprovider;