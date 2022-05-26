import { FC } from "react"
import sharedStyles from "@/styles/shared.module.scss"
import styles from "@/pages/Root/Root.module.scss"

export const Root: FC = () => (
  <main className={styles.page}>
    <div className={styles.textBlock}>
      <p>
        Velit in dolore sint velit <span className={sharedStyles.bold}>tempor</span> laboris sunt non occaecat ut. Occaecat
        anim dolor exercitation Lorem nisi qui dolore Lorem reprehenderit
        deserunt mollit ipsum aute excepteur. Amet irure sint nostrud ad qui.
      </p>
    </div>
  </main>
)
