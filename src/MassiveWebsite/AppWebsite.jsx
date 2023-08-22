import React from 'react'
import styles from './styles'
import { Navbar } from "./components"

const AppWebsite = () => {
  return (
    <div className=' w-full overflow-hidden'>

      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-green`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero
        </div>
      </div>

      {/* Page Content */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Content
        </div>
      </div>

    </div>
  )
}

export default AppWebsite