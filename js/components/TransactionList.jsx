import React from 'react';
import AddTransaction from './AddTransaction.jsx';
import TransactionItem from './TransactionItem.jsx';
import {Pagelayout} from 'react-bootstrap';

export default class TransactionList extends React.Component{
    constructor (props){
        super(props);
          
    }
    render(){
      
        const transactionItems=this.props.transactions.map((transaction, index)=>{
            return<TransactionItem key={index} name={transaction.name}
                                    EURO={transaction.EURO} 
                                    PLN={transaction.PLN}
                                   onDone={this.props.removeTransaction}/>
                  
        })

        

        return <ol>
               {transactionItems}
               </ol>
    }
}

