import React, { useState } from 'react'
import { removeUser } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BLOGS_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import {ReactComponent as Search} from '../../assets/search.svg'
import {ReactComponent as Create} from '../../assets/create.svg'
import {ReactComponent as Logout} from '../../assets/logout.svg'
import {ReactComponent as Home} from '../../assets/home.svg'
import {ReactComponent as Login} from '../../assets/login.svg'
import styles from './Navbar.module.scss'
import { useAuth } from '../../hooks/useAuth';

const Navbar = ({handleSearch}) => {
  const [active, setActive] = useState(false)

  const {isAuth} = useAuth()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    dispatch(removeUser())
    localStorage.removeItem('email_name')
    navigate(LOGIN_ROUTE)
  }

  const isAdminPage = location.pathname !== ADMIN_ROUTE

  const name = useSelector(state => state.name.inputName)

  return (
    <div className={styles.nav}>
      <div className={styles.name} onClick={() => setActive(!active)}>
        {name.charAt(0).toUpperCase()}
      </div>
      {isAuth ? 
        <div className={`${styles.logout} ${active ? styles.active : ''}`}>
          <Logout onClick={logout} />
          <div style={{paddingTop: '6px'}}>logout</div>
        </div>
      :
        <div className={`${styles.logout} ${active ? styles.active : ''}`}>
          <Login onClick={logout} />
          <div style={{paddingTop: '6px'}}>login</div>
        </div>
      }
      <div className={styles.search} onClick={handleSearch}>
        <Search />
        search
      </div>
      {isAdminPage ?
        <div className={styles.create}>
          <Create onClick={() => navigate(ADMIN_ROUTE)} />
          create
        </div>
        :
        <div className={styles.create}>
          <Home onClick={() => navigate(BLOGS_ROUTE)} />
          home
        </div>
      }
    </div>
  )
}

export default Navbar