'use client'
import useSwr from 'swr'
import styles from '../page.module.css'
import axios from 'axios'

const List = () => {
  const { data, error, isLoading } = useSwr(`local`, () =>
    axios
      .get('http://localhost:3001/api/models')
      .then(response => {
        console.log('Data from API:', response.data)
        return response.data
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  )

  if (isLoading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>error...</div>
  }
console.log(data);
  return (
    <div className={styles.list}>
      <h3>这是客户端组件中的客户端组件---List</h3>
      <h4>通过接口获取到的产品数据：</h4>
      {data.data.map((item: any) => {
        return (
          <div key={item.id}>
            {item.name} - {item.category}
          </div>
        )
      })}
    </div>
  )
}

export default List
