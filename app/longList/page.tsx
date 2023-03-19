import ListClient from './components/listClient'
import styles from './page.module.css'

export default async function () {
  return (
    <div className={styles.long_list}>
      <ListClient />
    </div>
  )
}
