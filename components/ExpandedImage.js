import { IconButton, makeStyles } from "@material-ui/core";
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react'
import Image from "next/image";

const useStyles = makeStyles({
    expandedImage: {
        width: '100%',
        height: '100%',
        zIndex: 10,
        position: 'fixed',
        display: 'flex',
/*         flexDirection: 'column',
 */        justifyContent: 'center',
        padding: '4% 20%',
        background: '#000000de'
    },
    imageContent: {
        display: 'contents'
    },
    closeButton: {
        padding: 0
    }
});

export default function ExpandedImage(props) {
    const { image, close } = props;
    const classes = useStyles();
    return <div className={classes.expandedImage} onClick={close}>
                <div className={classes.imageContent}>
                    <Image src={image} layout='intrinsic' alt="image" width={900} height={900} />
                </div>
            </div>
}