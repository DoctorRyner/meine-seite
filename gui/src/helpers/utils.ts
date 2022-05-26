import { RootState } from "@/redux/store"
import classNames from "classnames"

export const cn = classNames

export const s = <ReturnType>(f: (state: RootState) => ReturnType) => f
