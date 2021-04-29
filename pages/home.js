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

export default function Home() {
    const [expanded, expand] = useState(false);
    const router = useRouter();
    const classes = useStyles();
    const pathname = router.pathname;
    useEffect(() => {
        expand(router.query.src);
    },[router.query.src]);
    return <div className={classes.home}>
                <UserNavbar/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Travel pathname={pathname}/>
                    <Travel pathname={pathname}/>
                    <Travel pathname={pathname}/>
                </div>
                {expanded && <ExpandedImage close={()=>router.back()} image={expanded}/>}
    </div>
}
