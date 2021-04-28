import Travel from '../components/Travel'
import UserNavbar from '../components/UserNavbar'

export default function Home() {
    return <>
            <UserNavbar/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Travel/>
                <Travel/>
                <Travel/>
            </div>
    </>
}
