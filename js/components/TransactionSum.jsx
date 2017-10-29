import React from 'react';
import AddTransaction from './AddTransaction.jsx';
export default class TransactionSum extends React.Component{
     constructor(props){
         super(props);
        
     }
     
     render(){
     let sumPLN=0
     for (let i=0; i<this.props.transactions.length; i++){
          sumPLN= (parseFloat(sumPLN) + parseFloat(this.props.transactions[i].PLN)).toFixed(2)
     }
     let sumEURO=0;
     for (let i=0; i<this.props.transactions.length;i++){
         sumEURO= parseInt(sumEURO) + parseInt(this.props.transactions[i].EURO)
     }
     
     if (this.props.render==false||this.props.transactions.length===0){
         return null
     }else{
        return <div className='sumTransaction'>
                  <div className='text-success'>
                    The sum of all PLN transactions:
                          <div className='sumTransactionPln'>{sumPLN}</div>
                  </div>
                  <div className='text-info'>
                      The sum in of all EURO transactions: 
                         <div className='sumTransactionEuro'>{sumEURO}</div>
                  </div>
                </div>
     }
}}