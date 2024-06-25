import React from "react";



export class FormatedDate extends React.Component{


    constructor(props){
        super(props);
    }

    format(val){

           const months = ["JAN", "FEB", "MAR", "APR", "MAY","JUNE","JULY","AUG","SEPT","OCTBER","NOV","DEC"];



           let date_parse = new Date(Date.parse(val));
           let formatedd_date = `${date_parse.getDate()}-${months[date_parse.getMonth()]}-${date_parse.getFullYear()}`
           return formatedd_date;
    }

 
    render(){
        return(
            <>
            <h1>hello from class formateddate</h1>
            <b>today date is: </b><em>{this.format(this.props.date)}</em>    
                    </>
        )
    }
}


