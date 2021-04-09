import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 600;
    margin: 10px 0;
  }
`

export const Image = styled.img`
  max-height: 400px;
  cursor: pointer;
  transition: filter 0.2;

  &:hover {
    filter: brightness(0.9)
  }
`
