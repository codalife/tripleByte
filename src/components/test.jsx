import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux/actions";

const Test = props => (
    <button
        onClick={props.increment}
    >{props.name}
    </button>
)

const mapStateToProps = state => ({name: state.count});
const mapDispatchToProps = dispatch => ({
    increment() {
        dispatch(increment(1));
    } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Test);