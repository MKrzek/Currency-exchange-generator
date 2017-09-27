import React from 'react';
export default class ExchangeRate extends React.Component{
    constructor (props){
        super(props);
        this.state={

        }
    }
    render(){
        return <div>
               1 EURO costs {this.props.exchangeRate}PLN
               </div>
    }
}