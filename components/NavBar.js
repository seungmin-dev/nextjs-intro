import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return <nav>
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
            nav {
                background-color: tomato;
            }
            a {
                text-decoration: none;
            }
            .active {
                color: white;
            }
            /* 컴포넌트 별로 스타일 지정, 태그 이름 그대로 사용해도 무방함 */
            /* 부모 컴포넌트가 같은 클래스 이름을 사용하고 있어도 상관없음 */
        `}</style>
    </nav>
}