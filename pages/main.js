import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@material-ui/core'
import About from '../components/About'
import useStyles from '../styles/MainStyles'
import Navbar from '../components/Navbar'
import LoginModal from '../components/LoginModal'
import { useRouter } from 'next/router'

export default function Main() {
    const classes = useStyles();
    const [openedLogin, setOpenedLogin] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setOpenedLogin(router.query.openLoginModal);
    }, [router.query.openLoginModal]);

    const handleOpenLogin = (operation) => {
        router.push(
            {
                pathname: router.pathname,
                query: {
                    operation: operation,
                    openLoginModal: true
                }
            }, 
            `/login?${operation}`, 
            { shallow: true })
    };

    return(
        <div>
            <Navbar openCloseLogin={handleOpenLogin}/>
            <div className={classes.mainImage}>
                <div className={classes.floatContainer}>
                    <p className={classes.titleText}>Plan your trip</p>
                    <Button className={classes.getStartedButton} color="inherit">Get Started!</Button>
                </div>
                <Image src="/mainImage.jpg" alt="main-image" layout='fill' />
            </div>
            <About/>
            {openedLogin && <LoginModal operation={router.query.operation}/>}
        </div>
    );
}