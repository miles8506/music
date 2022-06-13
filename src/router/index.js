import React from 'react'

import { Redirect } from 'react-router-dom'

import Discover from "@/pages/discover"
import Mine from "../pages/mine"
import Friend from "../pages/friend"
import NotFound from "../components/not-found"
import Album from '../pages/discover/c-pages/album'
import Artist from '../pages/discover/c-pages/artist'
import DjRadio from '../pages/discover/c-pages/dj-radio'
import Ranking from '../pages/discover/c-pages/ranking'
import Recommend from '../pages/discover/c-pages/recommend'
import Songs from '../pages/discover/c-pages/songs'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (<Redirect to="/discover" />)
  },
  {
    path: '/discover',
    component: Discover,
    children: [
      {
        path: '/discover',
        exact: true,
        render: () => (<Redirect to="/discover/recommend" />),
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/djRadio',
        component: DjRadio
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/songs',
        component: Songs
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    component: NotFound
  }
]

export default routes
