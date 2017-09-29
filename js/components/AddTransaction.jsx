import React from 'react';
import TransactionList from './TransactionList.jsx';

export default class AddTransaction extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:'',
           amount:'',
           transactions:[],

       }
    }   
handleNameChange=(event)=>{
    let nameVal=event.target.value;
    this.setState({
        name:nameVal,
       
        
    })
    console.log (this.state.list)
}
handleAmountChange=(event)=>{
    let amountVal=event.target.value;
    this.setState({
        amount: amountVal,
    
    })
   
}
handleAdd=(event)=>{
    event.preventDefault();
    this.setState({
        transactions:[...this.state.transactions, {name: this.state.name, amount: this.state.amount}]
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
                <TransactionList transactions={this.state.transactions}/>
              </div>
   }
}