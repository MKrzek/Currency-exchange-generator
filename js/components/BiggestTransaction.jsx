import React from 'react';
import AddTransaction from './AddTransaction.jsx';
export default class BiggestTransaction extends React.Component{
     constructor(props){
         super(props);
        
     }
     
         
    
     render(){
         let maxName='';
         let maxPLN=this.props.transactions.reduce((a, b)=>(a.PLN>b.PLN)? a.PLN : b.PLN, 0);
         for (let i=0; i<this.props.transactions.length; i++ ){
            if (this.props.transactions[i].PLN=maxPLN){
                maxName=this.props.transactions[i].name
            }
            console.log (maxName)
         }
         
         {/*maxPLN=Math.max.apply (Math, this.props.transactions.map((transaction)=>{
             return transaction.PLN
         }))*/}
         
        
         
         
        {/*for (let i=0; i<this.props.transactions.length; i++){
          if (this.props.transactions[i].PLN >maxPLN){
              maxPLN=this.props.transactions[i].PLN
              
              maxName=this.props.transactions[i].name
              console.log (maxName)
          }
        }
    console.log (maxPLN)*/}
    
         return <div>
                     <div>
                         The biggest transaction in PLN: {maxName}
                     </div>
                     <div>
                         The value of the biggest transaction in PLN is {maxPLN} zloty.
                     </div>
                </div>
     }
}