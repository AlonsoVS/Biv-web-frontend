import { makeStyles } from "@material-ui/core"
import BookPage from "../components/BookPage"
import LeftDrop from "../components/LeftDrop"
import UserNavbar from "../components/UserNavbar"

const useStyles = makeStyles({
    rootContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        position: 'relative',
        alignItems: 'center',
        overflow: 'hidden'
    },
    pageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        marginLeft: '-30px',
        overflow: 'auto'
    }
});

export default function Create() {
    const classes = useStyles();
    return <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <UserNavbar/>
        <div className={classes.rootContainer}>
            <LeftDrop/>
            <div className={classes.pageContainer}>
                <BookPage/>
            </div>
        </div>
    </div>
}