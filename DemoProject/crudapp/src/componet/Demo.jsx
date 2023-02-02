import { useMemo ,useReducer,useCallback,useState,createContext} from "react";
import Todo from "./Todo";

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};
let initistate = [
    {
        id: 1,
        compltete: false,
        title: "todo"
    },
    {
        id: 2,
        compltete: true,
        title: "todo2"
    },
    {
        id: 3,
        compltete: false,
        title: "todo3"
    }
]
const reducer = (state, action) => {
    if (action.type === "Add") {
        state.map((item)=>{
            return {...item,}
        })
    }
    return state
}
export const userContext=createContext();

function Demo() {
    let [count, setCout] = useState(0);
    let [todo, setTodo] = useState([]);
    let [todos, dispatch] = useReducer(reducer,initistate);
    let increment = () => setCout(count + 1);
    const addtodo = useCallback(() => { setTodo((t) => [...t, "NewTodo"]); }, [todo])
    const calculation = useMemo(() => expensiveCalculation(count), [count])
    console.log("todoss////", todos)
    return (<>
            <userContext.Provider value={"todo"}>
            <Todo todo={todo} addtodo={addtodo} />
            </userContext.Provider>
        <h1>useMemo</h1>
        <button onClick={() => { increment(); console.log("incre") }}>Increment</button>
        <p>{count}</p>
        {calculation}
        <button onClick={() => dispatch({ type: "Add" })}></button>
    </>)

}
export default Demo