import { GetterTree } from "vuex";
import { CounterState } from "./state";
import { RootState } from "../state";

export const getters: GetterTree<CounterState, RootState> = {
  label(state): string {
    return state.count.toString();
  }
};
