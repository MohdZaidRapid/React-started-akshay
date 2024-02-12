import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.name + "Child Contructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component did mount ");
    const data = await fetch("https://api.github.com/users/mohdzaid123");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did update");
  }

  render() {
    // const { name, location } = this.props;

    // console.log(this.props.name + "Child Render");

    // return some piece of jsx
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @TechTinterZaid</h2>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * Mounting life cycle
 * Constructor
 * Render (dummy)
 *      <html> has dummy data
 *  component did mount is called
 *      <API called>
 *  this.setState()
 * 
 * ---UPDATE cycle
 * 
 * Render method with api data in setState 
 *  <HTML (new API data>)
 * component did update
 */
