import React from 'react';
export default class CalculatedAmount extends React.Component{
  render(){

    return <div>
            
            <div>
            <label className='zlotysAmount'>Amount in Zlotys:
                <div className='zlotysAmountCalculated'>{this.props.PLN}</div>
            </label>
            </div>
            <div>
               <button  className="btn btn-success" type='submit' 
                         onClick={this.props.handleAdd}>Add to the transaction list</button>
            </div>
            </div>
  }
}