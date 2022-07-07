import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import { addBlogs } from '../../redux/blogSlice'
import Button from '../../ui/Buttons/Button'
import Input from '../../ui/Input/Input'
import styles from './Admin.module.scss'
import nextId from 'react-id-generator';
import { useNavigate } from 'react-router-dom'
import { BLOGS_ROUTE } from '../../utils/consts'

const Admin = () => {
  const [hashtags, setHashtags] = useState([])
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [creator, setCreator] = useState('@')

  const navigate = useNavigate()

  const date = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
  })

  const dispatch = useDispatch()

  const addBlog = () => {
    if(text && title && hashtags && creator){
      dispatch(addBlogs({
        title: title,
        text: text,
        hashtags: hashtags,
        creator: creator,
        month: date.toString(),
        id: nextId()
      }))
      setText('')
      setTitle('')
      setHashtags([])
      setCreator('')
      navigate(BLOGS_ROUTE)
    }else{
      alert('Ошибка при создании поста')
    }
  }

  const addHash = () => {
    setHashtags([...hashtags, {title: '', number: Date.now()}])
  }

  const changeHash = (key, value, number) => {
    setHashtags(hashtags.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  return (
    <div className={styles.admin}>
    <Navbar />
      <div className={styles.admin__body}>
        <div className={styles.title}>
          Create Post
        </div>
        <div className={styles.input}>
          Title
          <Input
            value={title}
            placeholder='Enter title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          Text
          <textarea
            value={text}
            placeholder='Enter text'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          Creator
          <Input
            value={creator}
            placeholder='Enter name'
            onChange={(e) => setCreator(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          Hashtags
          {hashtags.map((hashtag) => 
            <Input key={hashtag.number}
              value={hashtag.title}
              placeholder='Enter hashtag'
              onChange={(e) => changeHash('title', e.target.value, hashtag.number)}
            />
          )}
          <Button onClick={addHash} style={{marginBottom: '40px'}}>Add hashtag</Button>
        </div>
        <div className={styles.submit}>
          <Button onClick={addBlog}>
            Create post
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Admin