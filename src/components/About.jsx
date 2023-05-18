import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";



export default class About extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <div>
        <h1>About Page</h1> 
        <UserContext.Consumer>
          {({users}) => <h4 style={{textAlign: 'right'}}>{users.name} -- {users.email}</h4>}
        </UserContext.Consumer>
        <Profile/>
      </div>
    );
  }
}
