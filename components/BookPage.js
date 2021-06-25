import { makeStyles } from "@material-ui/core";
import { useState } from "react";
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
    const classes = useStyles();
    const [templateId, setTemplateId] = useState("00002");

    const onSaveCallback = (templateId) => {
        setTemplateId(() => templateId);
    }
    
    return <div className={classes.page}>
            <div className={classes.template}>
                <Template templateId={templateId} onSaveCallback={onSaveCallback} />
            </div> 
    </div>
}