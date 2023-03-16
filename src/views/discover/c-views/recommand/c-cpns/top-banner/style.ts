import styled from 'styled-components'

interface BannerProps {
  bgImage?: string
}
export const BannerWrapper = styled.div<BannerProps>`
  background: url(${(props) => props.bgImage}) center center/6000px;
  transition: background linear 0.1s;
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  /*
  .banner-list {
    position: relative;
  } */

  .banner-item {
    /* position: absolute;
    left: 0;
    top: 0; */
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0.2;
    transition: opacity 1s ease-out;
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assests/img/banner_sprite.png')}) 3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
/* 通过这种方式添加属性就不用写js代码了 */
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assests/img/download.png')});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assests/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`