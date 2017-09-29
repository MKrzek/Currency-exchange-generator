import React from 'react';
import TransactionItem from './TransactionItem.jsx';
import AddTransaction from './AddTransaction.jsx';
export default class TransactionList extends React.Component{
    constructor (props){
        super(props);

    }
    render(){
      
        const transactionItems=this.props.transactions.map((transaction)=>{
            return <TransactionItem key={transaction.name} name={transaction.name} amount={transaction.amount}/>
        })

        

        return <ul>
               {transactionItems}
               </ul>
    }
}



    
    
        

