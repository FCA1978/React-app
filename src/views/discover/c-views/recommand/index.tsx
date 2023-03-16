import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import {
  fetchRecommendDataAction,
  fetchRankingDataAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommand: FC<IProps> = () => {
  /* 发起action(获取数据) */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  }, [])

  /* render函数的jsx */
  return (
    <div>
      <TopBanner></TopBanner>
      <RecommendWrapper>
        <div className="content">
          <div className="left">
            <HotRecommend></HotRecommend>
            <NewAlbum></NewAlbum>
            <TopRanking></TopRanking>
          </div>
          <div className="right">
            <UserLogin></UserLogin>
            <SettleSinger></SettleSinger>
            <HotAnchor></HotAnchor>
          </div>
        </div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(Recommand)
