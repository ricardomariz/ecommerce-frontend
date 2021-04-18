import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }

  margin: 4rem 1rem;

  h2 {
    color: var(--yellow);
  }
  
  div {
    
    display: flex;
    margin: 0 0rem;
    flex-direction: column;

    button {
      margin: 0.2rem 0rem;
      align-self: flex-end;
      background: transparent;
      border: 0;
      color: var(--yellow);
      cursor: pointer;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.5);
      }
    }

  }

  
`