import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: '2020-01',
    supply: 4000,
    demand: 2400,
    amt: 2400,
  },
  {
    date: '2020-02',
    supply: 3000,
    demand: 1398,
    amt: 2210,
  },
  {
    date: '2020-03',
    supply: 2000,
    demand: 9800,
    amt: 2290,
  },
  {
    date: '2020-04',
    supply: 2780,
    demand: 3908,
    amt: 2000,
  },
  {
    date: '2020-05',
    supply: 1890,
    demand: 4800,
    amt: 2181,
  },
  {
    date: '2020-06',
    supply: 2390,
    demand: 3800,
    amt: 2500,
  },
  {
    date: '2020-07',
    supply: 3490,
    demand: 4300,
    amt: 2100,
  },
];

export default class SimpleLineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart width={375} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D41D2E" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#D41D2E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Legend />
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="supply" stroke="#D41D2E" fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="demand" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
