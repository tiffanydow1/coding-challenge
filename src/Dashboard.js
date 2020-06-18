import React, { Component } from 'react';
import Chart from './Chart';
import { transactionData } from './transactionData';

class Dashboard extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        this.getData();
    }

        convertToCad = (item) => {
           switch(item.currency) {
               case 'BTC' : {
                   const amount = (item.amount * 12807.85);
                   return { ...item, amount}
               }
               case 'ETH': {
                   const amount = item.amount * 317.42;
                   return {...item, amount}
               }
               case 'CAD': {
                   return item
               }
               case 'null': {
                   return item
               }
               default:     
                return null
           }
        }

       determineCreditOrDebit = (item) => {
            switch(item.direction) {
                case 'debit': {
                    const amount = item.amount * -1;
                    return { ...item, amount};
                }
                case 'credit': {
                    return item
                }
                case 'null': {
                    if (item.to.currency === 'BTC') {
                        const amount = (item.to.amount * 12807.85);
                        return { ...item, amount};
                    } else if (item.to.currency === 'ETH') {
                        const amount = (item.to.amount * 317.42);
                        return {...item, amount};
                    } else if (item.to.currency === 'CAD') {
                        const amount = item.to.amount;
                        return {...item, amount};
                    }                  
                }
                default: 
                    return null
            }
        }


    getData = () => {
        const processedData = transactionData
            .map(this.determineCreditOrDebit)
            .map(this.convertToCad)
            .map((item, idx, source) => {
                const netWorth = source 
                    .slice(0, idx + 1)
                    .reduce((acc, curr) => acc + curr.amount, 0);
                
                return { amount: netWorth, date: item.date };
            });

            this.setState({
                data: processedData
            })
        
        console.log(processedData, 'proData')
    }
    

    render() {
        return (
            <div className="dashboard-container">
                <Chart data={this.state.data} />
            </div>
        )
    }
}

export default Dashboard;
