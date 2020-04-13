import { Module } from "vuex";
import { RootState } from "../state";
import { state, CounterState } from "./state";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const namespaced = true;

export const counter: Module<CounterState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
