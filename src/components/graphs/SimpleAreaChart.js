import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    graph: {
        display: 'flex',
        flex: 8
    }
});

/**
 * SimpleAreaChart Component displays the ReChart AreaChart with Covid Vaccinations vs Cases.
 * @param props destructured into { data }, for the array of json data that the chart displays.  
 */
const SimpleAreaChart = ({ data }) => {
    const classes = useStyles();

    return (
        <ResponsiveContainer className={classes.graph} height={'100%'} width={'100%'}>
            <AreaChart width={375} height={250} data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                    <linearGradient id='colorVacc' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#006064' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#006064' stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id='colorCases' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='5%' stopColor='#D41D2E' stopOpacity={0.8} />
                        <stop offset='95%' stopColor='#D41D2E' stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Legend />
                <XAxis dataKey='date' />
                <YAxis yAxisId='left' />
                <YAxis yAxisId='right' orientation='right' />
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <Tooltip />
                <Area yAxisId='right' type='monotone' dataKey='cases' stroke='#D41D2E' fillOpacity={1} fill='url(#colorCases)' />
                <Area yAxisId='left'  type='monotone' dataKey='vaccines' stroke='#006064' fillOpacity={1} fill='url(#colorVacc)' />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default SimpleAreaChart;