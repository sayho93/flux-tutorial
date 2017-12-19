import React from "react";
import {connect} from "react-redux";
import {setDiff} from "../actions";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
// import Fa from 'react-icons/lib/fa/arrow-right';
import Fa from 'react-icons/lib/fa/arrows-v';

class Option extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diff : "1"
        };

        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    render() {
        return (
            <div>
                <InputGroup>
                    <InputGroupAddon><Fa/></InputGroupAddon>
                    <Input type="text" value={this.state.diff}
                                      onChange={this.onChangeDiff}>
                    </Input>
                </InputGroup>
            </div>
        )
    }

    onChangeDiff(e){
        console.log(e.target.value);
        if(isNaN(e.target.value))
            return;
        this.setState({diff : e.target.value});

        if(e.target.value==="")
            this.setState({diff : "0"});

        this.props.onUpdateDiff(parseInt(e.target.value));
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff : (value) => dispatch(setDiff(value))
    };
};

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;