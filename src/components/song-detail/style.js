import styled from 'styled-components'

const SongDetailWrapper = styled.a.attrs({
  href: 'todo'
})`
  width: 140px;
  height: 170px;
`

const SongDetailPic = styled.div`
  position: relative;

  .song-img {
    width: 140px;
    height: 140px;
  }

  .bar {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 7px 10px 5px;
    background-position: 0 -534px;

    &-count {
      display: flex;
      align-items: center;
      color: #ccc;

      .erji {
        margin-right: 5px;
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
      }
    }

    .play {
      display: inline-block;
      width: 16px;
      height: 17px;
      background-position: 0 0;
    }
  }
`

const SongName = styled.div`
  margin: 8px 0 3px;
  color: #000;
  font-size: 14px;
`

export {
  SongDetailWrapper,
  SongDetailPic,
  SongName
}