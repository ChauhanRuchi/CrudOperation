
import { memo } from "react";
import { useContext, createContext } from "react";
import Home from "./Home"
function Todo({ todo, addtodo }) {
    //useCallback functio n
    console.log("tofjj");
    return (<>
        <button onClick={() => { addtodo(); }}>AddTodo</button>
        <p>{todo}</p>
        <Home />
    </>)
}
export default memo(Todo)

