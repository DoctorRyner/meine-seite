import { $count } from "@/components/Counter/CounterSelectors"
import { dec, incAsync, setCount } from "@/components/Counter/CounterSlice"
import { use, useDsp, useDsp_ } from "@/redux/reduxHooks"
import { FC } from "react"

export const Counter: FC = () => {
  const count = use($count)
  const handleInc = useDsp(incAsync)
  const handleDec = useDsp(dec)
  const resetCount = useDsp_(setCount(0))

  return (
    <div>
      <button onClick={handleInc}>+</button>
      {count}
      <button onClick={handleDec}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  )
}
