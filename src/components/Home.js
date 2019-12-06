import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    return (
      <div>
        <h1>Home - authenticated</h1>
        {!loading && <p className="centered">Hello {username}!</p>}

        <p style={{ marginTop: "80px" }}>
          Welcome to the authenticated home page! You should now see the option for Home and Account in the top left, and since you are authenticated, you have full access.
        </p>
        <p> An example of things you could have in an authenticated page: </p>
        <a href="https://ix.cs.uoregon.edu/~jvanvure/manufactLookup.html">Database lookup example</a>
        <p> Note: This is just a link to a nonauthenticated site (a different project). A TODO is to move this over to work in Firebase and with JS, but its currently PHP and html and figuring it out was a nightmare so i left it as this for now </p>

        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
