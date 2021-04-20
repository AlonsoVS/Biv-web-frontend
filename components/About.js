import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import AboutSubSection from './AboutSubSection';

const useStyles = makeStyles({
    about: {
        display: 'flex',
        flexDirection: 'column'
    },
    getStartedButton: {
        borderRadius: '4px',
        color: 'white',
        background: 'rgb(0,198,162)',
        fontSize: '16px',
        height: 'max-content',
        margin: '0 auto',
        padding: '6px 16px',
        width: 'max-content',
        "&:hover": {
            background: 'rgb(45,168,146)'
        }
    },
    description: {
        fontSize: '24px',
        fontWeight: 300,
        margin: '0 auto 2rem'
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '4rem 10rem 10rem'
    },
    textMessage: {
        fontSize: '36px',
        fontWeight: 500,
        margin: '0rem auto 2rem'
    },
    title: {
        fontSize: '48px',
        fontWeight: 500,
        margin: '4rem auto'
    }
});

export default function About(props) {
    const classes = useStyles();
    return(
        <div className={classes.about}>
            <p className={classes.title}>This is the About Section</p>
            <p className={classes.description}>This is a short text description about Biv</p>
            <AboutSubSection/>
            <div className={classes.messageContainer}>
                <p className={classes.textMessage}>Here will have a text message for users</p>
                <Button className={classes.getStartedButton} color="inherit">Get Started!</Button>
            </div>
        </div>
    );
}