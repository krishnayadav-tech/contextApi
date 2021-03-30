import { useContext } from 'react';
import userContext,{UserConsumer} from './userContext'; 
const ComponentA = (props)=>{
    let mycontext = useContext(userContext);
    return (
        <UserConsumer>
            {
                (value)=>{
                    return <h1>{value} A</h1>;
                }
            }
        </UserConsumer>
    )
}

export default ComponentA;