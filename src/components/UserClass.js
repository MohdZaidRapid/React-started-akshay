import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    // return some piece of jsx

    return (
      <div className="user-card">
        <h1>count = {count}</h1>
        <h1>count = {count2}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: TechTinterZaid</h2>
      </div>
    );
  }
}

export default UserClass;
