import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag13.jpg"


function Service (){
    return (    
        <>
         <Navbar/>
        <Hero 
        cName=".hero-mid"heroImg={AboutImg} title="Serivice"btnClass="hide"
        />
     
    


        </>
    );
}
export default Service;