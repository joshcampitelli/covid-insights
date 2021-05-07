import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: '24px',
        paddingRight: '5px'
    },
    item: {
        color: '#8884d8',
        fontSize: '24px'
    }
});

function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.title}>
            <Typography className={classes.name}>Covid Insights -</Typography>
            <Typography className={classes.item}>PPE</Typography>
            </div>
            
        </div>
    );
}

export default Header;
