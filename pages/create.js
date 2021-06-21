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
    const res = [<Image src={image1} layout='intrinsic' alt="image" width={500} height={400} />
    ,<Image src={image2} layout='intrinsic' alt="image" width={300} height={200} />,
    'This is a note for the travel', 'This is other test note', 'Note3', 'Still have not video',];
    return <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <CreateNavbar/>
        <div className={classes.rootContainer}>
            <LeftDrop/>
            <div className={classes.pageContainer}>
                <BookPage resources={res} />
            </div>
            <AddModal/>
        </div>
    </div>
}