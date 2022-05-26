import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { add, subtract } from "ramda"

type State = { count: number }

const initialState: State = {
  count: 0,
}

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.count = state.count + 1
    },
    dec: (state) => {
      state.count = state.count - 1
    },
    setCount: (state, { payload }: PayloadAction<number>) => {
      state.count = payload
    },
  },
})

export const { inc, dec, setCount } = counter.actions

export const incAsync = createAsyncThunk(
  "counter/incAsync",
  async (_, { dispatch }) => setTimeout(() => dispatch(inc()), 2000)
)
