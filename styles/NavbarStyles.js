import { makeStyles } from "@material-ui/core"

export default makeStyles({
    logContainer: {
        display: 'flex',
        margin: '0rem 0rem 0rem 12rem',
        "& Button": {
            padding: '6px 16px',
            borderRadius: '4px',
            textTransform: 'none',
        }
    },
    logoButton: {
        background: 'grey',
        height: '35px',
        width: '35px',
        margin: '0'
    },
    loginButton: {
        background: 'white',
        color: 'black',
    },
    selectContainer: {
        color: 'grey',
        margin: '0 12rem 0 4rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    selectNavButton: {
        color: 'grey',
        margin: '0rem 0.5rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        "&:focus": {
            color: 'rgb(45,168,146)'
        },
        "&:hover": {
            color: 'rgb(0,198,162)',
            textDecoration: 'none'
        }
    },
    signUpButton: {
        background: 'rgb(0,198,162)',
        width: 'max-content',
        "&:hover": {
            background: 'rgb(45,168,146)'
        }
    },
    toolbar: {
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto'
    }
});