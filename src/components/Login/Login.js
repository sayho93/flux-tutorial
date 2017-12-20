import React from "react";
import { InputGroup, InputGroupAddon, Input, Button, Buttons } from 'reactstrap';
import Center from 'react-center';
import FaPass from 'react-icons/lib/fa/expeditedssl';
import styles from "./Login.css";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter')
            this.onLogin();
    };

    render(){
        let backgroundStyle = {
            height: "100%",
            backgroundColor: "#778899"
        };

        let boxStyle = {
            height: 100,
            width: 300,
            marginTop: 300
        };

        return (
            <div style={backgroundStyle}>
                <Center>
                    <div style={boxStyle}>
                        <h1 style={{color: 'white'}}>PickleCode</h1>
                        <InputGroup>
                            <InputGroupAddon>@</InputGroupAddon>
                            <Input placeholder="아이디" onKeyPress={this._handleKeyPress}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon><FaPass/></InputGroupAddon>
                            <Input type="password" placeholder="비밀번호" onKeyPress={this._handleKeyPress}/>
                        </InputGroup>
                        <Center>
                            <Button color="white" style={{marginTop: 20}}
                                    onClick={() => {this.onLogin()}}
                            >
                                로그인
                            </Button>
                        </Center>
                    </div>
                </Center>
            </div>
        );
    }

    onLogin(){
        alert("login clicked");
    }
}

export default Login