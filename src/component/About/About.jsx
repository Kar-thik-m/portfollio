
import Abstyle from "../About/About.module.css";

const About = () => {
    return (
        <div className={Abstyle.full}>
            <div className={Abstyle.content}>
                <div className={Abstyle.name}>
                <div>Hello!</div>
                     I Am <b style={{ color: "#ccd6f6" }}>KARTHIK</b>
                </div>
                <div>
                    I'm a <b style={{ color: "rgb(126, 173, 252)" }}>Full Stack Developer</b>
                </div>
                <div className={Abstyle.inf}>
                    <span>
                        I am a full-stack & frontend & backend developer with hands
                        on practice in creating and designing user-friendly websites
                        and web applications.
                    </span>
                </div>
                <div className={Abstyle.button} ><a href="https://drive.google.com/file/d/1miSC0eRRirYXF39D41jQ2vMGSQbBGB33/view" target="_blank">Resume/cv</a></div>
            </div>
           
        </div>
    );
}
export default About;