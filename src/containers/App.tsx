import { useMachine, useService } from "@xstate/react";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AlertBar from "../components/AlertBar";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { accountsMachine } from "../machines/accountsMachine";
import { authService } from "../machines/authMachine";
import { snackbarMachine } from "../machines/snackbarMachine";
import PrivateRoutesContainer from "./PrivateRoutesContainer";

// @ts-ignore
if (window.Cypress) {
  // Expose authService on window for Cypress
  // @ts-ignore
  window.authService = authService;
}

const App: React.FC = () => {
  const [authState] = useService(authService);
  const [, , snackbarService] = useMachine(snackbarMachine);
  const [, , accountsService] = useMachine(accountsMachine);

  const isLoggedIn =
    authState.matches("authorized") ||
    authState.matches("refreshing") ||
    authState.matches("updating");

  return (
    <div>
      {isLoggedIn && (
        <PrivateRoutesContainer
          isLoggedIn={isLoggedIn}
          authService={authService}
          snackbarService={snackbarService}
          accountsService={accountsService}
        />
      )}
      {authState.matches("unauthorized") && (
        <Switch>
          <Route exact path="/signup">
            <SignUpForm authService={authService} />
          </Route>
          <Route exact path="/signin">
            <SignInForm authService={authService} />
          </Route>
          <Route path="/*">
            <Redirect
              to={{
                pathname: "/signin",
              }}
            />
          </Route>
        </Switch>
      )}
      <AlertBar snackbarService={snackbarService} />
    </div>
  );
};

export default App;
