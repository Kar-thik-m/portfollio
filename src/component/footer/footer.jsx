import Foostyle from "../footer/Footer.module.css";
import call from "../../assets/footer/call.png";
import github from "../../assets/footer/github.png";
import email from "../../assets/footer/gmail.ico";
import linkdin from "../../assets/footer/linkdin.png";
import whatsapp from "../../assets/footer/whatsapp.png"; 
const Footer = () => {
    return (
        <div className={Foostyle.foot} >
     
            <div className={Foostyle.linkdin}>
                <img src={linkdin}></img>
                <a href="https://www.linkedin.com/in/karthik-m-8a07b8257/" target="blank">Linkdin</a>
            </div>
            <div className={Foostyle.email}>
                <img src={email}></img>
                <a href="sparrowkarthik007@gmail.com" target="blank">sparrowkarthik007@gmail.com</a>
            </div>
            <div className={Foostyle.phone}>
                <img src={call}></img>
                <span>+91 9361238910</span>
            </div>
            <div className={Foostyle.whatsapp}>
                <img src={whatsapp}></img>
                <a href="https://wa.me/+919361238910" target="blank">whatsapp</a>
            </div>
            <div className={Foostyle.github}>
                <img src={github}></img>
                <a href="https://github.com/Kar-thik-m?tab=repositories" target="blank">Github</a>
            </div>

        </div>
    );
}
export default Footer;