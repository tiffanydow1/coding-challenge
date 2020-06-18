import React, { Component, Fragment } from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class Chart extends Component {

    render() {
        console.log(this.props.data, 'data in chart')
        return (
            <Fragment>
                <AreaChart width={1000} height={300} data={this.props.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorGradient" xl="0" yl="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis datakey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" stroke="#8884d8" fillOpacity={1} fill="url(#colorGradient)" />
                </AreaChart>
            </Fragment> 
        )
    }
}

export default Chart;