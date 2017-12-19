import React from "react";
import {connect} from "react-redux";
import {increment, decrement} from "../actions";
import {Button} from "reactstrap";

class Buttons extends React.Component{
    render(){
        return (
            <div>
                <Button type="button"
                        onClick={this.props.onIncrement}>
                    +
                </Button>

                <Button type="button"
                        onClick={this.props.onDecrement}>
                    -
                </Button>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement : () => dispatch(increment()),
        onDecrement : () => dispatch(decrement())
    }
};

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;