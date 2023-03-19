import styles from './page.module.css'
import App from './components/app'
import Link from 'next/link'

export default async function Home() {
  return (
    <main className={styles.main}>
      <Link href="/">返回</Link>
      <App />
    </main>
  )
}
