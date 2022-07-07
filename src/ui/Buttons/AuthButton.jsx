import React from 'react'
import styles from './AuthButton.module.scss'

const AuthButton = (props) => {
  return (
    <button className={styles.button} {...props} >{props.children}</button>
  )
}

export default AuthButton