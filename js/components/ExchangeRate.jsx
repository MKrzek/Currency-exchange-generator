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
    componentWillMount(){
        fetch('http://api.nbp.pl/api/exchangerates/tables/A/?format=json')
        .then(r=>r.json())
        .then(data=>{
            console.log ('fetch')
            this.setState({
                euro: data[0].rates[7], 
                loaded: true,
            })
            
        })
    }
    render(){
    
        if (this.state.loaded===false){
            return null;
        }else{
    
        const exchangeRate=this.state.euro['mid']
        
        return <div >
               <div className='exchangeRate'>
               1 EURO costs {exchangeRate} PLN
               </div>
               <AddTransaction exchangeRate={exchangeRate}/>
               </div>
    }
}
}



