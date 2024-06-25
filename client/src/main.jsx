import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing from './page/Landing.jsx'
import Nestedcomponent from "./page/NestedClassComponent.jsx"
import NFc from './page/NestedFunctionalComponent.jsx'
import { FormatedDate } from './page/component/ClassFormatedDate.jsx'
import { Funformateddate } from './page/component/FunctionalFormatedDate.jsx'
const name = "mango";
const mangoPrice = "15$";
const objMaterial = {
  
  name: "pinaple",
  price: 45.6,
  spendDate: new Date("2020-10-10")
};

const spendDate= new Date("2020-10-10");

const floatValue = 176.6898;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Landing name={name} price={mangoPrice} objMaterial={objMaterial} />
    {/* <Nestedcomponent value={floatValue}/> */}
    {/* <NFc value ={floatValue}/> */}
    {/* <FormatedDate date={spendDate}/> */}
    {/* <Funformateddate date={spendDate}/> */}
  </React.StrictMode>
);
