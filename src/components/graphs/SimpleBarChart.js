import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Masks',
        supply: 4000,
        demand: 2400
    },
    {
        name: 'Hand Sanitizer',
        supply: 3000,
        demand: 1398
    },
    {
        name: 'Gloves',
        supply: 2000,
        demand: 9800
    },
    {
        name: 'Gowns',
        supply: 2780,
        demand: 3908
    },
    {
        name: 'Face Shields',
        supply: 1890,
        demand: 4800
    },
    {
        name: 'Wipes',
        supply: 2390,
        demand: 3800
    },
    {
        name: 'Hazmat',
        supply: 3490,
        demand: 4300
    }
]

export default class SimpleBarChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    render() {
        return (
            <ResponsiveContainer width='100%' height='75%'>
                <BarChart width={730} height={250} data={data}>
                    <defs>
                        <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D41D2E" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#D41D2E" stopOpacity={0.5} />
                        </linearGradient>
                        <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="2%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="98%" stopColor="#8884d8" stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' vertical={false} />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip cursor={{ fill: '#303030' }} />
                    <Legend />
                    <Bar dataKey='supply' fill="url(#colorSupply)" background={false} />
                    <Bar dataKey='demand' fill="url(#colorDemand)" background={false} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
