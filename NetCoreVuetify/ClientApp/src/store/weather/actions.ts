import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../state";
import { Forecast } from "./Forecast";

export const actions: ActionTree<unknown, RootState> = {
  async getForecasts(): Promise<Forecast[]> {
    const { data } = await axios.get<Forecast[]>("/weatherforecast");
    return data;
  }
};
