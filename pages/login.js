import Link from "next/link"
import Navbar from "../components/Navbar";

export default function Login(props) {
    return <>
            <Navbar/>
            <h1> This is the login page</h1>
            <Link href='/home'>
                <a>User Home</a>
            </Link>
            </>
}