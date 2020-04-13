import { ModuleTree } from "vuex";
import { RootState } from "./state";
import { counter } from "./counter";
import { weather } from "./weather";

export const modules: ModuleTree<RootState> = {
  counter,
  weather
};
