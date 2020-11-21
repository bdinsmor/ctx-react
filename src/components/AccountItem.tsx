import { Button, Grid, Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import React from "react";

import { Account } from "../models";

export interface AccountListItemProps {
  account: Account;
  deleteAccount: Function;
}

const AccountListItem: React.FC<AccountListItemProps> = ({ account, deleteAccount }) => {
  return (
    <ListItem data-test={`account-list-item-${account.id}`}>
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Grid item>
          <Typography variant="body1" color="primary" gutterBottom>
            {account.accountName} {account.isDeleted ? "(Deleted)" : undefined}
          </Typography>
        </Grid>
        {!account.isDeleted && (
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              data-test="account-delete"
              onClick={() => {
                deleteAccount({ id: account.id });
              }}
            >
              Delete
            </Button>
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
};

export default AccountListItem;
