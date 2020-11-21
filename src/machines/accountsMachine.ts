import { isEmpty, omit } from "lodash/fp";

import { httpClient } from "../utils/asyncUtils";
import { dataMachine } from "./dataMachine";

export const accountsMachine = dataMachine("accounts").withConfig({
  services: {
    fetchData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.get(`http://localhost:3001/accounts`, {
        params: !isEmpty(payload) && event.type === "FETCH" ? payload : undefined,
      });
      return resp.data;
    },
    deleteData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.delete(`http://localhost:3001/accounts/${payload.id}`, payload);
      return resp.data;
    },
    createData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.post("http://localhost:3001/accounts", payload);
      return resp.data;
    },
  },
});
