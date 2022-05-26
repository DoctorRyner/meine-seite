import { s } from "@/helpers/utils"

export const $count = s<number>((state) => state.counter.count)
