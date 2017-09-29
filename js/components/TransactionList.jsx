import React from 'react';
import AddTransaction from './AddTransaction.jsx';
import TransactionItem from './TransactionItem.jsx';

export default class TransactionList extends React.Component{
    constructor (props){
        super(props);
        
        
    }
    
     removeTransactions=()=>{
        if (typeof this.props.onDone==='function'){
            this.props.onDone(this.props.name)
        }
     }   
    


    
    render(){
      console.log(this.props.transactions)
        const transactionItems=this.props.transactions.map((transaction, index)=>{
            return<TransactionItem key={index} name={transaction.name}
                                    EURO={transaction.EURO} 
                                    PLN={transaction.PLN}
                                    onDone={this.removeTransactions}/>
                  
        })

        

        return <ul>
               {transactionItems}
               </ul>
    }
}



    
    
        

