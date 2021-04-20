import React from 'react'
import Image from 'next/image'
import { makeStyles, Button } from '@material-ui/core'
import About from '../components/About';

const useStyles = makeStyles({
    floatContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        zIndex: '10',
    },
    mainImage: {
        color: 'white',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100%',
        position:'relative'
    },
    getStartedButton: {
        borderRadius: '4px',
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
    titleText: {
        fontSize: '64px'
    }
});

export default function Main() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.mainImage}>
                <div className={classes.floatContainer}>
                    <p className={classes.titleText}>Plan your trip</p>
                    <Button className={classes.getStartedButton} color="inherit">Get Started!</Button>
                </div>
                <Image src="/mainImage.jpg" alt="main-image" layout='fill' />
            </div>
            <About/>
        </div>
    );
}