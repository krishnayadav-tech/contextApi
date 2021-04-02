import { useContext } from "react";
import ComponentE from "./ComponentE";
import userContext from "./userContext";
import userContext2 from './userContext2';

const ComponentC = (props)=>{
    let {value} = useContext(userContext); //functional component
    let contextvalue2 = useContext(userContext2);
    return (
        <div>
            <h1>{value}</h1>
            <h1>{contextvalue2}</h1>
            <ComponentE/>
        </div>
    )

}

export default ComponentC;