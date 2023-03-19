import { Suspense } from 'react'
import Counter from './counter'
import List from './list'
import ListCopy from './listCopy'
import styles from '../page.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <h3>这是服务端组件---App</h3>
      <Counter>
        <Suspense fallback={<div>loading...</div>}>
          {
            // @ts-ignore
            <List />
          }
        </Suspense>
      </Counter>
      <Counter>
        <ListCopy />
      </Counter>
    </div>
  )
}
export default App
