import styled from 'styled-components'

const DiscoverWrapper = styled.div`
  
`

const NavBar = styled.div`
  height: 34px;
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;

  .discover-navbar {
    padding-left: 180px;

    &-item {
      display: inline-block;
      padding: 5px 17px 0;
      color: #fff;

      & > span {
        display: inline-block;
        padding: 0 13px;
        border-radius: 20px;
      }
    }

    .active {
      & >span {
        background-color: #9B0909;
      }
    }
  }
`

const DiscoverMain = styled.div`
`

export { DiscoverWrapper, NavBar, DiscoverMain }