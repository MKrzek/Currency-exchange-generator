import React from 'react';
import TransactionList from './TransactionList.jsx';
import AddTransaction from './AddTransaction.jsx';

export default class TransactionItem extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleRemoveClick=()=>{
        if (typeof this.props.onDone==='function'){
            this.props.onDone(this.props.name)
        }
    }
    render(){
        const name=this.props.name;
        const EURO=this.props.EURO;
        const PLN=this.props.PLN;
        
            return <li>
                    <span >{name}</span>
                    <span >{EURO}euros</span>
                    <span >{PLN}zl</span> 
                    <button onClick={this.handleRemoveClick}>Remove Transaction</button>
                    </li>
        }
        
    }

