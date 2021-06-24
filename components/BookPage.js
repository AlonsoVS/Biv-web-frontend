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
    const classes = useStyles();
    const { tempResAdded } = useContext(CreateDesignContext);

    const [resources, setResources] = useState({
        image: [{ name: 'Main Image', type: 'image', src: '/mainImage.jpg' },
                { name: 'Second Image', type: 'image', src: '/secondImage.jpg' },
                { name: 'Third Image', type: 'image', src: '/thirdImage.jpg' },
                { name: 'Fourth Image', type: 'image', src: '/fourthImage.jpg' }],
        text: [{ name: 'title', type: 'text', src: 'Title Text' }]
    });

    useEffect(() => {
        if (tempResAdded) {
            const res = resources[tempResAdded.type];
            res.push(tempResAdded);
            setResources({[tempResAdded.type]: res, ...resources});
        }
    }, [tempResAdded]);

    const images = resources.image;
    const text = resources.text;

    const currentTemplate = {
        id: '0000001',
        struct: [
            {
                name: images[0].name,
                type: images[0].type,
                src: images[0].src,
                style: {
                    width: 300,
                    height: 300
                },
                position: {
                    y: 100,
                    x: 100
                }
            },
            {
                name: text[0].name,
                type: text[0].type,
                src: text[0].src,
                style: {
                    width: 'fit-content',
                    height: '10px',
                },
                position: {
                    y: 20,
                    x: 100
                }
            }
            
        ]
    };
    

    return <div className={classes.page}>
            <div className={classes.template}>
                <Template template={currentTemplate} />
            </div> 
    </div>
}