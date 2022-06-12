import React from 'react'

import { headerLinks } from '@/common/local-data'

import MSInput from '../ms-input'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderSelectWrapper } from './style'
import { SearchOutlined } from '@ant-design/icons'

export default function MSHeader() {
  const isShowNavItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink
          to={item.link}
          key={item.title}
          className="item"
          exact
        >
          {item.title}
          <i className='sign sprite_01'></i>
        </NavLink>
      )
    } else {
      return (
        <NavLink
          to={item.link}
          key={item.title}
          className="item"
        >
          {item.title}
        </NavLink>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="header-content wrap-v1">
        <div className="header-content__left">
          <a href="#/" className='header-content__left-logo sprite_01'>
            logo
          </a>
          <HeaderSelectWrapper>
            {
              headerLinks.map((item, index) => isShowNavItem(item, index))
            }
          </HeaderSelectWrapper>
        </div>
        <div className="header-content__right">
          <MSInput
            placeholder="音樂/視頻/電台/用戶"
            prefix={<SearchOutlined />}
            bordered={false}
          />
          <button className='header-content__right-center-btn'>創作者中心</button>
          <a href="/#" className='header-content__right-login'>登入</a>
        </div>
      </div>
      <div className="header-divider"></div>
    </HeaderWrapper>
  )
}
