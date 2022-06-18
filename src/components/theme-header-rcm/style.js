import styled from 'styled-components'

const ThemeHeaderRCMWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;

  .left {
    .title {
      display: inline-block;
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keywords {
      display: inline-block;
      align-items: center;

      &-item {
        padding: 0 15px;
        border-right: 1px solid #ccc;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-top: 5px;

    .more-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`

export { ThemeHeaderRCMWrapper }