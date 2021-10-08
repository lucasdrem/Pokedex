import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.08);

  padding: 64px 4px 4px 4px;

  display: flex;
  flex-direction: column;
  place-items: center;

  row-gap: 4px;
  margin: 32px 0;

  width: min(240px, 100%);
  height: 144px;

  position: relative;

  &:hover {
    animation-name: card;
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;

    @keyframes card {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(0px, -4px);
      }
      50% {
        transform: translate(0px, -8px);
      }
      75% {
        transform: translate(0px, -4px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`
