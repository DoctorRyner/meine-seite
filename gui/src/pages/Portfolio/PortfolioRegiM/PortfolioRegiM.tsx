import logo from "@/pages/Portfolio/PortfolioRegiM/assets/RegiM-logo.svg"
import { RegiMButton } from "@/pages/Portfolio/PortfolioRegiM/components/RegiMButton"
import styles from "@/pages/Portfolio/PortfolioRegiM/PortfolioRegiM.module.scss"
import { FC } from "react"

export const PortfolioRegiM: FC = () => (
  <div className={styles.page}>
    <nav className={styles.navbar}>
      <img src={logo} className={styles.navbarLogo} />
      <RegiMButton>Get Early Access</RegiMButton>
    </nav>
  </div>
)
