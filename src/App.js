import { Button, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import Header from './components/Header';
import SimpleLineChart from './components/graphs/SimpleLineChart';
import SimpleAreaChart from './components/graphs/SimpleAreaChart';

const url = 'https://ltwoi9ffmb.execute-api.us-east-2.amazonaws.com/prod';

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
        alignItems: 'center'
    }
});

function App() {
    const classes = useStyles();
    const [graph, setGraph] = useState(0);
    const [areaChartData, setAreaChartData] = useState([]);
    const [barChartData, setBarChartData] = useState([]);

    const graphs = [<SimpleAreaChart data={areaChartData} />, <SimpleLineChart data={barChartData} />];
    const items = [
        'Cases vs Vaccines',
        'Housing'
    ]
    const descriptions = [
        'The COVID Vaccines administered vs. COVID Cases, per day, since January 2021 in Canada.',
        'The average house price per province, from 2014 to 2021, in Canada.'
    ];

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        // Fetch graph data from AWS Lambda, sample data shown in ./test-data/api-data.json
        try {
            let results = await fetch(url, {
                method: 'GET'
            });

            let result = await results.json();

            setAreaChartData(result.body['area-chart']);
            setBarChartData(result.body['line-chart']);
        } catch (error) {
            console.log(error);
        }
    }

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
