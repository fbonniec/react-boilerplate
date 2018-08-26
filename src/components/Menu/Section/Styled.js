import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#f7f7f7' : 'white')};
  &:hover {
    background-color: #f7f7f7;
  }
`

export const Title = styled.h3``
