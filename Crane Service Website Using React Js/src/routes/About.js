import Hero from "../components/Hero"
import Navbar from"../components/Navbar"
import AboutImg from"../assets/imag4.jpg"   
import AboutUs from"../components/AboutUs";

function About(){
    return (
        <>
          <Navbar/>
        <h1>About Us</h1>
        <Hero 
        cName=".hero-mid"
        heroImg="https://lh3.googleusercontent.com/p/AF1QipMDvxAUc6bPjwjYLRFipAsIbixybyxQXu158tXF=w1080-h608-p-no-v0"

        title="About"
        btnClass="hide"
        text =""

        />
        <AboutUs/>
    
    
        </>
    );
}
export default About;