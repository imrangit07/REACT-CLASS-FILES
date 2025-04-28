import {Link,Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>


        <Outlet/>

        <hr size="4" color="red"/>

        <h1>This is Footer Page</h1>
        </>
    )
}

export default Layout;