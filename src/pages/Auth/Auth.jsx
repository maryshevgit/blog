import React, { useState } from 'react'
import styles from './Auth.module.scss'
import Input from '../../ui/Input/Input';
import AuthButton from '../../ui/Buttons/AuthButton';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { BLOGS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { useLocation, useNavigate } from 'react-router-dom';
import notification from '../../assets/notification.svg'
import { useDispatch, useSelector} from 'react-redux'
import { addName } from '../../redux/nameSlice';
import { setUser } from '../../redux/authSlice';
import {auth} from '../../firebase'


const Auth = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  // const {isAuth} = useAuth()
  // onClick={() = dispatch(removeUser)}

  const dispatch = useDispatch();

  const name = useSelector(state => state.name.inputName)

  const isLogin = location.pathname === LOGIN_ROUTE;

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword (auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            isAuth: true
          }))
          navigate(BLOGS_ROUTE)
        })
        .catch(() => {
            setError(true)
        });
  }

  const handleRegistration = (email, password) => {
    createUserWithEmailAndPassword (auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          }))
            setSuccess(true)
            navigate(LOGIN_ROUTE)
        })
        .catch(() => {
            setError(true)
        });
  }


  return (
    <div className={styles.auth}>
        <div className={styles.auth__sign}>
          {isLogin ? 
              <div>Login</div>
            :
              <div>Sign Up</div>
          }  
        </div>
        {error && 
          <div className={`${styles.notification} ${styles.notification_failed}`}>
            <div className={styles.notification__body}>
              FAILED
              <div>
                Sign-up failed. Please try again.
              </div>
            </div>
            <img src={notification} alt='failed' />
          </div> 
        }
        {success && 
          <div className={`${styles.notification} ${styles.notification_success}`}>
            <div className={styles.notification__body}>
              SUCCESS
              <div>
                You can Log-in now.
              </div>
            </div>
            <img src={notification} alt='failed' />
          </div> 
        }
        <div className={styles.welcome}>
            <div className={styles.welcome__title}>
                <h1>Welcome</h1>
                <div className={styles.welcome__text}>
                  {isLogin ? 'Let’s log you in quickly' : 'Let’s sign you up quickly'}
                </div>
            </div>
            <div>
              {isLogin ?
                  <div className={styles.form}>
                    <Input 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      type='email' 
                      placeholder='Enter your email' 
                    />
                    <Input 
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      type='password' 
                      placeholder='Enter password'
                    />
                  </div>
                :
                <div className={styles.form}>
                  <Input 
                    value={name}
                    type='text'
                    onChange={(e) => dispatch(addName(e.target.value))} 
                    placeholder='Enter your name' 
                  />
                  <Input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type='email' 
                    placeholder='Enter your email'
                  />
                  <Input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type='password' 
                    placeholder='Enter password'
                  />
                </div>
              }
                <div className={styles.submit}>
                  {isLogin ?
                    <AuthButton onClick={() => handleLogin(email, password)}>Submit</AuthButton>
                    :
                    <AuthButton onClick={() => handleRegistration(email, password)}>Submit</AuthButton>
                  }
                  <div>
                    {isLogin ? 
                      <div className={styles.submit__text}>
                        don’t have an account? <span onClick={() => navigate(REGISTRATION_ROUTE)}>sign-up</span>
                      </div> 
                    : 
                      <div className={styles.submit__text}>
                        already have an account? <span onClick={() => navigate(LOGIN_ROUTE)}>log-in</span>
                      </div> 
                    }
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth