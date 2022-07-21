import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'
import Button from '../../ui/Buttons/Button'
import styles from '../Blogs/Blogs.module.scss'

const OneBlogPage = () => {
  const { blogId } = useParams()
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
 
  useEffect(() => {
    const getBlogs = async() => {
      return await axios.get('https://62d927f85d893b27b2df6bc6.mockapi.io/blogs')
      .then(response => {
        setBlogs(response.data)
      })
      .catch((err) => console.log(err))
    }
    getBlogs()
  }, [])

  const blog = (blogs.find(blog => blog.id === blogId))

  if (!blog) {
    return (
      <section>
        <h2>Blogs not found!</h2>
      </section>
    )
  }

  return (
    <div className={styles.one_blog}>
      <div className={styles.blog}>
        <div className={styles.blog__title}>
          {blog.title[0].toUpperCase() + blog.title.slice(1)} 
          <Button onClick={() => navigate(-1)}>go back</Button>
        </div>
        <div className={styles.text}>
          written by {blog.creator}
          <div>
          on {blog.month}
          </div>
        </div>
        <div className={`${styles.one_blog__text} ${blog ? styles.first_letter : ''}`}>
          {blog.text[0].toUpperCase() + blog.text.slice(1)}
        </div>
      </div>
    </div>
  )
}

export default OneBlogPage