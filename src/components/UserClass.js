import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    // return some piece of jsx

    return (
      <div className="user-card">
        <h1>count = {this.state.count}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: TechTinterZaid</h2>
      </div>
    );
  }
}

export default UserClass;
