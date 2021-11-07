import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      unreadMessage: [
        // "call your mom!",
        // "New span email.All links are definitely safe to click"
      ]
    }
  }


 render() {
  return (
    <div>
       {/* {this.state.unreadMessage.length > 0 ? <h3>You have {this.state.unreadMessage.length} unread Message</h3> :
       null
       } */}
         {this.state.unreadMessage.length > 0 && <h3>You have {this.state.unreadMessage.length} unread Message</h3>}
    </div>
  );
 }
} 



export default App;
