import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../assets/imag10.jpg"
import Trip2 from "../assets/imag4.jpg"
import Trip3 from "../assets/imag12.jpg"



function Trip ()  {
  return (
    <div className="trip">
        <h1>MOBILE TELESCOPIC CRANES</h1>

        <p>
        Enriched with vast industrial experience, we are involved in offering complete Mobile Telescopic Crane Rental. We are extensively popular among our clients owing to our transparent business policies and client centric approach. Owing to our state-of-the-art infrastructure we have been able to offer our clients upgraded models of Mobile Telescopic Crane on rental basis. Besides, we deliver only well conditioned Mobile Telescopic Crane to our clients
        </p>
        <div className="tripcard">
          <br/>
          <br/>
        <TripData 
        image={Trip2}
     
        />
        </div>
    </div>
  )
}
export default Trip;
