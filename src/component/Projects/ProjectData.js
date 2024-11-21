import pin from "../../assets/pin.png";
import social from "../../assets/socialapp.png";
import ec from "../../assets/ec.png";
import chatapp from "../../assets/chatapp.png";

export const ProjectData = () => {
    return [
        {
            id: 1,
            Projectname: "Printerest",
            use: `I built the Printerest website. This web application allows users to post images, download images, view images, and comment on posts, similar to the functionality of Pinterest. For the frontend, I used React, and for the backend, I used Node.js with Express.js. 
            The database is MongoDB. I hosted this project on Netlify (frontend) and Render (backend).
            `,
            tools: "MERN || Cloudinary",
            url: "https://printerest-frontend.onrender.com",
            code1: "https://github.com/Kar-thik-m/Printerest/tree/main/backend",
            code2: "https://github.com/Kar-thik-m/Printerest/tree/main/frontend",
            image: pin,
        },
        {
            id: 2,
            Projectname: "ChatApp",
            use: `I built the Talk_to_me app using the MERN stack. This web application allows users to chat in real-time, send messages, and share media, similar to popular messaging platforms. The frontend is built with React, the backend uses Node.js (Express.js), and data is stored in MongoDB. I hosted the project on Netlify for the frontend and Render for the backend.`,
            tools: "MERN || Socket.IO || Cloudinary",
            url: "https://prismatic-torte-1811cd.netlify.app/",
            code1: "https://github.com/Kar-thik-m/chat-frontend",
            code2: "https://github.com/Kar-thik-m/chat-backend",
            image: chatapp,
        },
        {
            id: 3,
            Projectname: "SocialMedia",
            use: `I built a Social Media App using the MERN stack (MongoDB, Express, React, Node.js). This web application allows users to create profiles, post updates, like and comment on posts, and follow other users, just like popular social media platforms. The frontend is built with React, while the backend uses Node.js with Express.js to handle server-side logic. MongoDB is used to store user profiles, posts, and interactions. The app is hosted on Netlify for 
            the frontend and Render for the backend, providing fast and reliable performance.`,
            tools: "MERN || Socket.IO || Cloudinary",
            url: "https://socialmedia-1-axpf.onrender.com/",
            code1: "https://github.com/Kar-thik-m/SocialMedia/tree/main/socialmedia-frontend",
            code2: "https://github.com/Kar-thik-m/SocialMedia/tree/main/socialmedia-backend",
            image: social,
        },
        {
            id: 4,
            Projectname: "Your-Shop",
            use: `I built Your-Shop using the MERN stack. This web application allows users to search and order items, similar to popular E-Commerce platforms. The frontend is built with React, the backend uses Node.js (Express.js), and data is stored in MongoDB.
             I hosted the project on Netlify for the frontend and Render for the backend.`,
            tools: "MERN || Bootstrap",
            url: "https://yourshop01.netlify.app/",
            code1: "https://github.com/Kar-thik-m/yourShop/tree/main/yourshop-backend",
            code2: "https://github.com/Kar-thik-m/yourShop/tree/main/yourshop-frontend",
            image: ec,
        },
    ];
};
