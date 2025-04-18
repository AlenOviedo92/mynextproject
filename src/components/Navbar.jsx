import Link from "next/link";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <h1 className="text-3xl font-bold">Curso de Next.js</h1>
            </Link>

            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/tienda">Tienda</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;