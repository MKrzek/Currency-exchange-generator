import React from 'react';
import TransactionList from './TransactionList.jsx';
import ExchangeRate from './ExchangeRate.jsx';
import BiggestTransaction from './BiggestTransaction.jsx';
import TransactionSum from './TransactionSum.jsx';
import {Buttons, Forms} from 'react-bootstrap';

export default class AddTransaction extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:'',
           EURO:'',
           PLN:'',
           render: this.props.render,
           transactions:this.props.storedTransactions,
       }
       

 }

handleNameChange=(event)=>{
    let nameVal=event.target.value;
    this.setState({
        name:nameVal,
    })
    

}
handleAmountChange=(event)=>{
    let EUROVal=event.target.value.replace("^-?(?!0.)\\d+$");
    this.setState({
        EURO: EUROVal,

    })

}
handleAmountCalculate=(e)=>{
    e.preventDefault()
    this.setState({
        PLN: (this.state.EURO * this.props.exchangeRate).toFixed(2),
    })
    
}
handleAdd= (event) =>{
    event.preventDefault(); 
        const newTransaction = {name: this.state.name, EURO: this.state.EURO, PLN: this.state.PLN};
        const newTransactions=[...this.state.transactions, newTransaction];
        localStorage.setItem('newTransactions', JSON.stringify(newTransactions))
    
        this.setState({
        transactions: newTransactions,
        render: true,    
    })
}
 

handleRemoveTransaction= (name) =>{
    console.log('remove function works');
       {/*this.setState({
          transactions:this.state.transactions.filter( (transaction) => transaction.name !== name)
      }) */}
    let storedTransactions=JSON.parse(localStorage.getItem('newTransactions'));
    storedTransactions=storedTransactions.filter((transaction)=>transaction.name!==name)
    localStorage.setItem('newTransactions', JSON.stringify(storedTransactions));
    this.setState({
        transactions: storedTransactions,
    })

  }


   render(){
   
       return <div> 
                 <form>
                   
                    <label>Name of the transaction:
                        <input  type='text' value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label >Amount in Euros:
                        <input className='transactionEuroAmount' type='number' min='0' value={this.state.EURO} onChange={this.handleAmountChange}/>
                    </label>   
                </form>
               
                <div>
                      <button  className="btn btn-primary" onClick={this.handleAmountCalculate}>Calculate</button>
                </div>
                <div>
                    <label className='zlotysAmount'>Amount in Zlotys:
                         <div className='zlotysAmountCalculated'>
                                 {this.state.PLN}
                        </div>
                    </label>
                </div>
                <div>
                    <button  className="btn btn-success" type='submit' onClick={this.handleAdd}>Add to the transaction list</button>
                </div>
               <div>
                    <TransactionList transactions={this.state.transactions} removeTransaction={this.handleRemoveTransaction} />
                </div>
                <div>
                    <BiggestTransaction transactions={this.state.transactions} render={this.state.render}/>
                </div>
                <div>
                    <TransactionSum transactions={this.state.transactions} render={this.state.render}/>
                </div>
              </div>
   }
}
