import { makeStyles } from "@material-ui/core"
import BookPage from "../components/BookPage"
import LeftDrop from "../components/LeftDrop"
import CreateNavbar from "../components/CreateNavbar"
import AddModal from "../components/AddModal";
import { useState } from "react";

import { IconButton } from "@material-ui/core";
import { mdiPlusCircleOutline } from "@mdi/js/commonjs/mdi";
import Icon from '@mdi/react';
import Image from "next/image";

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
    const image1 = '/mainImage.jpg';
    const image2 = '/netherlands.jpg';
    const res = {
                images: [{ name: 'Main Image', type: 'image', src: '/mainImage.jpg' },
                        { name: 'Second Image', type: 'image', src: '/secondImage.jpg' },
                        { name: 'Third Image', type: 'image', src: '/thirdImage.jpg' },
                        { name: 'Fourth Image', type: 'image', src: '/fourthImage.jpg' }],
                text: [{ name: 'title', type: 'text', src: 'Title Text' }]
            }
    const template = {};


    const addResource = (data) => {
        const resource = { name: data.src, type: data.type, src: data.src }
        res.push(resource);
    }

    return (
        <div
            style={{ 
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
                }}
            >
                <CreateNavbar/>
                <div className={classes.rootContainer}>
                    <LeftDrop addResource={addResource} resources={res} />
                    <div className={classes.pageContainer}>
                        <BookPage resources={res} />
                    </div>
                    <AddModal/>
                </div>
        </div>
    )
}