import React from 'react';
import AddTransaction from './AddTransaction.jsx';
export default class BiggestTransaction extends React.Component{
     constructor(props){
         super(props);
        
     }
     
         
    
     render(){
         let max=0;
        
        for (let i=0; i<this.props.transactions.length; i++){
          if (this.props.transactions[i].PLN >max){
              max=this.props.transactions[i].PLN
          }
        }
       
    

    

         return <div>
                     <div>
                         The biggest transaction in PLN is {max}. 
                         This transaction amount is .
                     </div>
                </div>
     }
}