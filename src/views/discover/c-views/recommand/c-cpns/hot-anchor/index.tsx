import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { hotRadios } from '@/assests/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播">
        <div className="anchors">
          {hotRadios.map((item) => {
            return (
              <div className="item" key={item.picUrl}>
                <a className="img">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position">{item.position}</div>
                </div>
              </div>
            )
          })}
        </div>
      </AreaHeaderV2>
    </AnchorWrapper>
  )
}

export default memo(HotAnchor)
