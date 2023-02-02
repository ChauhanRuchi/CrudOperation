import { userContext } from "./Demo";
import { useContext } from "react";

function Home() {
    let UserContext = useContext(userContext);
    return (<>
    {console.log("data///",UserContext)}
    </>)
}
export default Home