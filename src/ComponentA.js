import { useContext } from 'react';
import userContext,{UserConsumer} from './userContext'; 
const ComponentA = (props)=>{
    let mycontext = useContext(userContext);
    return (
        <div>
            {/* <UserConsumer>
                {
                    (value)=>{
    
                        return <h1>{value} A</h1>;
                    }
                }
            </UserConsumer> */}

            <h1>{mycontext.value}</h1>
            <input value={mycontext.value} type="text" onChange={(e)=>{ 
                mycontext.changeValue(e.target.value);
            }}/>
        </div>
    )
}

export default ComponentA;