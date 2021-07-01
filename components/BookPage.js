import { makeStyles } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { CreateDesignContext } from "../pages/create";
import Template from "./Template";

const useStyles = makeStyles({
    page:{
        background: '#F3F3F3',
        width: '1000px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignSelf: 'center',
        alignItems: 'center'
    },
    template: {
        width: '100%',
        height: '100%',
        background: 'rgba(250, 231, 204, 0.33)',
        position: 'absolute'
    }
});

export default function BookPage(props) {
    const { saveState, addToSave } = useContext(CreateDesignContext);
    const classes = useStyles();
    const [templateId, setTemplateId] = useState(props.templateId);
    const [pageNumber, setPageNumber] = useState(props.pageNumber);

    const onSaveCallback = (templateId) => {
        setTemplateId(() => templateId);
    }

    const apiRequest = () => {
        return new Promise((resolve) => {
            // Here the templateId should be saved in database
            setTimeout(() => {
                console.log("BookPage Saved!");
            }, 2000);
        });
    }

    useEffect(() => {
        if (saveState) addToSave(apiRequest());
    }, [templateId]);
    
    return <div className={classes.page}>
            <div className={classes.template}>
                <Template templateId={templateId} onSaveCallback={onSaveCallback} />
            </div> 
    </div>
}