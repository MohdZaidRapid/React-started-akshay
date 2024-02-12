import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Contructor");
  }

  componentDidMount() {
    console.log("Child component did mount ");
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log("Child Render");

    // return some piece of jsx

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1>
        <button
          onClick={() => {
            // never update state variable directly
            // this.state.count = this.state.count + 1;

            // this.setState()
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @TechTinterZaid</h2>
      </div>
    );
  }
}

export default UserClass;
