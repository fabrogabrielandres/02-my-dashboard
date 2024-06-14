import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface CounterActions {
  addOne: () => void
  dereaseOne: () => void
  resetCount: (by: number) => void
  initCounterState: (initValue: number) => void
}

export interface CounterState {
  counter: number
  isReady: boolean
}


export const counterSlice: StateCreator<(CounterActions & CounterState), [["zustand/devtools", never]]> = ((set, get) => ({
  counter: 5,
  isReady: false,
  addOne: () => set((state) => ({ counter: state.counter + 1 }), false, "addOne"),
  dereaseOne: () => set((state) => ({ counter: state.counter - 1 }), false, "dereaseOne"),
  resetCount: (resetNumber) => set({ counter: resetNumber }, false, "resetCount"),
  initCounterState: (initValue) => {
    if (get().isReady) return;
    set({ counter: initValue, isReady: true }, false, "initCounterState")
  }

}))


export const useCounterStore = create<CounterActions & CounterState>()(
  devtools(
    persist(
      counterSlice,
      {
        name: "counterSlice"
      }
    )
  )
);