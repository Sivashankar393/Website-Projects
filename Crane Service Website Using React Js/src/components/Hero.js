import "./Herostyle.css";
function Hero (props){
    return (<>
    <br/>  <br/>
    <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg}/>

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        

        </div>
    </div>
        </>)
    
}
export default Hero;