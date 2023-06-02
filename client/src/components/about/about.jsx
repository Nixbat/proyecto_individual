import style from "./about.module.css";
import ghl from "../utils/img/ghl2.png";
import linkedinlogo from "../utils/img/LILOG1.png";
import { handleClickGH, handleClickLI, handleClickSource } from "./handlerLinks";


const About = () => {
    return (
        <div className={style.about}>
        <h2>About Countries of the World</h2>
        <div className={style.containertext}>
            <span style={{fontSize:'18px'}}>
            This countries project is a section dedicated to providing useful information and data about countries around the world. <br />
            It is a simulation of an API with demographic, geographic and tourism data.</span> <hr />
            <h4 style={{fontSize:'16.5px'}}>This is an individual project, created by Nixon Batallas, student at HENRY</h4> <hr />
            <p style={{fontSize:'17px'}}>The source of the information corresponds to the REST API of: <span className={style.linkSource} onClick={handleClickSource}>https://restcountries.com/v3/all</span></p> <hr />
            <h2 style={{marginTop:'-3px'}}>About me</h2>
            <span style={{fontSize:'17px'}}>Thank you for visiting this project, I did it with great dedication and happy to continue learning in this wonderful world of programming, which is something I am passionate about.                                      
            </span>
            <br/>
            <br/>
            <span  className={style.follow}>You can find me at</span>
            <div className={style.orderLog}>
                <div>   
                    <p><b>Github:</b></p>
                    <img src={ghl} alt="imagen" onClick={handleClickGH} className={style.logos}/>
                </div>
                <div>
                    <p><b>LinkedIn:</b></p>
                    <img src={linkedinlogo} alt="imagen" onClick={handleClickLI} className={style.logos}/>
                </div>
            </div>
        </div>
    </div>

        
    )
}

export default About;