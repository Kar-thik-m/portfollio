
import Abstyle from "../About/About.module.css";

const About = () => {
    return (
        <>
            <div className={Abstyle.full} id="about">
                <div className={Abstyle.content}>
                    <div className={Abstyle.name}>
                        <div>Hello!</div>
                        I Am <b className={Abstyle.letname}>KARTHIK</b>
                    </div>
                    <div>
                        I'm a <b className={Abstyle.letname} >Full Stack Developer</b>
                    </div>
                    <div className={Abstyle.inf}>
                        <span>
                            I have completed a Full Stack Developer certificate course and I have completed four full-stack projects related to React and Node.js. My technical skills include HTML, CSS, JavaScript, Node.js, React, and MongoDB. My career goal is to become a successful full-stack developer..
                        </span>

                    </div>


                </div>

            </div>
            <div style={{ display: "flex", gap: "2rem",margin:"20px" }}>
                <div className={Abstyle.button} ><a href="https://drive.google.com/file/d/1qwV7u9HMnvOWVKHSIRHQ-t2MSFoBxKyk/view?usp=sharing" target="_blank">Certificate</a></div>
                <div className={Abstyle.button} ><a href="https://drive.google.com/file/d/1qwV7u9HMnvOWVKHSIRHQ-t2MSFoBxKyk/view?pli=1" target="_blank">Resume/cv</a></div>
            </div>
        </>
    );
}
export default About;