import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const router = useRouter();
    return <nav>
        <Link href="/">
            <a style={{color: router.asPath === "/" ? "red" : "blue"}}>Home</a>
        </Link>
        {/* Link는 단지 href를 위해서 씀. style, className 등은 a 태그에 작성 */}
        <Link href="/about">
            <a style={{color: router.asPath === "/about" ? "red" : "blue"}}>About</a>
        </Link>
    </nav>
}