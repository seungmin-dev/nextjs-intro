import NavBar from "../components/NavBar";
import "../styles/globals.css";
// 일반 css 파일은 _app.js 에서만 import 가능
// 다른 page에서는 module.css 만 import 가능

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