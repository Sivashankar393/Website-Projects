import {Component} from "react"
import "./Navbarstyle.css";
import {MenuItems} from "../components/MenuItems";
import {Link} from "react-router-dom";

class Navbar extends Component{
    state = {clicked:false};
    handleclick=()=>
    this.setState({clicked:!this.state.clicked})
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Karur Crane service</h1>

                <div className="menu-icon" onClick={this.handleclick}>
                <i 
                className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                </div>
               
            
            <ul className="nav-menu">
                {MenuItems.map((item,index) => {
                    return(
                        <li key ={index}> 
                    <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                        </Link>
                </li>
                    );
                })}
                <button>Sign Up</button>
            </ul>
            </nav>
        )
    }    
}
                    
export default Navbar;