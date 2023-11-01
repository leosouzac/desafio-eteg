import styled from 'styled-components'

export const InputContainer = styled.div`
  position: relative;

  svg {
    position: absolute;

    top: 50%;
    right: 10px;
    transform: translateY(-50%);

    cursor: pointer;

    color: #333;

    transition: color 100ms;

    &:hover {
      color: #da0080;
    }
  }
`

export const Input = styled.input`
  background: transparent;
  box-sizing: border-box;
  max-width: 26.188rem;
  max-height: 3.5rem;
  border-radius: 0.375rem;
  border: 1px solid var(--primary-neutral-02, #4169E1);

  padding: 0.75rem 2rem;
  gap: 0.5rem;

  outline: none;

  color: var(--primary-neutral-01, #4169E1);

  font-family: Quicksand;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.00219rem;

  &:focus {
    border: 1px solid var(--primary-pure, #4169E1);
    background: rgba(65, 65, 65, 0.06);
  }

  &::placeholder {
    color: var(--primary-neutral-02, #333);

    font-family: Quicksand;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.00219rem;
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    width: 21rem;
    height: 2.5rem;
  }

  /* Styles for medium desktops */
  @media (min-width: 1440px) and (max-width: 1679px) {
    width: 22rem;
    height: 3rem;
  }

  /* Styles for large desktops */
  @media (min-width: 1680px) {
    width: 26.188rem;
    height: 3.5rem;
  }
`
