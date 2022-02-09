import React from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import { auth } from "./firebase/firebase.utils";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HomePage from "./Pages/home/home.component";
import NetflixPage from "./Pages/netfilx-page/netflix.component";
import SignIn from "./Pages/authentication/signIn/sign-in.component";
import SignUp from "./Pages/authentication/signUp/sign-up.component";

class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/netflix" component={NetflixPage} />
          <Route path="/sign-up" component={SignUp} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              currentUser ? <Redirect to="/netflix" /> : <SignIn />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
