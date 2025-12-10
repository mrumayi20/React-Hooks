import { createContext, useState, useContext } from "react";

//Step 1: create Context
const GlobalContext = createContext();

export const UseContextExample = () => {
    
    const [ isToggle, setIsToggle] = useState(false);

    return(
        //Step 2: Provide context to components
        <GlobalContext.Provider value={{isToggle, setIsToggle}}>
            <div>
                <ChildToggle></ChildToggle>
                <ChildDisplay></ChildDisplay>
            </div>
        </GlobalContext.Provider>
    );
};

const ChildToggle = () => {
    //Step 3: Consume context in the provided components
    const {setIsToggle} = useContext(GlobalContext);
    return(
        <div>
            <button onClick={() => setIsToggle(prev => !prev)}>isToggle</button>
        </div>
    );
}

const ChildDisplay = () => {
    const {isToggle} = useContext(GlobalContext);
    return(
        <div>
            <h1> Current State: {isToggle ? 'ON' : "OFF"}</h1>
        </div>
    );
}