import { AppDispatch, RootState } from "@/redux/store"
import {
  Action, AsyncThunkAction
} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useDsp = (action: () => Action | AsyncThunkAction<any, any, any>) => {
  const dispatch = useDispatch<AppDispatch>()

  return () => dispatch(action())
}
export const useDsp_ = (action: Action) => {
  const dispatch = useDispatch<AppDispatch>()

  return () => dispatch(action)
}
export const use: TypedUseSelectorHook<RootState> = useSelector
