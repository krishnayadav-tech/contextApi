import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import {UserProvider} from './userContext';
// uncommnet/comment UserProvider component to see default value passed  
const App = (props)=>{
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h1>App Component</h1>
            <div style={{width:"100vw",display:"flex",flexDirection:"row",justifyContent:"space-around", alignItems:"flex-start"}}> 
                {/* <UserProvider value="krishna">  */}
                    <ComponentA></ComponentA>
                    <ComponentB></ComponentB>
                    <ComponentC></ComponentC>
                {/* </UserProvider> */}

            </div>
        </div>
    )
}
export default App;