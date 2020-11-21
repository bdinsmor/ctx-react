import React from "react";
import { Switch } from "react-router";
import { Interpreter } from "xstate";

import MainLayout from "../components/MainLayout";
import PrivateRoute from "../components/PrivateRoute";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import { DataContext, DataEvents } from "../machines/dataMachine";
import { SnackbarContext, SnackbarEvents, SnackbarSchema } from "../machines/snackbarMachine";
import AccountsContainer from "./AccountsContainer";

export interface Props {
  isLoggedIn: boolean;
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
  snackbarService: Interpreter<SnackbarContext, SnackbarSchema, SnackbarEvents, any>;
  accountsService: Interpreter<DataContext, any, DataEvents, any>;
}

const PrivateRoutesContainer: React.FC<Props> = ({
  isLoggedIn,
  authService,
  snackbarService,
  accountsService,
}) => {
  return (
    <MainLayout authService={authService}>
      <Switch>
        <PrivateRoute isLoggedIn={isLoggedIn} path="/accounts">
          <AccountsContainer accountsService={accountsService} authService={authService} />
        </PrivateRoute>
      </Switch>
    </MainLayout>
  );
};

export default PrivateRoutesContainer;
