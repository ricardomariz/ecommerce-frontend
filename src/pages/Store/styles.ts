import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  button {
    background: transparent;
    border: 0;
    color: var(--yellow);
    cursor: pointer;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.5);
    }
  }

`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; 
  margin: 1rem;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0.5rem;

  img {
    max-width: 300px;
    width: 100%;
  }

  h4 {
    color: var(--text);
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  h5 {
    color: var(--text);
    font-weight: 600;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
      margin-top: 0.2rem;
      background: transparent;
      border: 0;
      color: var(--yellow);
      cursor: pointer;
      margin-bottom: 0.5rem;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.5);
      }

    }
`

export const Remove = styled.button`
  margin: 0;
  background: transparent;
  border: 0;
  color: var(--yellow);
  cursor: pointer;
  font-size: 9px;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.5);
  }
`