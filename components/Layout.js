import NavBar from "./NavBar";

export default function Layout({children}) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            {/* children은 _app.js의 <Component> 요소 */}
        </>
    )
}