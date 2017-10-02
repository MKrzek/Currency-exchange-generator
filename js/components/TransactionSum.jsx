import React from 'react';
import AddTransaction from './AddTransaction.jsx';
export default class TransactionSum extends React.Component{
     constructor(props){
         super(props);

     }
     render(){
     let sumPLN=0;
     let sumEURO=0;

    
         return <div>
                  <div>
                    The sum of all PLN transactions: {sumPLN} 
                  </div>
                  <div>
                      The sum in of all EURO transactions: {sumEURO} 
                  </div>
                </div>
     }
}