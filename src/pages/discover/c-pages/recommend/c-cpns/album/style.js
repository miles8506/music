import styled from 'styled-components'

const AlbumWrapper = styled.div`

`

const AlbumContent = styled.div`
  position: relative;
  margin: 20px 0 37px;
  padding: 15px 16px 15px 25px;
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  align-items: center;

  .arrow {
    width: 25px;
    height: 25px;
    cursor: pointer;
    
    &:hover {
      opacity: .7;
    }
  }

  .arrow-left {
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    background-position: -260px -75px;
  }

  .arrow-right {
    position: absolute;
    top: 50%;
    right: 2px;
    transform: translateY(-50%);
    background-position: -293px -75px;
  }
`

const SlotWrapper = styled.div`
  display: flex !important;
`

export { AlbumWrapper, AlbumContent, SlotWrapper }