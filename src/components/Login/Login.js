import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class Login extends React.Component{
    render(){
        return (
            <div>
                {/*<input type="text" name="userId" placeholder="아이디" />*/}
                <InputGroup>
                    <InputGroupAddon>@</InputGroupAddon>
                    <Input type="text" name="userId" placeholder="아이디" />
                </InputGroup>
                <InputGroup>
                    <Input type="password" name="userPwd" placeholder="비밀번호" />
                </InputGroup>

            </div>
        );
    }
}