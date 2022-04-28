import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({Component, pageProps}) {
    return (
        <>
        <NavBar />
        <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: white;
                }`}
            </style>
        </>
    )
}
// nextJS는 가장 처음 _app.js를 렌더링함(청사진 역할)
// 그 다음 index.js 등 다른 페이지를 렌더링함