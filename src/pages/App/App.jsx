import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import * as authService from '../../services/authService'
import * as profileAPI from '../../services/profileService'
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
    userProfile: null,
  }
  
  handleLogout = () => {
    authService.logout();
    this.setState({ user: null, userProfile: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = async() => {
    this.setState({ user: await authService.getUser(), userProfile: await profileAPI.getUserProfile() });
  };

  async componentDidMount() {
    if (!this.state.userProfile) {
      const userProfile = await profileAPI.getUserProfile()
      this.setState({userProfile})
    }
  }

  render() {
    const { user, userProfile } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome to Mammoth</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
      </>
    );
  }
}

export default App;
