import React from 'react';

export default class TransactionItem extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const name=this.props.name;
        const key= this.props.key;
        const amount=this.props.amount;

            return <li>
                    <span key={key}>{name}</span>
                    <span key={key}>{amount}</span>
                     </li>
        }
      
    }

