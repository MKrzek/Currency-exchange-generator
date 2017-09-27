import React from 'react';
import TransactionItem from './TransactionItem.jsx';

export default class AddTransaction extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:'',
           amount:'',
           list:[],

       }
    }   
handleNameChange=(e)=>{
    this.setState({
        name:event.target.value,
       
        
    })
    console.log (this.state.list)
}
handleAmountChange=(e)=>{
    this.setState({
        amount: event.target.value,
    
    })
   
}
handleAdd=(event)=>{
    let newList=[...this.state.list,{amount:this.amount, name:this.amount}]
    event.preventDefault();
    this.setState({
        list:newList
    })
    
}


   
   render(){
       return <div>
                <form>
                    <label>Name:
                        <input type='text' key={this.state.name} value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>Amount in Euros:
                        <input type='number' value={this.state.number} onChange={this.handleAmountChange}/>
                    </label>
                    <button onClick={this.handleAdd}>Add this transaction to the list</button>
                </form>
                <TransactionItem transaction={this.state.list}/>
              </div>
   }
}