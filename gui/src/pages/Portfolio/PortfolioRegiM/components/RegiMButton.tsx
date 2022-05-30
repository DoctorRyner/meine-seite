import { cn } from "@/helpers/utils"
import styles from "@/pages/Portfolio/PortfolioRegiM/components/RegiMButton.module.scss"
import { FC } from "react"

type RegiMButtonType = "normal" | "big"

type RegiMButtonProps = {
  type?: RegiMButtonType
  children?: string
}

export const RegiMButton: FC<RegiMButtonProps> = (props) => {
  const type = props.type ?? "normal"

  return (
    <div
      className={cn(
        styles.button,
        type === "normal" ? styles.buttonTypeNormal : styles.buttonTypeBig
      )}
    >
      {props.children}
    </div>
  )
}
