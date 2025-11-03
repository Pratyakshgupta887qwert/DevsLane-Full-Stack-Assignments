import type { State } from "./store";

export const selectHappyCount = (state: State) => state.happyCount;
export const selectSadCount = (state: State) => state.sadCount;
