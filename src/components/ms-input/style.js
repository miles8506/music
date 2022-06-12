import styled from 'styled-components'

const MSInputWrapper = styled.div`
  display: ${(props) => props.customStyle?.display ?? 'inline-block'};
  width: 158px;
  height: 32px;
  border-radius: 16px;
  background-color: #fff;

  .ant-input {
    &::placeholder {
      font-size: 12px;
    }

    &:focus,
    &:hover {
      border-color: #fff;
      border-right-width: 1px;
    }
  }
`

export default MSInputWrapper