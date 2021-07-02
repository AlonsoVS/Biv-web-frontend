import { makeStyles } from "@material-ui/core"
import BookPage from "../components/BookPage"
import LeftDrop from "../components/LeftDrop"
import CreateNavbar from "../components/CreateNavbar"
import AddModal from "../components/AddModal";
import React, { useEffect, useState } from "react";
import axios from "axios";

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

    const url = 'http://localhost:8080/biv/api/books';

    const [book, setBook] = useState(() => null);

    const saveBook = () => {
        return axios.post(`${url}/save`, book);
    }

    const chargeBook = async (id) => {
        const response = await axios.get(`${url}/id/${id}`);
        setBook(() => response.data);
    }

    const [bookId, setBookId] = useState(2222);

    useEffect(() => {
        if (bookId) chargeBook(bookId);
    }, [bookId]);

    const [tempResAdded, setTempResAdded] = useState(null);

    const addResource = (resource) => {
        if (book) setTempResAdded(() => resource);
    }

    const [saveQueue, addToSaveQueue] = useState([]);

    const [saveState, setSaveState] = useState(false);


    const restartSaveState = async () => {
        await Promise.all(saveQueue);
        setSaveState(() => false);
        addToSaveQueue([]);
    }

    const addToSave = (element) => {
        addToSaveQueue(() => {
            let queue = saveQueue;
            queue.push(element);
            return queue;
        });
    }

    useEffect(() => {
        if (saveState) {
            addToSave(saveBook());
            restartSaveState();
        }
    }, [saveState]);

    const onSaveCallback = () => {
        setSaveState(() => true);
    }

    return (
        <div
            className={classes.root}
            >
                <CreateDesignContext.Provider 
                    value={{ 
                        tempResAdded,
                        addResource,
                        saveState,
                        addToSave
                    }}>
                    <CreateNavbar handleSave={onSaveCallback}/>
                    <div className={classes.createContainer}>
                        <LeftDrop />
                        <div className={classes.pageContainer}>
                            {
                            book 
                                && 
                            book.pages.map(page => 
                                            <BookPage pageNumber={page.num} templateId={page.templateId} />)
                            }
                        </div>
                        <AddModal/>
                    </div>
                </CreateDesignContext.Provider>
        </div>
    )
}