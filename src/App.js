import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import SimpleLineChart from './components/SimpleLineChart';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '0 30px',
        backgroundColor: '#040404'
    },
    header: {
        height: '100px',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: '24px',
        paddingRight: '5px'
    },
    item: {
        color: '#8884d8',
        fontSize: '24px'
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

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title}>Covid Insights -</Typography>
                <Typography className={classes.item}>PPE</Typography>
            </div>
            <SimpleLineChart />
            <div className={classes.buttons}>
                <Button className={classes.button}>Prev</Button>
                <Button className={classes.button}>Next</Button>
            </div>
        </div>
    );
}

export default App;
