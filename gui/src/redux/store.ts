import { counter } from "@/components/Counter/CounterSlice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
