import ProjectStyle from "../Projects/Project.module.css";
import { ProjectData } from "./ProjectData";

const Project = () => {
    const Data = ProjectData();

    return (
        <div id="projects">
            <div className={ProjectStyle.title}>
                <h1>Projects</h1>
                <div></div>
            </div>
            {Data.map((data) => (
                <div className={ProjectStyle.Projectcontainer}>

                    <div className={ProjectStyle.ProjectBlur}></div>
                    <div className={ProjectStyle.ProjectImage}>
                        <img src={data.image} />

                    </div>

                    <div className={ProjectStyle.Projectdetails}>
                        <div className={ProjectStyle.feacture}>
                            <div>Featured Project</div>
                            <div>{data.Projectname}</div>
                        </div>
                        <div className={ProjectStyle.ProjectExplain}>
                            {data.use}
                        </div>

                        <div className={ProjectStyle.Projectstuff}>
                            <div>{data.tools}</div>
                        </div>
                        <div className={ProjectStyle.Projectexplore}>
                            <a href={data.url} target="_blank">Live</a>
                            <a href={data.code1} target="_blank">code front</a>
                            <a href={data.code2} target="_blank">code back</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Project;
