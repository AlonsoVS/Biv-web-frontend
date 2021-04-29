import Travel from '../components/Travel'
import UserNavbar from '../components/UserNavbar'
import { useRouter } from 'next/router'
import ExpandedImage from '../components/ExpandedImage'
import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    home: {
        display: 'flex',
        flexDirection: 'column'
    }
});

function listOfPictures(list) {
    let newList = [];
    let i = 0;
    let p = true;
    while(i < list.length){
        const p = list[i];
        newList.push({src: p, prev: i-1, next: i+1});
        i++;
    };
    newList[0].prev = list.length - 1;
    newList[newList.length-1].next = 0;
    return newList;
}

export default function Home() {
    const [showImage, setShowImage] = useState(false);
    const [allImages, setAllImages] = useState(false);
    const router = useRouter();
    const classes = useStyles();
    const pathname = router.pathname;
    const imagesList = allImages && listOfPictures(allImages);
    console.log(imagesList);
    const currentImage = (()=>{ if (showImage && allImages) return imagesList.find(picture => picture.src==showImage)})();
    console.log(currentImage);

    useEffect(() => {
        setShowImage(router.query.src);
        setAllImages(router.query.allImages);
    },[router.query.src]);

    return <div className={classes.home}>
                <UserNavbar/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Travel pathname={pathname}/>
                    <Travel pathname={pathname}/>
                    <Travel pathname={pathname}/>
                </div>
                {showImage && <ExpandedImage
                                close={()=>router.back()}
                                image={showImage}
                                allImages={allImages}
                                prev={currentImage && currentImage.prev}
                                next={currentImage && currentImage.next}/>}
    </div>
}
