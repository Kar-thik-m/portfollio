import item from "../../assets/item.png";
import makeup from "../../assets/makeup.png";
import gym from "../../assets/gym.png";
export const ProjectData = () => {
    return [
        {
            id: 1,
            Projectname: "ItemStore",
            use: "This project utilizes an item store and is built using the MERN stack (MongoDB, Express.js, React.js, Node.js), JWT authentication, and Bootstrap for styling.",
            tools: "MongoDB, Express.js, React.js, Node.js",
            url: "https://genuine-crisp-4071d8.netlify.app/login",
            code1:"https://github.com/Kar-thik-m/frontend-itemcatalog",
            code2:"https://github.com/Kar-thik-m/capstone-backend",
            image: item,
        },
        {
            id: 2,
            Projectname: "MakeUp",
            use: "This project utilizes makeUP items and is built using the react.js, API handling.",
            tools: "React.js, API",
            url: "https://spontaneous-marigold-31eaa9.netlify.app/",
            code1:"https://github.com/Kar-thik-m/make-up",
            image: makeup,
        },
        {
            id: 3,
            Projectname: "Gym",
            use: "This project utilizes gym traing details and is built using the react.js",
            tools: "React.js",
            url: "https://stellular-blini-885c73.netlify.app/",
            code1:"https://github.com/Kar-thik-m/sample",
            image:gym,
        }
    ];
};
