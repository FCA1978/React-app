import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppPlayerBar from '@/views/player/app-palyer-bar'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return <AppPlayerBar></AppPlayerBar>
}

export default memo(AppFooter)
