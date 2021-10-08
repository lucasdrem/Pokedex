import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 16px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 8px;

  margin-bottom: 40px;

  > div {
    width: min(560px, 80vw);

    .react-autosuggest__container {
      position: relative;
    }

    .react-autosuggest__input {
      width: 100%;
      height: 32px;

      padding: 8px;

      border: 1px solid #0e2030;
      border-radius: 4px;
    }

    .react-autosuggest__input--focused {
      outline: none;
    }

    .react-autosuggest__input--open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .react-autosuggest__suggestions-container {
      display: none;
    }

    .react-autosuggest__suggestions-container--open {
      display: block;
      position: absolute;

      width: min(560px, 80vw);

      border: 1px solid #0e2030;

      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;

      z-index: 2;
    }

    .react-autosuggest__suggestions-list {
      margin: 0;
      padding: 0;

      list-style-type: none;
    }

    .react-autosuggest__suggestion {
      cursor: pointer;

      padding: 8px;
    }

    .react-autosuggest__suggestion--highlighted {
      background-color: #c4c4c4;
    }

    .react-autosuggest__suggestion-match {
      color: #0e2030;
      font-weight: bold;
    }
  }
`
export const PokemonSuggestionContainer = styled.div`
  display: flex;
  align-items: center;

  column-gap: 8px;
`

export const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    color: #919191;
  }
`

export const SearchButtonContainer = styled.button`
  cursor: pointer;

  background-color: #ffff;

  height: 32px;
  width: 32px;

  border: 1px solid #0e2030;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 24px;
  }
`
