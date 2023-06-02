import { Link } from "react-router-dom";
import style from "./landingpage.module.css";


const LandingPage = () => {
    return (                       
        <div className={style.imgFondo}>     
            <h1 className={style.titulo}>COUNTRIES OF THE WORLD</h1>   

                <div className={style.principalContent}>
                    <article className={style.landArticle}>
                        <div className={style.containerDiv}>
                                <h2>Welcome to know the countries of our wonderful world</h2>
                                <h3>Where you will find important information about each country</h3>
                                <h3>and you can also do some activities in each country you visit.</h3>
                                <h2>Let us begin!...  🗺️</h2>                
                                                               
                        </div>                          
                   </article>                                  
                </div>        
            
            <Link to="/home">
            <button className={style.button}>Start</button>
            </Link>
        </div>             
    )
}

export default LandingPage;
