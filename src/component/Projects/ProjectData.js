import item from "../../assets/item.png";
import makeup from "../../assets/makeup.png";
import gym from "../../assets/gym.png";
import ec from "../../assets/ec.png"
export const ProjectData = () => {
    return [
        {
            id: 1,
            Projectname: "Your-Shop",
            use: "This project mini e-commerce ,build by MERN stack",
            tools: "React.js,Node.js,MongoDb",
            url: "https://e-commerce-frontend-dbs3.onrender.com/",
            code1:"https://github.com/Kar-thik-m/e-commerce/tree/main/frontend",
            code2:"https://github.com/Kar-thik-m/e-commerce/tree/main/backend",
            image:ec,
        },
        {
            id: 2,
            Projectname: "MakeUp",
            use: "This project utilizes makeUP items and is built using the react.js, API handling.",
            tools: "React.js, node.js,mongodb,",
            url: "https://660b8e6c1dcf637599a2cf8b--idyllic-horse-b59b7d.netlify.app/",
            code1:"https://github.com/Kar-thik-m/make-up",
            image: makeup,
        },
        {
            id: 3,
            Projectname: "ItemStore",
            use: "This project utilizes an item store and is built using the MERN stack (MongoDB, Express.js, React.js, Node.js), JWT authentication, and Bootstrap for styling.",
            tools: "MongoDB, Express.js, React.js, Node.js",
            url: "https://fantastic-piroshki-19ce1e.netlify.app/login",
            code1:"https://github.com/Kar-thik-m/frontend-itemcatalog",
            code2:"https://github.com/Kar-thik-m/capstone-backend",
            image: item,
        },
        
       
        {
            id: 4,
            Projectname: "Gym",
            use: "This project utilizes gym traing details and is built using the react.js",
            tools: "React.js",
            url: "https://stellular-liger-81bee6.netlify.app/",
            code1:"https://github.com/Kar-thik-m/sample",
            image:gym,
        }
    ];
};
