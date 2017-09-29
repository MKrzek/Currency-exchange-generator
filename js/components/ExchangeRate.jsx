import React from 'react';
export default class ExchangeRate extends React.Component{
    constructor (props){
        super(props);
        this.state={
            
            
            currencies:null,
            loaded: false,
        }
    }
    componentWilllMount(){
        fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
        .then(r=>r.json())
        .then(data=>{
            console.log ('fetch')
            const currencies=data[0].rates.map((currency)=>{
                return {label:currency.currency, rate: currency.mid}
            })
            console.log (currencies)
            this.setState({
                currencies: data[0].rates,
                
                loaded: true,
            })
            
        })
    }
    render(){
    
        if (this.state.loaded===false){
            return null;
        }else{
    
        const exchangeRate=currencies.currencies['euro']
        
        return <div>
               1 EURO costs {exchangeRate}PLN
               </div>
    }
}
}



