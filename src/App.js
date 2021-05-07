import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import Header from './components/Header';
import SimpleBarChart from './components/graphs/SimpleBarChart';
import SimpleLineChart from './components/graphs/SimpleLineChart';

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
        backgroundColor: '#8884d8',
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
    const graphs = [<SimpleLineChart />, <SimpleBarChart />];
    const descriptions = [];

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
            <Header />
            {graphs[graph]}
            <div className={classes.buttons}>
                <Button className={classes.button} onClick={prev}>Prev</Button>
                <Button className={classes.button} onClick={next}>Next</Button>
            </div>
        </div>
    );
}

export default App;
