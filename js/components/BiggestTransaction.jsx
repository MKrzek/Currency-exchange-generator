import React from 'react';
import AddTransaction from './AddTransaction.jsx';
export default class BiggestTransaction extends React.Component{
     constructor(props){
         super(props);
        
    }
         
    
     render(){
        const maxPLN=Math.max.apply (Math, this.props.transactions.map((transaction)=>
            transaction.PLN))
         {/*console.log(maxPLN)
         console.log (this.props.transactions)*/}
         
        {/*const maxName=this.props.transactions.forEach((transaction)=>{
            if (transaction.PLN===maxPLN){
                transaction.name
            }
        })*/}
        {/* const maxTrans=this.props.transactions.filter((transaction)=>transaction.PLN===maxPLN)
        const maxName=maxTrans.map((element)=>
        element.name)*/}
        let maxName='';
        for (let i=0; i<this.props.transactions.length;i++){
            {/*console.log (this.props.transactions[i])
            console.log (this.props.transactions[i].PLN)
            console.log (maxPLN)
            console.log (parseFloat(this.props.transactions[i].PLN)===parseFloat(maxPLN))*/}
            if (parseFloat(this.props.transactions[i].PLN)===maxPLN){
               
                maxName=this.props.transactions[i].name
                
            }
           
        }
        
        
         
   
         
        
         
        
        if (this.props.render==false||this.props.transactions.length===0){
            return null
            }else{
                return <div className='biggestTransaction'>
                            <div className='text-danger'>
                                The biggest transaction in PLN:
                           <div className='biggestTransactionName'>{maxName}</div>
                           </div>
                           <div className='text-warning'>
                                The value of the biggest transaction in PLN 
                             <div className='biggestTransactionAmount'>{maxPLN} </div>
                           </div>
                       </div>
     }
}
}
