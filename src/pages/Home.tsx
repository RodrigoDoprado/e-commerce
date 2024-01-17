import { Helmet } from "react-helmet"
import Navbar from "../components/NavbarComponent"
import Footer from "../components/FooterComponent"

function HomePage(){
    return(
        <>
            <Helmet><title>Home</title></Helmet>
            <Navbar/>
            <h1>Página Home</h1>
            <Footer/>
        </>
    )
}
export default HomePage