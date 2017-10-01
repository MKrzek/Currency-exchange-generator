import React from 'react';
export default class TransactionSum extends React.Component{
     constructor(props){
         super(props);

     }
     render(){
         return <div>
                  <div>
                    The sum of all PLN transactions is 
                  </div>
                  <div>
                      The sum in of all EURO transactions is 
                  </div>
                </div>
     }
}