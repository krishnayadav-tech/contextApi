import { useContext } from "react";
import ComponentE from "./ComponentE";
import userContext from "./userContext";
import userContext2 from './userContext2';

const ComponentC = (props)=>{
    let contextvalue = useContext(userContext2); //functional component
    let contextvalue2 = useContext(userContext);
    return (
        <div>
            <h1>{contextvalue}</h1>
            <h1>{contextvalue2}</h1>
            <ComponentE/>
        </div>
    )

}

export default ComponentC;