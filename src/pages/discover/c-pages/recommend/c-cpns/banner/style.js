import styled from 'styled-components'

const BannerWrapper = styled.div`
  background: url(${(props) => props.bgcImage}) center/6000px;

  .banner {
    position: relative;
    display: flex;
    height: 270px;
    background-color: red;

    .control-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 37px;
      height: 63px;
      background: url(${require("@/assets/img/banner_sprite.png")});
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
    }

    .left-btn {
      left: -68px;
      background-position: 0 -360px;
    }
    
    .right-btn {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`

const LeftBanner = styled.div`
  width: 730px;
  height: 100%;

  .ant-carousel {
    height: 270px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

const RightBanner = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 250px;
  height: 100%;
  background: url(${require("@/assets/img/download.png")});
`

export {
  BannerWrapper,
  LeftBanner,
  RightBanner
}