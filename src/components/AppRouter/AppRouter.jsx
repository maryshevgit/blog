import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import OneBlogPage from '../../pages/OneBlogPage/OneBlogPage'
import { authRoutes, publicRoutes } from '../../routes'
import { BLOGS_ROUTE } from '../../utils/consts'

const AppRouter = () => {
  const {isAuth} = useAuth()

  return (
    <Routes>
        {isAuth && authRoutes.map(({path, element}) =>
            <Route path={path} key={path} element={element} />
        )}
        {publicRoutes.map(({path, element}) =>
            <Route path={path} key={path} element={element} />
        )}
        <Route path='/blogs/:blogId' element={<OneBlogPage />} />
        <Route
            path='*'
            element={<Navigate to={BLOGS_ROUTE} replace />}
        />
    </Routes>
  )
}

export default AppRouter