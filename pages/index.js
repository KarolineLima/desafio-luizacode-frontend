import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState("");

  const getData = async () => {
    const response = await fetch("http://localhost:3080")
    const data = await response.json()
    setData(data.message)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={styles.container}>
      <h1>{data}</h1>
    </div>
  )
}
