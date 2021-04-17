import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`


export const FormLogin = styled.form`
  display: flex;
  margin: 0 auto;
  min-width: 280px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    height: 2.4rem;
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
  }

  button {
    background-color: var(--yellow);
    color: var(--background);
    margin-top: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    margin-top: 2rem;
    color: var(--text);

    & + p {
      margin-top: 0rem;
    }
  }
`

