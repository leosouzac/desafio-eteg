import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem 1rem;

`

export const ContentContainer = styled.div`
  position: absolute;
  border-radius: 1.5rem;
  background: linear-gradient(180deg, #fefefe 0%, rgba(254, 254, 254, 0) 100%);
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.16);

  max-width: 40rem;
  max-height: 52rem;

  display: flex;
  flex-direction: column;

  /* Styles for small desktops */

  @media (min-width: 1200px) and (max-width: 1439px) {
    width: 27rem;
    height: 36rem;
  }

  /* Styles for medium desktops */
  @media (min-width: 1440px) and (max-width: 1679px) {
    width: 29rem;
    height: 41rem;
  }

  /* Styles for large desktops */
  @media (min-width: 1680px) {
    width: 40rem;
    height: 52rem;
  }
`

export const FormContainer = styled.div`
  max-height: 9rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div + div {
      margin-top: 2rem;
    }

    button {
      border: 0;
      margin-top: 2rem;

      max-height: 3rem;
      max-width: 26.188rem;

      border-radius: 0.375rem;
      background: var(--primary-pure, #4169E1);

      color: var(--primary-neutral-05, #fefefe);
      text-align: center;

      font-family: Quicksand;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem;
      letter-spacing: 0.035rem;
      text-transform: uppercase;

      transition:
        color 300ms,
        background 300ms;

      cursor: pointer;

      &:hover {
        background: #4169E1;
        opacity: 0.7
      }
    }

    
  }

  @media (min-width: 1200px) and (max-width: 1439px) {
    height: 18.5rem;

    button {
      width: 21rem;
      height: 2.5rem;
    }

    hr {
      width: 6.25rem;
    }
  }

  /* Styles for medium desktops */
  @media (min-width: 1440px) and (max-width: 1679px) {
    height: 8rem;

    button {
      width: 22rem;
      height: 3rem;
    }

    hr {
      width: 6.75rem;
    }
  }

  /* Styles for large desktops */
  @media (min-width: 1680px) {
    height: 9rem;

    button {
      height: 3.5rem;
      width: 26.188rem;
    }

    hr {
      width: 8.875rem;
    }
  }
`

export const Title = styled.h1`

  span {
    font-family: 'Helvetica';
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3rem; /* 120% */

  }
`
