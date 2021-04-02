import { useContext } from "react";
import userContext from "./userContext";

const ComponentF = (props)=>{
    let value = useContext(userContext);
    return <div><h1>{value.value}</h1></div>;
}

export default ComponentF;