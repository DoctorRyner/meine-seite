import logo from "@/pages/Portfolio/PortfolioRegiM/assets/RegiM-logo.svg"
import { RegiMButton } from "@/pages/Portfolio/PortfolioRegiM/components/RegiMButton"
import styles from "@/pages/Portfolio/PortfolioRegiM/PortfolioRegiM.module.scss"
import { FC } from "react"

export const PortfolioRegiM: FC = () => (
  <div className={styles.page}>
    <div className={styles.elipse} />
    <nav className={styles.navbar}>
      <img src={logo} className={styles.navbarLogo} />
      <RegiMButton>Get Early Access</RegiMButton>
    </nav>
    <div className={styles.landingBlock1}>
      <div className={styles.landingBlock1TitleContainer}>
        <h1 className={styles.landingBlock1TitleContainerTitle}>
          Event Registration Reimagined
        </h1>
        <p className={styles.landingBlock1TitleContainerParagraph}>
          Manage your event registrations hassle free and without any dependency
          with the technical team. Isn’t it sounds amazing?
        </p>
        <div className={styles.landingBlock1TitleContainerButton}>
          <RegiMButton type="big">Get Early Access</RegiMButton>
        </div>
      </div>
      <div></div>
    </div>
  </div>
)
