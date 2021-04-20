import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    description: {
        fontSize: '24px',
        fontWeight: 400
    },
    imageContainer: {
        background: 'grey',
        height: '424px',
        width: '450px'
    },
    subsection: {
        background: 'rgb(249,249,249)',
        display: 'flex',
        justifyContent: 'space-between',
        height: '424px',
        width: '100%',
        margin: '4rem 0'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 24rem'
    },
    title: {
        color: 'rgb(45,168,146)',
        fontSize: '36px',
        fontWeight: 500
    }
});

export default function AboutSubSection(props) {
    const classes = useStyles();
    return(
        <div className={classes.subsection}>
            <div className={classes.textContainer}>
                <p className={classes.title}>This is an about subsection</p>
                <p className={classes.description}>This will be the Text Description</p>
            </div>
            <div className={classes.imageContainer}></div>
        </div>
    );
}