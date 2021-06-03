import { makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useState } from "react";
import LoginForm from "./LoginForm";


const useStyles = makeStyles({
    rootLogin: {
        top: '0%',
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: '10',
        position: 'fixed',
        justifyContent: 'center'
    },
    loginBackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: '#0000009e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        width: '450px',
        background: 'white',
        position: 'absolute',
        zIndex: '10',
        borderRadius: '10px',
        top: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    modeButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    modeButton: {
        display: 'flex',
        width: '100%',
        padding: '25px',
        border: '1px solid rgba(127, 127, 127, 1)',
        cursor: 'pointer',
        position: 'relative',
        justifyContent: 'center'
    },
    modeButtonSelected: {
        border: 'none',
        color: 'rgb(45,168,146)'
    },
    modeButtonLeft: {
        borderRadius: '10px 0px 15px 0px',
    },
    modeButtonRight: {
        borderRadius: '0px 10px 0px 15px',
    },
    closeButton: {
        padding: '4px',
        minWidth: '0',
        minHeight: '0',
        position: 'absolute',
        top: '6px',
        right: '6px',
        color: 'grey',
        width: '28px',
        height: '28px'
    }
});

export default function LoginModal(props) {

    const { operation } = props;
    
    const classes = useStyles();
    const router = useRouter();

    const [loginType, setLoginType] = useState(operation);

    const handleClose = () => {
        router.back();
    }

    return <div className={classes.rootLogin} >
        <div className={classes.loginBackground} onClick={handleClose}>
        </div>
        <div className={classes.loginCard}>
            <div className={classes.modeButtonsContainer}>
                <a 
                    className={clsx(
                            classes.modeButton, 
                            classes.modeButtonLeft, 
                            loginType == 'sign in'? classes.modeButtonSelected : '')}
                    onClick={()=>setLoginType("sign in")}
                >
                    Sign In
                </a>
                <a 
                    className={clsx(
                            classes.modeButton, 
                            classes.modeButtonRight,
                            loginType == 'sign up'? classes.modeButtonSelected : '')}
                    onClick={()=>setLoginType("sign up")}
                >
                    Sign Up
                </a>
            </div>
            <LoginForm loginType={loginType} operationTitle={loginType == 'sign up' ? 
                                                                        'Create your account'
                                                                        : 'Sign in to your account'}/>
        </div>
    </div>
}