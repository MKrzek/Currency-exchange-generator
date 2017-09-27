import React from 'react';

export default class TransactionItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            transaction: this.props.transaction,
        }
    }
    render(){
        let transactions=this.props.transaction.map((transaction, index)=>{
            return <li>
                    <span key={index}>{this.props.transaction.name}</span>
                    <span key={index}>{this.props.transaction.amount}</span>
                     </li>
        })
      return <div>
             </div>
        
    }
}