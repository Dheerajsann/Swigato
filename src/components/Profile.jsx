import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://reqres.in/api/users?page=2");
    const json = await data.json();
    console.log(json.data);
    this.setState({
      users: json.data,
    });

    this.timer = setInterval(() => {
      console.log("Dheeraj...");
    }, 1000);
  }

  componentDidUpdate(preProps, preState) {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
      clearInterval(this.timer);
      console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
         <h1>Profile, a class based component : </h1>
        <img src={this.state.users[0]?.avatar} />
        <h2>Name : {this.state.users[0]?.first_name}</h2>
        <h2>Email : {this.state.users[0]?.email}</h2>
      </div>
    );
  }
}
