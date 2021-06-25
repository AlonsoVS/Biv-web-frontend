import { makeStyles } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { CreateDesignContext } from "../pages/create";
import Template, { createTemplate, editTemplate } from "./Template";

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
    const { tempResAdded } = useContext(CreateDesignContext);

    const [resources, setResources] = useState([
        /* { name: 'Main Image', type: 'image', src: '/mainImage.jpg' },
        { name: 'Second Image', type: 'image', src: '/secondImage.jpg' },
        { name: 'Third Image', type: 'image', src: '/thirdImage.jpg' },
        { name: 'Fourth Image', type: 'image', src: '/fourthImage.jpg' },
        { name: 'Title', type: 'text', src: 'Title Text' } */
    ]);

    const [currentTemplate, setCurrentTemplate] = useState(() => createTemplate(resources));

    useEffect(() => {
        if (tempResAdded) {
            setResources(() => {
                let newRes = resources;
                newRes.push(tempResAdded)
                return newRes;
            });

            const structure = currentTemplate.struct;
            structure.push({
                ...tempResAdded,
                style: { width: 300, height: 300 },
                position: { y: 300,x: 300 },
                src: '/defoultResource.jpg'
            });

            setCurrentTemplate(() => editTemplate(currentTemplate, structure));
        }
    }, [tempResAdded]);
    
    return <div className={classes.page}>
            <div className={classes.template}>
                <Template template={currentTemplate} />
            </div> 
    </div>
}