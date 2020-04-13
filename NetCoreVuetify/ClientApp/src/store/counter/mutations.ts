import { MutationTree } from "vuex";
import { CounterState } from "./state";

export const mutations: MutationTree<CounterState> = {
  INCREMENT(state): number {
    state.count += 1;
    return state.count;
  }
};
