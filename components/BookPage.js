import { Button, makeStyles } from "@material-ui/core";
import Image from "next/image";
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
    const { resources } = props;
    const classes = useStyles();

    const handleCommentChange = (e) => {
        console.log("Comment Change! This is that comment says => ", e.target.value);
        e.preventDefault();
    }

    const currentTemplate = {
        id: '0000001',
        struct: [
            {
                name: 'Main Image',
                type: 'image',
                src: '/mainImage.jpg',
                style: {
                    width: 300,
                    height: 300
                },
                position: {
                    y: 10,
                    x: 10
                }
            },
            {
                name: 'title',
                type: 'text',
                src: 'Title Text',
                style: {
                    width: 'fit-content',
                    height: '10px',
                },
                position: {
                    y: 200,
                    x: 60
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