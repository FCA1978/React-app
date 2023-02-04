import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  name: string
  age: number
  height?: number
  children?: ReactNode
}

const Dowload: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>height:{props.height}</div>
    </div>
  )
}

Dowload.defaultProps = {
  name: '1111',
  height: 1.88
}

// Dowload.displayName = '今天天气不错'

// 直接对props进行类型约束
// const Dowload= (props:IProps)=>{
//     return (
//         <div>
//             <div>name:{props.name}</div>
//             <div>age:{props.age}</div>
//             <div>height:{props.height}</div>
//         </div>
//     )
// }

export default memo(Dowload)
