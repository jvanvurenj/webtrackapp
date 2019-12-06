import React from "react";

import AuthUserContext from "./AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "./withAuthorization"; 

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="div-flex">
        <div>
          <h5 className="centered">
            Change or reset Password for : {authUser.email}
          </h5>
          {/* disabling password changes/resets if user is logged in through facebook */}
          {authUser.providerData[0].providerId === "facebook.com" ? null : (
            <div>
              <PasswordForgetForm />
              <PasswordChangeForm />
            </div>
          )}
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; 

export default withAuthorization(authCondition)(AccountPage);
