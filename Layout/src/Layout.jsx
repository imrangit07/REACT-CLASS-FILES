
import { Link, Outlet} from "react-router-dom";

const Layout =()=>{
    return(
        <>
        <Link to="home">Home</Link>    |
        <Link to="about">About</Link>    |
        <Link to="contact">Contact</Link>    |
        <Link to="product">Product</Link>    |
        <hr size="4" color="red" />

        <Outlet/>

        <hr size="4" color="red" />

        <h1>This is footer</h1>
        </>
    )
}

export default Layout;