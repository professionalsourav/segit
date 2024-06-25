import React from "react";


function NFc (props) {

    function senfun (amount){


        return parseFloat(amount).toFixed(2);
    }

    return (
      <>
        <h1>helloooo from nested functional component</h1>

        <h3>{senfun(props.value)}</h3>
      </>
    );
}

export default NFc;