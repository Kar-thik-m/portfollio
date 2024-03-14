import Skillstyle from "../Skill/Skill.module.css";
import html from "../../assets/skill/html.png";
import css from "../../assets/skill/css.png";
import js from "../../assets/skill/js.png";
import react from "../../assets/skill/react.png";
import node from "../../assets/skill/node.png";
import mongodb from "../../assets/skill/mongodb.png";
import boo from "../../assets/skill/boostrab.png";
import express from "../../assets/skill/express.png";
import npm from "../../assets/skill/npm.png";
import api from "../../assets/skill/api.png"
const Skill=()=>{
    return(
       <div className={Skillstyle.full}>
          <div className={Skillstyle.title}>
                <h1>Skill</h1>
                <div></div>
          </div>
          <div className={Skillstyle.skillname}>
              <div>
                <img src={html}></img>
                <span>HTML</span>
              </div>
              <div>
                <img src={css}></img>
                <span>css</span>
              </div>
              <div>
                <img src={js}></img>
                <span>JavaScript</span>
              </div>
              <div>
                <img src={react}></img>
                <span>React.Js </span>
              </div>
              <div>
                <img src={node}></img>
                <span>Node.Js</span>
              </div>
              <div>
                <img src={mongodb}></img>
                <span>MongoDb</span>
              </div>
              <div>
                <img src={boo}></img>
                <span>boostrab</span>
              </div>
              <div>
                <img src={api}></img>
                <span>Api</span>
              </div>
              <div>
                <img src={express}></img>
                <span>Express.js</span>
              </div>
              <div>
                <img src={npm}></img>
                <span>npm packages</span>
              </div>
             
          </div>
          
       </div>
    );
}
export default Skill;