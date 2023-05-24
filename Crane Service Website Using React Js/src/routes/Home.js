import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from"../components/Navbar";
import Trip from "../components/Trip";
function Home (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://static.wixstatic.com/media/7d88e0_e3f1a88ce3974dd8a18ca5c1dcc68f3e~mv2.jpg/v1/fill/w_1303,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CraneImage1_edited.jpg"  
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
     
        </>
    )
}   
export default Home;



