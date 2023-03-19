'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import useSWR from 'swr'
import Wrapper from './wrapper'

// Fetch list function
const fetchList = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function LongList() {
  const [list, setList] = useState<{ name: string; id: number }[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1) // 添加分页状态
  const observer = useRef<IntersectionObserver | null>(null)
  const { data, error } = useSWR(`http://localhost:3001/api/longList/${page}`, fetchList)

  const lastElementRef = useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(page + 1) // 更新分页状态
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, page] // 添加分页状态到依赖数组
  )

  useEffect(() => {
    if (data && !loading) {
      setList(prevList => [...prevList, ...data.data])
      setLoading(false)
    }
  }, [data, loading])
    
  return (
   <Wrapper title='客户端组件 -- long List'>
      <ul>
        {list.map((item, index) => (
          <li
            key={item.id}
            ref={index === list.length - 1 ? lastElementRef : null}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </Wrapper>
  )
}

export default LongList
