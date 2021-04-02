import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import {UserProvider} from './userContext';
import userContext2 from './userContext2';
// uncommnet/comment UserProvider component to see default value passed  
const App = (props)=>{
    let [value,changeValue] = useState("krishna");
    return (
        <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>App Component</h1>
            <div style={{width:"100vw",display:"flex",flexDirection:"row",justifyContent:"space-around", alignItems:"flex-start"}}> 
                <UserProvider value={{value, changeValue}}> 
                    <userContext2.Provider value="secondvalue">
                        <ComponentA></ComponentA>
                        <ComponentB></ComponentB>
                        <ComponentC></ComponentC>
                    </userContext2.Provider>
                </UserProvider>

            </div>
        </div>
    )
}
export default App;