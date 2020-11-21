export interface Account {
  id: string;
  uuid: string;
  accountName: string;
  isDeleted: boolean;
  createdAt: Date;
  modifiedAt: Date;
}

export type AccountPayload = Pick<Account, "accountName">;
