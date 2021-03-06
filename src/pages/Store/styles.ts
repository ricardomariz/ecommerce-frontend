import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  button {
    margin: 0 1rem;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0.5rem;

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

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 0.5rem 0rem;
    color: var(--yellow);
  }

  input {
    max-width: 300px;
    min-width: 200px;
    height: 2.5rem;
    width: 100%;
    margin: 0.5rem 0rem;
    padding: 0.5rem;
  }

  input[type='file'] {
    color: var(--yellow);
    border: 0;
    background: transparent;
  }
  button {
    background-color: var(--yellow);
    color: var(--background);
    margin-top: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.5rem;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`

export const ProductImages = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 100%;
  
  img {
    max-width: 100%;
    display: inline-block;
  }
`