import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        display: 'flex'
    },
    name: {
        color: 'white',
        fontSize: '24px',
        paddingRight: '5px'
    },
    item: {
        color: '#006064',
        fontSize: '24px'
    },
    description: {
        color: '#dcdcdc',
        fontSize: '20px',
    }
});

function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.title}>
                <Typography className={classes.name}>Covid Insights -</Typography>
                <Typography className={classes.item}>{props.item}</Typography>
            </div>
            <Typography className={classes.description}>{props.description}</Typography>
        </div>
    );
}

export default Header;
