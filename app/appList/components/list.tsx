import styles from '../page.module.css'

async function getData() {
  const res = await fetch(
    `http://localhost:3001/api/models`
  )
  console.log(res)
  return res.json()
}

const List = async () => {
  const data = await getData()
  console.log(data.data)
  if (!data.data) return <div>loading...</div>
  return (
    <div className={styles.list}>
      <h3>这是客户端组件中的服务端组件---List</h3>
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
