import { Button, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'
import { mdiCommentTextMultiple } from '@mdi/js'
import Icon from '@mdi/react'
import { useRouter } from 'next/router'

const useStyles = makeStyles({
    travel: {
        background: '#F3F3F3',
        display: 'flex',
        flexDirection: 'row',
        width: '85%',
        height: '300px',
        maxWidth: '1024px',
        margin: '1.5rem 0'
    },
    collageImages: {
        display: 'grid',
        width: '50%',
        height: '100%',
        gridTemplateRows: 'repeat(2,auto)',
        gridTemplateColumns: 'repeat(2,auto)',
    },
    textContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& Button': {
            borderRadius: '2px'
        },
        cursor: 'pointer'
    },
    generalLocation: {
        color: '#474747',
        padding: '0 3rem',
        width: '100%'
    },
    description: {
        color: '#525252',
        fontWeight: '300',
        width: '100%',
        padding: '0.3rem 3rem',
        fontSize: 'smaller'
    },
    continueButton: {
        color: 'white',
        backgroundColor: 'rgb(0,198,162)',
        width: '110px',
        margin: '2rem 0 0'
    },
    commentsButton: {
        color: '#5f5f5f',
        '& hover': {
            color: 'rgb(0,198,162)'
        },
        cursor: 'pointer',
        alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontVariant: 'oldstyle-nums'
    },
    createDate: {
        color: 'white',
        background: '#808080',
        borderRadius: '1px',
        fontSize: 'x-small',
        padding: '3px',
        height: 'fit-content',
    },
    infoButtons: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.3rem 3rem',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoSupButtons: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.3rem 3rem',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    finishIcon: {
        background: '#2DA892',
        color: 'white',
        borderRadius: '1px',
        fontSize: 'small',
        padding: '3px',
        height: 'fit-content',
    },
    image: {
        cursor: 'pointer'
    }
});

export default function Travel(props) {
    const classes = useStyles();
    const router = useRouter();
    let { finished, comments, date, generalLocation, images, resume, started, pathname } = props;
    images = ["/riverAndHouse.jpg",
    "/cechRepublicChurch.jpg",
    "/cechRepublic.jpg",
    "/netherlandsBike.jpg"];
    started = false;
    finished = !started;
    date = '27-04-2021';
    generalLocation = 'General Location';
    comments = 0;
    resume = `Description. This text can be  very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, very, very, very, 
                very, very, very, very, very, very, very, very, long...`;
    return <div className={classes.travel}>
                <div className={classes.collageImages}>
                    {images.map(image => 
                    <Image
                        className={classes.image}
                        /* onClick={()=>router.push(`${pathname}/?src=${image}`, undefined, { shallow: true })} */
                        onClick={()=>router.push({
                            pathname: pathname,
                            query: { src: image, allImages: images }
                        }, `${pathname}/?src=${image}`, { shallow: true })}
                        src={image} layout='responsive'  alt="image" width='50' height='50' />)}
                </div>
                <div className={classes.textContent}>
                    <div className={classes.infoSupButtons}>
                        {finished && <div className={classes.finishIcon}><a>Finished</a></div>}
                    </div>
                    <Typography
                        align='justify'
                        variant='h4'
                        className={classes.generalLocation}
                    >
                        {generalLocation}
                    </Typography>
                    <Typography
                            className={classes.description}
                            align='justify'
                            variant='h5'
                        >
                            {resume}
                    </Typography>
                    <Button className={classes.continueButton}>{(started && 'Continue') || 'Start'}</Button>
                    <div className={classes.infoButtons}>
                        <div className={classes.commentsButton}>
                            <Icon
                                path={mdiCommentTextMultiple}
                                title='Comments'
                                size={1}
                            />
                            <a>{comments}</a>
                        </div>
                        <div className={classes.createDate}>
                            <a>{date}</a>
                        </div>
                    </div>
                </div>
    </div>
}