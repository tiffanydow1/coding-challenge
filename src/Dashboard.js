import React, { Component } from 'react';
import { transactionData } from './transactionData';

class Dashboard extends Component {

    state = {
        'btc-rate': 12807.85,
        'eth-rate': 317.42,
        'netWorth': 0,
    }

    

     convertToCad = (item) => {
        switch(item.currency) {
            case 'BTC' : {
                const amount = item.amount * this.state["btc-rate"];
                console.log(amount, 'amount')
                return { ...item, amount}
            }
            case 'ETH': {
                const amount = item.amount * this.state["eth-rate"];
                return {...item, amount}
            }
        }
    }

    componentDidMount() {
        testData.map((item) => {
            this.convertToCad(item)
        });
    }
    


    render() {
        return (
            <div className="dashboard-container">

            </div>
        )
    }
}

export default Dashboard;

const testData = [
    {
        "createdAt": "2020-04-20T15:49:57.741Z",
        "amount": 100,
        "currency": "CAD",
        "type": "external account",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-04-09T18:31:25.776Z",
        "amount": 495,
        "currency": "CAD",
        "type": "external account",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-04-06T20:34:32.796Z",
        "amount": 0.002,
        "currency": "BTC",
        "type": "external account",
        "direction": "debit",
        "to": {
            "toAddress": "btc:2N2DZtj1SfcGkaeHA72eZAYBrFbyMZoHVmE"
        }
    },
    {
        "createdAt": "2020-03-16T18:30:59.575Z",
        "amount": 0.01,
        "currency": "BTC",
        "type": "peer",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-03-16T18:23:26.696Z",
        "amount": 5.21,
        "currency": "CAD",
        "type": "peer",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-03-16T18:20:00.253Z",
        "amount": 5.19,
        "currency": "CAD",
        "type": "peer",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-03-16T16:17:10.951Z",
        "amount": 5.19,
        "currency": "CAD",
        "type": "peer",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-03-01T08:09:31.970Z",
        "amount": 1,
        "currency": "CAD",
        "type": "external account",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-02-27T20:43:55.676Z",
        "amount": 1,
        "currency": "CAD",
        "type": "external account",
        "direction": "credit",
        "from": {
        }
    },
    {
        "createdAt": "2020-02-26T17:11:26.953Z",
        "amount": 999,
        "currency": "CAD",
        "type": "peer",
        "direction": "debit",
        "to": {
        }
    },
    {
        "createdAt": "2020-02-20T03:06:57.832Z",
        "amount": 18,
        "currency": "CAD",
        "type": "peer",
        "direction": "debit",
        "to": {
        }
    },
    {
        "createdAt": "2020-02-20T03:06:57.742Z",
        "amount": 0.00146125,
        "currency": "BTC",
        "type": "conversion",
        "direction": null,
        "from": {
            "currency": "BTC",
            "amount": 0.00146125
        },
        "to": {
            "currency": "CAD",
            "amount": 18
        }
    },
    {
        "createdAt": "2020-02-07T03:07:52.330Z",
        "amount": 5,
        "currency": "CAD",
        "type": "conversion",
        "direction": null,
        "from": {
            "currency": "CAD",
            "amount": 5
        },
        "to": {
            "currency": "BTC",
            "amount": 0.00038096
        }
    },
    {
        "createdAt": "2020-02-07T02:58:24.235Z",
        "amount": 5,
        "currency": "CAD",
        "type": "conversion",
        "direction": null,
        "from": {
            "currency": "CAD",
            "amount": 5
        },
        "to": {
            "currency": "BTC",
            "amount": 0.00038128
        }
    }
]