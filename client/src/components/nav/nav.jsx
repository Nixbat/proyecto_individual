import { Link } from "react-router-dom";
import style from "./nav.module.css";
import logo from "../utils/img/globo.gif";


const Nav = () => {
    return (
        <nav className={style.navCont}>
            <img className={style.logo} src={logo} alt="mundo" />

            <h1 className={style.titulo}>Countries of the World</h1>
            <div>
                <ul className={style.navUl}>
                    <li>< Link to="/home">Home</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/form">Create Activity</Link></li>
                    <li><Link to="/about">About</Link></li>                    
                </ul>                
            </div>
        </nav>
    )
}

export default Nav;