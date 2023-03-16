import React, { Suspense, useEffect } from 'react'
import {useRoutes} from 'react-router-dom'
import routes from './router'
import 'antd/dist/reset.css';
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useAppDispatch } from './store';
import { fetchCurrentSongAction } from './views/player/store/player';

function App() {

  const dispath = useAppDispatch()
  useEffect(()=>{
    dispath(fetchCurrentSongAction(1842025914))
  },[])

  return (
    <div className="App">
        <AppHeader />
        <Suspense fallback="loading..">
          <div className="download">{useRoutes(routes)}</div>
        </Suspense>
        <AppFooter />
    </div>
  )
}

export default App
