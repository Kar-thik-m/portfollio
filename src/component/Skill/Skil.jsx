import Skillstyle from "../Skill/Skill.module.css";
import html from "../../assets/skill/html.png";
import css from "../../assets/skill/css.png";
import js from "../../assets/skill/js.png";
import react from "../../assets/skill/react.png";
import node from "../../assets/skill/node.png";
import mongodb from "../../assets/skill/mongodb.png";
import bootstrap from "../../assets/skill/boostrab.png";  // corrected filename
import express from "../../assets/skill/express.png";
import npm from "../../assets/skill/npm.png";
import api from "../../assets/skill/api.png";
import github from "../../assets/skill/github.png";
import git from "../../assets/skill/git.jpg";
import netlify from "../../assets/skill/netlify.jpg";
import postman from "../../assets/skill/postman.jpg";
import render from "../../assets/skill/render.png";  // corrected filename
import vscode from "../../assets/skill/vscode.jpg";  // corrected filename

const Skill = () => {
  return (
    <div className={Skillstyle.full} id="skils">
      <div className={Skillstyle.title}>
        <h1>Skill</h1>
        <div></div>
      </div>
      <div className={Skillstyle.skillname}>
        <div>
          <img src={html} alt="HTML" />
          <span>HTML</span>
        </div>
        <div>
          <img src={css} alt="CSS" />
          <span>CSS</span>
        </div>
        <div>
          <img src={js} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div>
          <img src={react} alt="React" />
          <span>React.js</span>
        </div>
        <div>
          <img src={node} alt="Node.js" />
          <span>Node.js</span>
        </div>
        <div>
          <img src={mongodb} alt="MongoDB" />
          <span>MongoDB</span>
        </div>
        <div>
          <img src={bootstrap} alt="Bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div>
          <img src={api} alt="API" />
          <span>API</span>
        </div>
        <div>
          <img src={express} alt="Express.js" />
          <span>Express.js</span>
        </div>
        <div>
          <img src={npm} alt="NPM" />
          <span>NPM Packages</span>
        </div>
        <div>
          <img src={git} alt="Git" />
          <span>Git</span>
        </div>
        <div>
          <img src={github} alt="GitHub" />
          <span>GitHub</span>
        </div>
        <div>
          <img src={postman} alt="Postman" />
          <span>Postman</span>
        </div>
        <div>
          <img src={vscode} alt="VSCode" />
          <span>VSCode</span>
        </div>
        <div>
          <img src={render} alt="Render" />
          <span>Render</span>
        </div>
        <div>
          <img src={netlify} alt="Netlify" />
          <span>Netlify</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
