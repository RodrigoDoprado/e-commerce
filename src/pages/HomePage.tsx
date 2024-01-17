import { Helmet } from "react-helmet"
import Navbar from "../components/NavbarComponent"
import Hero from "../components/HeroComponent"
import Services from "../components/ServicesComponent"
import Banner from "../components/BannerComponent"
import Footer from "../components/FooterComponent"

function HomePage(){
    return(
        <>
            <Helmet><title>Home</title></Helmet>
            <span id="home"></span>
            <Navbar/>
            <Hero/>
            <Services/>
            <Banner/>
            <Footer/>
        </>
    )
}
export default HomePage