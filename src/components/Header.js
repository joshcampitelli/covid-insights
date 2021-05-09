import { makeStyles, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    header: {
        minHeight: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: props => {
        const css = {
            display: 'flex',
            alignItems: 'center'
        }

        if (!props.isDesktop) {
            css.flexDirection = 'column';
        }

        return css;
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
    description: props => {
        const css = {
            color: '#dcdcdc',
            fontSize: '20px',
        }

        if (!props.isDesktop) {
            css.padding = '0 10px 10px 10px';
            css.fontSize = '16px';
        }

        return css;
    }
}));

function Header(props) {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const classes = useStyles({ ...props, isDesktop });

    return (
        <div className={classes.header}>
            <div className={classes.title}>
                <Typography className={classes.name}>Covid Insights:</Typography>
                <Typography className={classes.item}>{props.item}</Typography>
            </div>
            <Typography className={classes.description}>{props.description}</Typography>
        </div>
    );
}

export default Header;
