import List from "@material-ui/core/List";
import React from "react";

import { Account } from "../models";
import AccountItem from "./AccountItem";
import EmptyList from "./EmptyList";

export interface AccountListProps {
  accounts: Account[];
  deleteAccount: Function;
}

const AccountList: React.FC<AccountListProps> = ({ accounts, deleteAccount }) => {
  return (
    <>
      {accounts?.length > 0 ? (
        <List data-test="account-list">
          {accounts.map((account: Account) => (
            <AccountItem key={account.id} account={account} deleteAccount={deleteAccount} />
          ))}
        </List>
      ) : (
        <EmptyList entity="Accounts" />
      )}
    </>
  );
};

export default AccountList;
