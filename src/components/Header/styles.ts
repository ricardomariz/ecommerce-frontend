import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 4rem 0.5rem;

  h2 {
    color: var(--yellow);
  }
  
  div {
    
    display: flex;
    flex-direction: column;

    button {
      margin-top: 0.2rem;
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