import React , {lazy} from 'react'
import { Navigate } from 'react-router-dom' 
import { RouteObject } from 'react-router-dom'


const Discover = lazy(()=>import('@/views/discover'))
const Album = lazy(()=>import('@/views/discover/c-views/album'))
const Artist = lazy(()=>import('@/views/discover/c-views/artist'))
const Djradio = lazy(()=>import('@/views/discover/c-views/djradio'))
const Ranking = lazy(()=>import('@/views/discover/c-views/ranking'))
const Songs = lazy(()=>import('@/views/discover/c-views/songs'))
const Recommand = lazy(()=>import('@/views/discover/c-views/recommand'))



const Mine = lazy(()=>import('@/views/mine'))
const Focus = lazy(()=>import('@/views/focus'))
const Download = lazy(()=>import('@/views/download'))


const routes: RouteObject[] = [
{
    path: '/',
    element: <Navigate to="/discover" />
},
  {
    path: '/discover',
    element: <Discover />,
    children:[
      {
        path:"/discover",
        element:<Navigate to="/discover/recommend" />
      },
      {
        path:"/discover/recommend",
        element:<Recommand />
      },
      {
        path:"/discover/album",
        element:<Album />
      },
      {
        path:"/discover/artist",
        element:<Artist />
      },
      {
        path:"/discover/djradio",
        element:<Djradio />
      },
      {
        path:"/discover/ranking",
        element:<Ranking />
      },
      {
        path:"/discover/songs",
        element:<Songs />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path:'/download',
    element:<Download />
    },
]

export default routes
