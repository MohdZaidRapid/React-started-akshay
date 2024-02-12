import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + "Child Contructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child component did mount ");
  }

  render() {
    const { name, location } = this.props;

    console.log(this.props.name + "Child Render");

    // return some piece of jsx

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @TechTinterZaid</h2>
      </div>
    );
  }
}

export default UserClass;
