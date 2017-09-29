import React from 'react';
import TransactionList from './TransactionList.jsx';
export default class TransactionItem extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const name=this.props.name;
        const EURO=this.props.EURO;
        const PLN=this.props.PLN;
            return <li>
                    <span >{name}</span>
                    <span >{EURO}euros</span>
                    <span >{PLN}zl</span> 
                     </li>
        }
      
    }

