import { Account } from "./account";
import { Contact } from "./contact";
import { User } from "./user";

export interface DbSchema {
  users: User[];
  contacts: Contact[];
  accounts: Account[];
}
