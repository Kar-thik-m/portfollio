import ProjectStyle from "../Projects/Project.module.css";
import { ProjectData } from "./ProjectData";

const Project = () => {
    const Data = ProjectData();

    return (
        <div style={{width:"100%"}}>
            <div className={ProjectStyle.title}>
                <h1>Projects</h1>
                <div></div>
            </div>
            <div style={{textAlign:"center",color:"aliceblue",fontSize:"50px",padding:"3rem 0rem"}}>Some Things I’ve Built</div>
            <div className={ProjectStyle.wholecard}>
                {Data.map(project => (
                    <div className={ProjectStyle.cards} key={project.id}>
                        <div>
                            <h1>{project.Projectname}</h1>
                            <p> <i class="fa fa-tag" style={{color:"yellow",marginRight:"10px"}} aria-hidden="true"></i>{project.use}</p>
                            <p><i class="fa fa-tag" style={{color:"yellow",marginRight:"10px"}} />{project.tools}</p>
                          <button className={ProjectStyle.button}  ><a href={project.url} target="_blank">Live</a></button>
                          <button className={ProjectStyle.button} ><a href={project.code1} target="_blank">Code</a></button>
                          <button className={ProjectStyle.button} ><a href={project.code2} target="_blank">Code</a></button>
                        </div>
                        <div className={ProjectStyle.image}>
                            <img src={project.image} alt={project.Projectname} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
