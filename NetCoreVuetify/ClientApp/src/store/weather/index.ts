import { Module } from "vuex";
import { RootState } from "../state";
import { actions } from "./actions";

const namespaced = true;

export const weather: Module<unknown, RootState> = {
  namespaced,
  actions
};
