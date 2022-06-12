import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .header-content {
    display: flex;
    justify-content: space-between;
    height: 70px;
    color: #fff;

    &__left {
      display: flex;
      &-logo {
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }
    }

    &__right {
      padding-top: 20px;
      &-center-btn {
        width: 90px;
        height: 32px;
        margin-left: 17px;
        border: 1px solid #4F4F4F;
        color: #ccc;
        border-radius: 20px;
        background-color: inherit;
        cursor: pointer;

        &:hover {
          color: #fff;
          border: 1px solid #ccc;
        }
      }

      &-login {
        display: inline;
        height: 45px;
        margin: 7px 0 0 20px;
        background-color: inherit;
        color: #787878;

        &:hover {
          color: #999;
        }
      }
    }
  }
  .header-divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderSelectWrapper = styled.div`
  .item {
    display: inline-block;
    height: 100%;
    padding: 0 20px;
    line-height: 69px;
    color: #CCCCCC;
    font-size: 14px;

    &:hover {
      text-decoration: none;
      background-color: #000;
      color: #fff;
    }

    &:last-child {
    position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 20px;
        right: -15px;
        width: 28px;
        height: 19px;
        background-image: url(${require("@/assets/img/sprite_01.png")});
        background-position: -190px 0;
      }
    }
  }

  .active {
    position: relative;
    background-color: #000;
    color: #fff;
    
    .sign {
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 7px;
      bottom: -1px;
      left: 50%;
      transform: translate(-50%, 0);
      background-position: -226px 0;
    }
  }
`