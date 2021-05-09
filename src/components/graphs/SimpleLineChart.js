import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    graph: {
        display: 'flex',
        flex: 8
    }
});

/**
 * SimpleLineChart Component displays the ReChart bar chart with PPE Supply vs Demand data.
 * @param props destructured into { data }, for the array of json data that the chart displays.  
 */
const SimpleLineChart = ({ data }) => {
    const classes = useStyles();

    return (
        <ResponsiveContainer className={classes.graph} height={'100%'} width={'100%'}>
            <LineChart width={375} height={250} data={data}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <Legend />
                <XAxis dataKey='Year'/>
                <YAxis domain={[150000, 950000]} />
                <CartesianGrid strokeDasharray='3 3' vertical={false} />
                <Tooltip cursor={{ fill: '#303030' }} />
                <Line type='monotone' dataKey='British Columbia' stroke='green' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Ontario' stroke='orange' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Alberta' stroke='red' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Quebec' stroke='indigo' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Manitoba' stroke='magenta' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Saskatchewan' stroke='brown' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Novia Scotia' stroke='purple' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='Newfoundland' stroke='blue' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='PEI' stroke='forestgreen' fillOpacity={1} strokeWidth={2}/>
                <Line type='monotone' dataKey='New Brunswick' stroke='cyan' fillOpacity={1} strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default SimpleLineChart;