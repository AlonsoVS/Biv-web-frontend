import { Button, IconButton, makeStyles } from "@material-ui/core";
import { mdiClose, mdiChevronLeft, mdiChevronRight} from '@mdi/js';
import Icon from '@mdi/react'
import Image from "next/image";
import { useRouter } from "next/router";

const useStyles = makeStyles({
    expandedImage: {
        width: '100%',
        height: '100%',
        zIndex: 10,
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        padding: '4% 20%',
        background: '#000000de'
    },
    imageContent: {
        display: 'contents'
    },
    closeButton: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '1rem'
    },
    imageActionsButtons: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        zIndex: 20,
        width: '100%',
        position: 'fixed',
        '& Button': {
            color: 'white',
            padding: 0
        }
    },
    passButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%',
        width: '100%'
    }
});

function passImage(src, router, imageList) {
    const pathname = router.pathname;
    router.replace({
        pathname: pathname,
        query: { src: src, allImages: imageList }
    }, `${pathname}/?src=${src}`, { shallow: true });
};

export default function ExpandedImage(props) {
    const { image, close, prev, next, allImages } = props;
    const classes = useStyles();
    const router = useRouter();
    return <div className={classes.expandedImage}>
                <div className={classes.imageActionsButtons}>
                    <div className={classes.closeButton} onClick={close}>
                        <IconButton>
                            <Icon
                                path={mdiClose}
                                title='Close'
                                size={1}
                            />
                        </IconButton>
                    </div>
                    <div className={classes.passButtons}>
                        <IconButton onClick={()=>passImage(allImages[prev], router, allImages)}>
                            <Icon
                                path={mdiChevronLeft}
                                title='Previous Image'
                                size={3}
                            />
                        </IconButton>
                        
                        <IconButton onClick={()=>passImage(allImages[next], router, allImages)}>
                            <Icon
                                path={mdiChevronRight}
                                title='Next Image'
                                size={3}
                            />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.imageContent}>
                    <Image src={image} layout='intrinsic' alt="image" width={900} height={900} />
                </div>
            </div>
}