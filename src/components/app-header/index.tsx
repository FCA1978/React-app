import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderRight, HeaderWrapper, HeaderLeft } from './style'
import { Input } from 'antd';
const { Search } = Input;
import headerTitle from '@/assests/data/header_titles.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  /* 组件内部的状态 */
  //  const [currentIndex,setCurrentIndex] = useState(0)

  /* 组件的展示逻辑 */
  function showItem(item: any) {
    if (item.type === 'path') {
      return (
        <NavLink
          to={item.link}
          className={({ isActive }) => {
            return isActive ? 'active' : undefined
          }}
        >
          {item.title}
          <i className='icon sprite_01'></i>
        </NavLink>
      )
    } else {
      return (
        <a href="{item.link}"  rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>

          <div className="title-list">
            {headerTitle.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Search className='searcg' style={{ width: 200 }}></Search>
          <span className='center'>创作者中心</span>
          <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
