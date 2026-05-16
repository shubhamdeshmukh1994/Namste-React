
import React from "react";
import ReactDOM from "react-dom/client";
import User from "../user/User.jsx";
import UserClass from "../user/userClass.jsx";

// class AboutClass extends React.Component{
//    constructor(props) {
//     super(props)
//    }
//    render() {
//     return(
//       <div>
//       <h1>About Us from class</h1>
//       <User />
//       <UserClass
//         name ={"Jane Doe"}
//         email = {"jane.doe@example.com"}
//         phone = {"098-765-4321"}
//         address = {"456 Oak Ave, Somewhere, USA"}
//         occupation = {"Designer"}  
//       />
//     </div>
//     )
//    }
// }
const About = () => {
  return (
    <div>
      <h1>About Us from function</h1>
      <User />
      <UserClass
        name ={"Shubham sd"}
        email = {"sd@sd.cd"}
        phone = {"123456789"}
        address = {"Pune"}
        occupation = {"Developer"}  
      />
    </div>
  );
};

export default About;