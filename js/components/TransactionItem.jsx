import React from 'react';
import TransactionList from './TransactionList.jsx';
export default class TransactionItem extends React.Component{
    constructor(props){
        super(props);

    }
    handleRemoveClick=()=>{
       
        if (typeof this.props.onDone==='function'){
            this.props.onDone(this.props.name)
        }
        console.log ('remove click works')
    }
    render(){
        const name=this.props.name;
        const EURO=this.props.EURO;
        const PLN=this.props.PLN;

            return <li className='transactionItem'>
                       
                    <span className='transactionItemName'>{name}</span>
                    <span className='transactionItemEuro'>{EURO}€</span>
                    <span className='transactionItemPln'>{PLN}PLN</span>
                    <span className='removeButtonSpan'><button className='removeButton' onClick={this.handleRemoveClick}>Remove</button></span>
                     
                    </li>
        }


    }
