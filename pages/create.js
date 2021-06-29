import { makeStyles } from "@material-ui/core"
import BookPage from "../components/BookPage"
import LeftDrop from "../components/LeftDrop"
import CreateNavbar from "../components/CreateNavbar"
import AddModal from "../components/AddModal";
import React, { useState } from "react";

const useStyles = makeStyles({
    root: { 
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    createContainer: {
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

export const CreateDesignContext = React.createContext(null);

export default function Create() {
    const classes = useStyles();

    const [tempResAdded, setTempResAdded] = useState(null);

    const addResource = (resource) => {
        setTempResAdded(() => resource);
    }

    return (
        <div
            className={classes.root}
            >
                <CreateDesignContext.Provider value={{ tempResAdded, addResource }}>
                    <CreateNavbar/>
                    <div className={classes.createContainer}>
                        <LeftDrop />
                        <div className={classes.pageContainer}>
                            <BookPage />
                        </div>
                        <AddModal/>
                    </div>
                </CreateDesignContext.Provider>
        </div>
    )
}