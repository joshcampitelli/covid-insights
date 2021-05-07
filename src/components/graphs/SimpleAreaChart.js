import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleAreaChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='75%'>
            <AreaChart width={375} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#006064' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#006064' stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#D41D2E' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#D41D2E' stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Legend />
                <XAxis dataKey='date' />
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <Tooltip />
                <Area type='monotone' dataKey='supply' stroke='#D41D2E' fillOpacity={1} fill='url(#colorPv)' />
                <Area type='monotone' dataKey='demand' stroke='#006064' fillOpacity={1} fill='url(#colorUv)' />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default SimpleAreaChart;