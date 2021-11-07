// import React, { useState } from "react";
import React from "react";

// export default function App() {
//     const [logIn, setLogin] = useState(false)
//     const [change, setChange] = useState(" In ")

//     function Click() {
//          setLogin(!logIn);
//          setChange(logIn?'In':'Out')
//     }
//     return(
//         <div>
//             <h2>Dear sirdeeq, you are currently logged { logIn ? "in" : "out" }</h2>
//             <button onClick={Click} >Log {change}</button>
//         </div>
//     )
// }
class App extends React.Component{
    constructor () {
        super()
        this.state = {
            isLoggedIn:false
        }
        this.handleClick= this.handleClick.bind(this)
    }
   handleClick(){
        this.setState(prevState => {
            return{
                isLoggedIn:!prevState.isLoggedIn
            } 
        })
    }
    render(){
        let buttonText = this.state.isLoggedIn ? "Log In" : "Log Out"
        let displayText = this.state.isLoggedIn ? "Loggged Out" : "Logged In"
        return(
            <div>
                 <h2>Dear sirdeeq, you are currently logged { displayText}</h2>
                 <button onClick={this.handleClick} > {buttonText} </button>
            </div>
        )
    }
}
export default App