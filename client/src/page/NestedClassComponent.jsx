import React from "react";

class Nestedcomponent extends React.Component{

    constructor(props){
        super(props)
    }
    hero(amount){
        return parseFloat(amount).toFixed(2)
    }
    render(){
        return <em>{this.hero(this.props.value)}$</em>
    }
}

export default Nestedcomponent