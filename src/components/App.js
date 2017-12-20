import React from 'react';
import {Link} from 'react-router';
import Counter from "./Counter";
import Buttons from "./Buttons";
import Option from "./Option";

import Login from "./Login/Login";

class App extends React.Component{
    // render(){
    //     return (
    //         <div style={{textAlign : "center"}}>
    //             <Counter/>
    //             <Option/>
    //             <Buttons/>
    //         </div>
    //     );
    // }

    render(){
        return (
            <Login/>
        )
    }
}

export default App;