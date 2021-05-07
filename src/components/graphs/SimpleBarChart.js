import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='75%'>
            <BarChart width={730} height={250} data={data}>
                <defs>
                    <linearGradient id='colorSupply' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#D41D2E' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#D41D2E' stopOpacity={0.5} />
                    </linearGradient>
                    <linearGradient id='colorDemand' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='2%' stopColor='#006064' stopOpacity={0.8} />
                        <stop offset='98%' stopColor='#006064' stopOpacity={0.5} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip cursor={{ fill: '#303030' }} />
                <Legend />
                <Bar dataKey='supply' fill='url(#colorSupply)' background={false} />
                <Bar dataKey='demand' fill='url(#colorDemand)' background={false} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default SimpleBarChart;