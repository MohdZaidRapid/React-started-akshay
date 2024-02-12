import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount ");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About class component</h1>
        <h2>This is react web series</h2>
        {/* <User name={"Zaid  Mohd function"} /> */}
        <UserClass name={"Zaidmohd from class"} location={"Delhi class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is react web series</h2>
//       {/* <User name={"Zaid  Mohd function"} /> */}
//       <UserClass name={"Zaidmohd from class"} location={"Delhi class"} />
//     </div>
//   );
// };

export default About;
