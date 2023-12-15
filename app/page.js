
import styles from './page.module.css'

import Shop from '@/Components/Shop'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.shop}>
        <Shop /> 
      </div>   
    </main>
  )
}

