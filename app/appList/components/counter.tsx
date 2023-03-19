'use client'
import { useState, PropsWithChildren } from 'react'
import { Button } from 'antd'
import styles from '../page.module.css'

const Counter = (props: PropsWithChildren) => {
  const [show, setShow] = useState(false)

  // 添加数据到数据库的函数
    const addToDatabase = async () => {
    const data = {
      name: `产品名称${Math.floor(Math.random() * 1000)}`,
      id: Math.floor(Math.random() * 1000),
      category: `产品类别${Math.floor(Math.random() * 1000)}`,
    }

    try {
      const response = await fetch('http://localhost:3001/api/models', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('数据添加成功');
      } else {
        console.log('数据添加失败');
      }
    } catch (error) {
      console.log('请求错误:', error);
    }
  };
  
  return (
    <div className={styles.counter}>
      <h3>这是客户端组件---Counter</h3>
      <Button
        onClick={() => setShow(true)}
        type="primary"
        style={{ marginRight: 20 }}
      >
        展示产品
      </Button>
      <Button onClick={() => setShow(false)}>隐藏产品</Button>
      {/* 添加一个按钮，用于添加数据到数据库 */}
      <Button onClick={addToDatabase} style={{ marginLeft: 20 }}>
        添加数据到数据库
      </Button>
      {show && props.children}
    </div>
  )
}

export default Counter
