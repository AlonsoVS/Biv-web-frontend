import Link from "next/link"

export default function Login(props) {
    const { activateNavbar } = props;
    return <>
            <h1> This is the about page</h1>
            <Link href='/home'>
                <a onClick={() => activateNavbar(false)}>User Home</a>
            </Link>
            </>
}