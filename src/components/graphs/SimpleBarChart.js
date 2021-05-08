import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    graph: {
        display: 'flex',
        flex: 8
    }
});

/**
 * SimpleBarChart Component displays the ReChart bar chart with PPE Supply vs Demand data.
 * @param props destructured into { data }, for the array of json data that the chart displays.  
 */
const SimpleBarChart = ({ data }) => {
    const classes = useStyles();

    return (
        <ResponsiveContainer className={classes.graph} height={'100%'} width={'100%'}>
            <BarChart width={375} height={250} data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <Legend />
                <XAxis dataKey='name'/>
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <Tooltip cursor={{ fill: '#303030' }} />
                <Bar type='monotone' dataKey='supply' stroke='#D41D2E' fillOpacity={1} fill='#D41D2ECC'/>
                <Bar type='monotone' dataKey='demand' stroke='#006064' fillOpacity={1} fill='#006064CC'/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default SimpleBarChart;