import styled from 'styled-components'

const AlbumWrapper = styled.div`
width: ${props => props.width + 'px'};

  .album-img {
    position: relative;
    width: ${props => props.width + 'px'};
    height: ${props => props.size + 'px'};
    margin-top: 15px;

    & > img {
      width: ${props => props.size + 'px'};
      height: ${props => props.size + 'px'};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp + 'px'};
      text-indent: -9999px;
    }
  }

  .album-info {
    .album-name,
    .album-author {
      margin-right: 15px;
    }
  }
`

export { AlbumWrapper }