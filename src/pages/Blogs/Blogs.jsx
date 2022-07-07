import React, { useState } from 'react'
import BlogComponent from '../../components/BlogComponent/BlogComponent'
import Navbar from '../../components/Navbar/Navbar'
import Input from '../../ui/Input/Input'
import styles from './Blogs.module.scss'

const Blogs = () => {
  const [active, setActive] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    setActive(!active)
  }

  return (
    <div className={styles.blog__wrapper} >
      <Navbar handleSearch={handleSearch}  />
      <div className={styles.blogs} >
        <div className={styles.blogs__header}>
          Blogs
        </div>
        <div className={styles.input_active}>
          {active ? <Input type='text' placeholder='search...' onChange={e => setQuery(e.target.value)} /> : ''}
        </div>
        <BlogComponent query={query} />
      </div>
    </div>
  )
}

export default Blogs