import React from 'react';
import AddTransaction from './AddTransaction.jsx';

export default class ExchangeRate extends React.Component{
    constructor (props){
        super(props);
        this.state={
            euro:null,
            loaded: false,
        }
    }
    componentDidMount(){
        let apiURL='https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
        fetch(apiURL)
        .then(r=>r.json())
        .then(data=>{
            console.log ('fetch')
            const apiExchange=data[0].rates[7].mid;
            console.log (apiExchange)
            this.setState({
                euro: apiExchange,
                loaded: true,
            })
            console.log (this.state.euro)
            
        })
    }
    render(){
    
        if (this.state.loaded===false){
            return null;
        }else{
            let render=false;
            let stored=[];
            let storedTransactions=localStorage.getItem('newTransactions');
            if (storedTransactions){
                stored=JSON.parse(storedTransactions);
                render=true;
            }
        const exchangeRate=this.state.euro
        console.log (exchangeRate)
        
        return <div >
               <div className='exchangeRate text-warning'>
               1 EURO costs {exchangeRate} PLN
               </div>
               <AddTransaction exchangeRate={exchangeRate} storedTransactions={stored} render={render}/>
               </div>
    }
}
}



