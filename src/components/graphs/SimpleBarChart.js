import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    graph: {
        display: 'flex',
        flex: 8
    }
});

const SimpleBarChart = ({ data }) => {
    const classes = useStyles();

    return (
        <ResponsiveContainer className={classes.graph} height={'100%'} width={'100%'}>
            <BarChart width={375} height={250} data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
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
                <Legend />
                <XAxis dataKey='name'/>
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <Tooltip cursor={{ fill: '#303030' }} />
                <Bar type='monotone' dataKey='supply' stroke='#D41D2E' fillOpacity={1} fill='url(#colorSupply)'/>
                <Bar type='monotone' dataKey='demand' stroke='#006064' fillOpacity={1} fill='url(#colorDemand)'/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default SimpleBarChart;