import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is react web series</h2>
      <User name={"Zaid  Mohd function"} />
      <UserClass name={"Zaidmohd from class"} location={"Delhi class"} />
    </div>
  );
};

export default About;
