import React from 'react'
import "./component/Landing.css"
import style from "./component/Landing.module.css";
import { FormatedDate } from './component/ClassFormatedDate';
import Nestedcomponent from './NestedClassComponent';
class Landing extends React.Component {


 cssStyling = {
  color: "red",
  fontSize:"2rem",
  textAlign:"center"

  }
constructor(props){
  super(props)
}


  render(){
    return (
      <>
        <h1 className="landingheader">landing</h1>
        <div className="landingcontainer">
          <div>
            <b>{this.props.name}:</b> <em>{this.props.price}</em>
          </div>
          <div>
            <b>{this.props.objMaterial.name}:</b>
            <em>
              <Nestedcomponent value={this.props.objMaterial.price} />
            </em>
          </div>
          <div>
           
            <b>time stamp:</b>
            <em><FormatedDate date={this.props.objMaterial.spendDate}/></em>
          </div>
        </div>
        <div className="landinghello">hello</div>
        <div style={this.cssStyling}>styling it using inline styling</div>
        <div className={style.modulestyle}>
          styling the component using module css
        </div>
      </>
    );
  }
}

export default Landing