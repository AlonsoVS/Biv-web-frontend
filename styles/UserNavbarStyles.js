import { makeStyles } from "@material-ui/core"

export default makeStyles({
    inputInput: {
        padding: '6px 16px 7px 160px'
    },
    inputRoot: {
        width: '100%'
    },
    logContainer: {
        display: 'flex',
        "& Button": {
            textTransform: 'none',
            padding: '0',
        },
        alignItems: 'center',
    },
    logoButton: {
        background: 'grey',
        height: '35px',
        width: '35px',
        margin: '0 1rem 0 0'
    },
    loginButton: {
        background: 'white',
        color: 'black',
    },
    travelTitleField: {
        height: 'fit-content',
        width: 'min-content'
    },
    travelTitleInput: {
        width: 'fit-content',
        height: '30px',
        maxWidth: '250px',
        padding: '4px',
        '&:hover': {
            border: '1px solid rgb(0,198,162)',
            borderRadius: '2px'
        },
        '&:focus': {
            outline: 'thin',
            border: '1px solid rgb(0,198,162)',
            borderRadius: '2px'
        }
    },
    search: {
        color: 'grey',
        position: 'relative',
        borderRadius: '32px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: '#00c6a214',
        },
        alignItems: 'center',
        display: 'flex',
        border: 'grey 1.5px solid',
        margin: 'auto',
        width: '550px',
        height: '38px'
    },
    searchIcon: {
        color: 'white',
        cursor: 'pointer',
        borderRadius: '32px',
        background: 'rgb(0,198,162)',
        padding: '1rem',
        height: '30px',
        marginLeft: '2px',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 8px 0.4px rgb(0 0 0 / 20%), inset 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%)',
    },
    selectContainer: {
        color: 'grey',
        display: 'flex',
        alignItems: 'center',
        '& Button': {
            '& hover': {
                color: 'white'
            }
        }
    },
    selectNavButton: {
        color: 'grey',
        margin: '0rem 1rem 0rem 0rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    toolbarDelimiter: {
        background: '#bcbcbc',
        height: '1.5px',
        width: '100%',
    },
    userName: {
        marginLeft: '8px'
    },
    customUserIcons: {
        color: 'grey',
        display: 'flex',
        alignItems: 'center',
        "&:hover": {
            color: 'rgb(0,198,162)',
        },
        cursor: 'pointer',
        margin: '0px 12px 0px 0',
        padding: '0'
    },
    travelTitle: {
        color: 'grey',
        position: 'relative',
        borderColor: 'black',
        height: '50px',
        backgroundColor: 'transparent',
        '&:checked': {
            backgroundColor: '#00c6a214',
        },
        alignItems: 'center',
        display: 'flex',
        margin: 'auto',
    },
});