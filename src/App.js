import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import Header from './components/Header';
import SimpleBarChart from './components/graphs/SimpleBarChart';
import SimpleAreaChart from './components/graphs/SimpleAreaChart';

import AreaChartData from './test-data/areaChart';
import BarChartData from './test-data/barChart';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '0 30px',
        backgroundColor: '#040404'
    },
    button: {
        color: 'white',
        backgroundColor: '#006064',
        margin: '10px'
    },
    buttons: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function App() {
    const classes = useStyles();
    const [graph, setGraph] = useState(0);
    const graphs = [<SimpleAreaChart data={AreaChartData}/>, <SimpleBarChart data={BarChartData}/>];
    const items = [
        'PPE',
        'PPE'
    ]
    const descriptions = [
        'This is a description for the line chart, please review the data below.',
        'This is a description for the bar chart, please review the data below.'
    ];

    function next() {
        if (graph < graphs.length - 1) {
            setGraph(graph + 1);
        }
    }

    function prev() {
        if (graph > 0) {
            setGraph(graph - 1);
        }
    }

    return (
        <div className={classes.root}>
            <Header item={items[graph]} description={descriptions[graph]} />
            {graphs[graph]}
            <div className={classes.buttons}>
                <Button className={classes.button} onClick={prev}>Prev</Button>
                <Button className={classes.button} onClick={next}>Next</Button>
            </div>
        </div>
    );
}

export default App;
