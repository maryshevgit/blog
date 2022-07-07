import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from '../../pages/Blogs/Blogs.module.scss'

const BlogComponent = ({query}) => {
    const blogs = useSelector(state => state.blogs.blogs)

    const navigate = useNavigate()

    const search = (data) => {
        return data.filter((item) => item.title.toLowerCase().includes(query) || item.text.toLowerCase().includes(query))
    }

  return (
    <div>
        {search(blogs).map((blog, idx) => 
            <div className={styles.blogs__body} key={idx}>
                <div className={styles.body__blog}>
                    <div className={styles.blog__info}>
                        <div className={styles.blog__data}>
                            {blog.month}
                        </div>
                        <div className={styles.blog__creator}>
                            <div>
                                {blog.creator}
                            </div>
                        </div>
                    </div>
                    <div className={styles.blog}>
                        <div className={styles.blog__title}>
                            {blog.title[0].toUpperCase() + blog.title.slice(1)} 
                        </div>
                        <div className={styles.blog__text}>
                            {blog.text[0].toUpperCase() + blog.text.slice(1)} 
                        </div>
                        <span onClick={() => navigate(`${blog.id}`)}>...read more</span>
                        <div className={styles.blog__hashtags}>
                            {blog.hashtags.map((hashtag, idx) => 
                                <div key={idx} className={styles.hashtag}>
                                    {hashtag.title}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
        
    </div>
  )
}

export default BlogComponent