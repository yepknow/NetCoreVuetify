import { ActionTree } from "vuex";
import { CounterState } from "./state";
import { RootState } from "../state";

export const actions: ActionTree<CounterState, RootState> = {
  increment({ commit }): void {
    commit("INCREMENT");
  }
};
