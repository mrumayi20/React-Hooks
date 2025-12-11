import {useRef} from "react";

export const UseRefExample = () => {
    const inputRef = useRef(null);

    function focusInput(){
        inputRef.current.focus();
    }

    return(
        <>
            <p>When you click the button, it tells the browser:
➔ “Hey, focus this input!”</p>
            <input ref={inputRef} type='text' />
            <button onClick={focusInput}>Focus Input</button>    
        </>
    );
}