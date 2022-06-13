import React from 'react'

import { discoverMenu } from '../../common/local-data'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper, NavBar, DiscoverMain } from './style'
import { NavLink } from 'react-router-dom'

export default function Discover(props) {
  const { children } = props.route
  return (
    <DiscoverWrapper>
      <NavBar>
        <div className="discover-navbar wrap-v1">
          {
            discoverMenu.map(item => (
              <NavLink
                to={item.link}
                className="discover-navbar-item"
                key={item.title}
              >
                <span>{item.title}</span>
              </NavLink>)
            )
          }
        </div>
      </NavBar>
      <DiscoverMain>
        {renderRoutes(children)}
      </DiscoverMain>
    </DiscoverWrapper>
  )
}
