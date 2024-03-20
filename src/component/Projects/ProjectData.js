import item from "../../assets/item.png";
import makeup from "../../assets/makeup.png";
import gym from "../../assets/gym.png";
import ec from "../../assets/ec.png"
export const ProjectData = () => {
    return [
        {
            id: 1,
            Projectname: "ItemStore",
            use: "This project utilizes an item store and is built using the MERN stack (MongoDB, Express.js, React.js, Node.js), JWT authentication, and Bootstrap for styling.",
            tools: "MongoDB, Express.js, React.js, Node.js",
            url: "https://65fac0b767b8920316054e0a--fantastic-piroshki-19ce1e.netlify.app/login",
            code1:"https://github.com/Kar-thik-m/frontend-itemcatalog",
            code2:"https://github.com/Kar-thik-m/capstone-backend",
            image: item,
        },
        {
            id: 2,
            Projectname: "Your-Shop",
            use: "This project mini e-commerce ,build by MERN stack",
            tools: "React.js,Node.js,MongoDb",
            url: "https://e-commerce-frontend-dbs3.onrender.com/",
            code1:"https://github.com/Kar-thik-m/e-commerce/tree/main/frontend",
            code2:"https://github.com/Kar-thik-m/e-commerce/tree/main/backend",
            image:ec,
        },
        {
            id: 3,
            Projectname: "MakeUp",
            use: "This project utilizes makeUP items and is built using the react.js, API handling.",
            tools: "React.js, API",
            url: "https://65fac15de29da802eb47c39a--coruscating-mandazi-d94083.netlify.app/",
            code1:"https://github.com/Kar-thik-m/make-up",
            image: makeup,
        },
        {
            id: 4,
            Projectname: "Gym",
            use: "This project utilizes gym traing details and is built using the react.js",
            tools: "React.js",
            url: "https://65fac1dd9541b8036c61232f--stellular-liger-81bee6.netlify.app/",
            code1:"https://github.com/Kar-thik-m/sample",
            image:gym,
        }
    ];
};
