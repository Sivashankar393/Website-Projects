import Mountain3 from "../assets/imag3.jpg";
import Mountain5 from "../assets/imag5.jpg";
import Mountain7 from "../assets/imag7.jpg";
import Mountain8 from "../assets/imag8.jpg";
import Mountain9 from "../assets/imag9.jpg"
import DestinationData from "./DestinationData";

import "./Destinationstyle.css";


const Destination = () =>{
    return(
        <div className="destination">
          <h1>Who We Are !</h1>  
          <br/>
 
          <li>Karur Cranes Service rental service is one of the largest in Karur, TamilNadu. Our services ensure the timeliness and efficiency of your resources. We have the resources and the manpower to specialize in maintenance shutdowns, plant installations and equipment removal.

​</li>
<br/><br/>
<li>With a huge network of service team expertise and a complete range of service products, Kongu Cranes Service provides all over Karur and other parts like Salem, Trichy and Namakkal.</li><br/><br/>

<li>We are "An Equipment Rental Company" and recently we've added few new assets to our list which we hope will be helpful to your organization with logistics and material handling needs. This includes HYDRAULIC CRANES, TELESCOPIC CRANES, CRAWLER CRANES, TOWER CRANES, FORKLIFTS, and TOWING VEHICLES.</li>


   <div>

  <DestinationData
  className ="first-des-reverse"
  heading="OUR CRANE SERVICES INTRODUCTION"
  text="We are the company, which owns and supplies, Mobile Telescopic, Crawler and hydra cranes, since 1985.We are specialized in erection ,Fabrication, mantling, dismantling [ Bridge and Road works...], also in Loading and Unloading in shipyards, using telescopic, Crawler and hydra cranes. We have all India work experience. We provide cost effective, timely and customer oriented service.Our valuable customers include L&T, BHEL, Chettinad Cements, and Rane to name a few.Moreover, we have vast working experience in State and Central Government projects, such as working for Indian Railways, BHEL and Karnataka State's drinking water pipe laying project and underground drainage pipe laying project for the Bangalore city.We also provide mechanical repair services and also offer technical assistance for buying and selling of cranes at an affordable cost."
  img1={Mountain3}
   img2={Mountain5}
   img6={Mountain7}
   img5={Mountain8}
  />
  </div>
  <div>
  <DestinationData
  className ="first-des-reverse"
  heading="Hydra Cranes"
  text="We are able to offer superior quality of Crawler Cranes that are widely used in the construction and engineering industry. Our cranes are equipped with anti-friction bearings�?.."
  img1={Mountain9}
   img2={Mountain5}
   img6={Mountain7}
   img5={Mountain8}
  />
  </div>





        </div>


    );
};


export default Destination;

