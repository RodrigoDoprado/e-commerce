import { Helmet } from "react-helmet"
import Navbar from "../components/NavbarComponent"
import Hero from "../components/HeroComponent"
import Footer from "../components/FooterComponent"

function HomePage(){
    return(
        <>
            <Helmet><title>Home</title></Helmet>
            <Navbar/>
            <Hero/>
            <h1>Página Home</h1>
            <Footer/>
        </>
    )
}
export default HomePage