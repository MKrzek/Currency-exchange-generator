import React from 'react';
import TransactionList from './TransactionList.jsx';
import ExchangeRate from './ExchangeRate.jsx';
export default class AddTransaction extends React.Component{
   constructor(props){
       super(props);
       this.state={
           name:'',
           EURO:0,
           transactions:[],
           PLN:0,


       }

    }
handleNameChange=(event)=>{
    let nameVal=event.target.value;
    this.setState({
        name:nameVal,

    })

}
handleAmountChange=(event)=>{
    let EUROVal=event.target.value;
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
handleAdd= event =>{
    event.preventDefault();
    const newTransaction = {name: this.state.name, EURO: this.state.EURO, PLN: this.state.PLN};
    const newTransactions=[...this.state.transactions, newTransaction ]
    this.setState({
        transactions: newTransactions,
    })


}     




handleRemoveTransaction= name =>{
    console.log('remove function works');
       this.setState({
          transactions:this.state.transactions.filter( transaction => transaction.name !== name)
      })
  }
  



   render(){

       return <div>
                <form>
                    <label>Name:
                        <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>Amount in Euros:
                        <input type='number' min='0' value={this.state.EURO} onChange={this.handleAmountChange}/>
                    </label>
                    <label>Amount in Zlotys:
                     <span>
                         {this.state.PLN}
                    </span>
                    </label>
                    <button onClick={this.handleAmountCalculate}>Calculate</button>
                    <input type='submit' onClick={this.handleAdd}/>
                </form>
                <TransactionList transactions={this.state.transactions} removeTransaction={this.handleRemoveTransaction}/>
              </div>
   }
}
