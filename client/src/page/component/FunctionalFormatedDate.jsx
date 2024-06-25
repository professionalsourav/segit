import React from "react";

export const Funformateddate = (props) =>{
function format(val){

    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    let parsed_date = new Date(Date.parse(val));

    let formated_value = `${parsed_date.getDate()}- ${months[parsed_date.getMonth()]}-${parsed_date.getFullYear()}`
      return formated_value
}

return (
  <>
    <h1>hello from functional fomateddate</h1>
    <p>{format(props.date)}</p>
  </>
);
}