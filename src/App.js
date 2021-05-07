import { Button, makeStyles } from '@material-ui/core';
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
        'Cases vs Vaccines',
        'PPE'
    ]
    const descriptions = [
        'The COVID Vaccines administered vs. COVID Cases, per day, since January 2021 in Canada.',
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
