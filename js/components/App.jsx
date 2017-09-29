import React from 'react';
import Title from './Title.jsx';
import ExchangeRate from './ExchangeRate.jsx';
import AddTransaction from './AddTransaction.jsx';
import TransactionList from './TransactionList.jsx';


class App extends React.Component{
    render(){
        return <div>
                <Title />
                <ExchangeRate  />
                <AddTransaction />
                {/*<TransactionList />*/}
               
                </div>
    }}



module.exports = App;