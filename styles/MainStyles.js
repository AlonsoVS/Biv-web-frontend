import { makeStyles } from '@material-ui/core'

export default makeStyles({
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