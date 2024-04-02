
import Abstyle from "../About/About.module.css";

const About = () => {
    return (
        <div className={Abstyle.full}>
            <div className={Abstyle.content}>
                <div className={Abstyle.name}>
                <div>Hello!</div>
                     I Am <b style={{ color: "rgb(126, 173, 252)" }}>KARTHIK</b>
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
                <button className={Abstyle.button} ><a href="https://drive.google.com/file/d/1mf5DibHZow8ahxsuJBgtrXW3tdSngphF/view?usp=sharing" target="_blank">Resume/cv</a></button>
            </div>
           
        </div>
    );
}
export default About;