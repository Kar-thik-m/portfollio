import pin from "../../assets/pin.png"
import makeup from "../../assets/makeup.png";
import gym from "../../assets/gym.png";
import ec from "../../assets/ec.png"
import chatapp from "../../assets/chatapp.png"
export const ProjectData = () => {
    return [
        {
            id: 1,
            Projectname: "Pinterest",
            use: "This project allows users to create an account, upload images, download images from others, comment on images, and leave reviews. Users can also follow other accounts.",
            tools: "MongoDB, Express.js, React.js, Node.js",
            url: "https://printerest-frontend.onrender.com",
            code1: "https://github.com/Kar-thik-m/Printerest/tree/main/backend",
            code2: "https://github.com/Kar-thik-m/Printerest/tree/main/frontend",
            image: pin,
        },
        {
            id: 2,
            Projectname: "ChatApp",
            use: "Users can send and receive messages instantly in real-time, enhancing communication efficiency.",
            tools: "React.js,Socket.IO ,express.js,mongodb database",
            url: "https://graceful-praline-754d99.netlify.app/",
            code1: "https://github.com/Kar-thik-m/chat-frontend",
            code2: "https://github.com/Kar-thik-m/chat-backend",
            image: chatapp,
        },
        {
            id: 3,
            Projectname: "Your-Shop",
            use: "This project mini e-commerce ,build by MERN stack",
            tools: "React.js,Node.js,MongoDb",
            url: "https://e-commerce-frontend-dbs3.onrender.com/",
            code1: "https://github.com/Kar-thik-m/e-commerce/tree/main/frontend",
            code2: "https://github.com/Kar-thik-m/e-commerce/tree/main/backend",
            image: ec,
        },
        {
            id: 3,
            Projectname: "MakeUp",
            use: "This project utilizes makeUP items and is built using the react.js, API handling.",
            tools: "React.js, node.js,mongodb,",
            url: "https://elaborate-froyo-d63c3b.netlify.app/",
            code1: "https://github.com/Kar-thik-m/make-up",
            image: makeup,
        },
        




    ];
};
