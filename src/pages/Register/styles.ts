import styled from 'styled-components';


export const Container = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;
  
    &::placeholder {
      color: #222;
    }

    & + input {
      margin-top: 1rem;
    }
  }

div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

  button[type=submit] {
    padding: 1.5rem;
    height: 4rem;
    background: rgb(200,200,222);
    color: #111;
    border-radius: 0.4rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1rem;

    transition: filter 2s;
    
    &:hover {
      filter: brightness(0.9)
    }

  }


`


export const Error = styled.p`
  color: #ff2222;
  margin: 1rem 0rem 1rem;
`