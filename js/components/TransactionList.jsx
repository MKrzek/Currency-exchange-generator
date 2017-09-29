import React from 'react';
import TransactionItem from './TransactionItem.jsx';
import AddTransaction from './AddTransaction.jsx';
export default class TransactionList extends React.Component{
    constructor (props){
        super(props);

    }
    render(){
      
        const transactionItems=this.props.transactions.map((transaction, index)=>{
            return <TransactionItem key={index} name={transaction.name} EURO={transaction.EURO} PLN={transaction.PLN}/>
        })

        

        return <ul>
               {transactionItems}
               </ul>
    }
}



    
    
        

