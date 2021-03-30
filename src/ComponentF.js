import { useContext } from "react";
import userContext from "./userContext";

const ComponentF = (props)=>{
    let value = useContext(userContext);
    return <h1>{value}</h1>
}

export default ComponentF;