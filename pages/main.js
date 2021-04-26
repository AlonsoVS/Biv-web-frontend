import React from 'react'
import Image from 'next/image'
import { Button } from '@material-ui/core'
import About from '../components/About'
import useStyles from '../styles/MainStyles'

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