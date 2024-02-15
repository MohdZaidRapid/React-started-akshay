import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount ");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  // removing from ui when we change page
  componentWillUnmount() {
    console.log("unmount ");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About class component</h1>
        <div>
          LoggedInUser User
          <UserContext.Consumer>
            {({LoggedInUser}) => (
              <h1 className="text-xl font-bold">{LoggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is react web series</h2>
        <UserClass name={"mohdzaid "} location={"Delhi class"} />
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
