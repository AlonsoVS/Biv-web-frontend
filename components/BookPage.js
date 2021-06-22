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
    resource: {
        fontSize: 'large',
        width: 'fitContent',
        height: 'fitContent'
    },
    noteField: {
        width: '300px !important',
        height: 'fit-content !important',
        border: 'none',
        overflow: 'visible',
        resize: 'none',
        fontSize: 'large',
        background: 'none',
        position: 'absolute',
        top: '350px',
        left: '20px',
        transform: 'rotate(-30deg)'
    },
    noteField_1: {
        width: '300px !important',
        height: 'fit-content !important',
        border: 'none',
        overflow: 'visible',
        resize: 'none',
        fontSize: 'large',
        background: 'none',
        position: 'absolute',
        top: '420px',
        left: '210px'
    },
    noteField_2: {
        width: '400px !important',
        height: 'fit-content !important',
        border: 'none',
        overflow: 'visible',
        resize: 'none',
        fontSize: 'large',
        background: 'none',
        position: 'absolute',
        top: '470px',
        left: '150px'
    },
    noteField_3: {
        width: '300px !important',
        height: 'fit-content !important',
        border: 'none',
        overflow: 'visible',
        resize: 'none',
        fontSize: 'large',
        background: 'none',
        position: 'absolute',
        bottom: '250px',
        right: '90px'
    },
    noteField_4: {
        width: '200px !important',
        height: 'fit-content !important',
        border: 'none',
        overflow: 'visible',
        resize: 'none',
        fontSize: 'large',
        background: 'none',
        position: 'absolute',
        bottom: '46px',
        left: '280px'
    },
    locationFieldContainer: {
        position: 'absolute',
        width: '390px',
        height: '56px',
        background: '#FFE9E4',
        top: '0px',
        right: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 5% 50%, 0% 0%)'
    },
    locationField: {
        width: '350px !important',
        height: 'fit-content !important',
        border: 'none',
        overflow: 'visible',
        resize: 'none',
        fontSize: 'xx-large',
        background: 'none',
        position: 'relative',
        textAlign: 'center',
        margin: '5px',
        fontWeight: 'lighter'
    },
    template: {
        width: '100%',
        height: '100%',
        background: 'rgba(250, 231, 204, 0.33)',
        position: 'absolute'
    },
    image1: {
        width: '220px',
        height: '180px',
        transform: 'rotate(335deg)',
        marginRight: '-20px'
    },
    image2: {
        width: '220px',
        height: '180px',
        transform: 'rotate(23deg)',
        marginLeft: '-20px'
    },
    imagesContainer: {
        display: 'flex',
        alignItems: 'baseline',
        position: 'absolute',
        top: '100px',
        left: '50px'
    },
    imageMain: {
        display: 'flex',
        height: '300px',
        width: '300px',
        position: 'absolute',
        top: '212px',
        right: '90px'
    },
    imageCircle: {
        display: 'flex',
        height: '200px',
        width: '200px',
        position: 'absolute',
        bottom: '50px',
        left: '60px',
        background: 'blue',
        borderRadius: '50%'
    },
    imageCircleContent:{
        borderRadius: '50%'
    },
    imageBottomRight: {
        right: '132px',
        width: '220px',
        bottom: '14px',
        height: '210px',
        display: 'flex',
        position: 'absolute'
    },
    subtitleDesign: {
        fontSize: 'xxx-large',
        textAlign: 'center',
        position: 'absolute',
        top: '124px',
        right: '8px',
        border: 'none',
        resize: 'none',
        background: 'none'
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
                    height: 300,
                    position: 'absolute',
                    top: 200,
                    right: 200
                }			
            },
            // {
            //     name: 'title',
            //     type: 'text',
            //     src: 'Title Text',
            //     style: {
            //         width: 300,
            //         height: 300,
            //         position: 'absolute',
            //         top: '100px',
            //         right: '200px'
            //     }		
            // }
            
        ]
    };
    

    return <div className={classes.page}>
            <div className={classes.template}>
                {/* <div className={classes.locationFieldContainer}>
                    <textarea
                        className={classes.locationField}
                        maxlength={22}
                        name='Location'
                        rows='1'
                        onChange={handleCommentChange}
                        placeholder='Location'>
                    </textarea>
                </div>
                <div className={classes.imagesContainer}>
                    <div className={classes.image1}>
                        {resources[0]}
                    </div>
                    <div className={classes.image2}>
                        {resources[1]}
                    </div>
                </div>
                <textarea
                    className={classes.noteField}
                    maxlength={90}
                    name='Note'
                    rows='3'
                    onChange={handleCommentChange}
                    placeholder='Note'>
                </textarea>
                <textarea
                    className={classes.noteField_1}
                    maxlength={30}
                    name='Note'
                    rows='1'
                    onChange={handleCommentChange}
                    placeholder='Note 1'>
                </textarea>
                <textarea
                    className={classes.noteField_2}
                    maxlength={328}
                    name='Note'
                    rows='8'
                    onChange={handleCommentChange}
                    placeholder='Note 2'>
                </textarea>
                <textarea 
                    className={classes.subtitleDesign}
                    placeholder='Subtitle Design'
                    name='Subtitle Design'
                    maxLength={20}
                    rows='1'
                />
                <div className={classes.imageMain}>
                    <Image src='/mainImage.jpg' layout='fill'/>
                </div>
                <textarea
                    className={classes.noteField_3}
                    maxlength={150}
                    name='Note'
                    rows='5'
                    onChange={handleCommentChange}
                    placeholder='Note 3'>
                </textarea>
                <div className={classes.imageCircle}>
                    <Image className={classes.imageCircleContent} src='/cechRepublic.jpg' layout='fill'/>
                </div>
                <textarea
                    className={classes.noteField_4}
                    maxlength={200}
                    name='Note'
                    rows='10'
                    onChange={handleCommentChange}
                    placeholder='Note 4'>
                </textarea>
                <div className={classes.imageBottomRight}>
                    <Image src='/tranvia.jpg' layout='fill'/>
                </div> */}

                <Template template={currentTemplate} />
            </div> 
    </div>
}