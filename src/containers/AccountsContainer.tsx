import { Button, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useService } from "@xstate/react";
import AccountList from "components/AccountList";
import React, { useEffect } from "react";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";
import { Interpreter } from "xstate";

import AccountForm from "../components/AccountForm";
import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import { DataContext, DataEvents } from "../machines/dataMachine";

export interface Props {
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
  accountsService: Interpreter<DataContext, any, DataEvents, any>;
}

const AccountsContainer: React.FC<Props> = ({ accountsService }) => {
  const match = useRouteMatch();
  const [accountsState, sendAccounts] = useService(accountsService);
  const createAccount = (payload: any) => {
    sendAccounts("CREATE", payload);
  };

  const deleteAccount = (payload: any) => {
    sendAccounts("DELETE", payload);
  };

  useEffect(() => {
    sendAccounts("FETCH");
  }, [sendAccounts]);

  if (match.url === "/accounts/new") {
    return (
      <Paper>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Create Account
        </Typography>
        <AccountForm createAccount={createAccount} />
      </Paper>
    );
  }

  return (
    <Paper>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Accounts
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/accounts/new"
            data-test="account-new"
          >
            Create
          </Button>
        </Grid>
      </Grid>
      <AccountList accounts={accountsState?.context.results!} deleteAccount={deleteAccount} />
    </Paper>
  );
};
export default AccountsContainer;
