import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

interface IPokemonType {
  type: string
}

export const Container = styled.div`
  display: flex;
  column-gap: 8px;
`

const getColor = (type: string): FlattenSimpleInterpolation => {
  switch (type) {
    case 'Bug':
      return css`
        background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
        background-color: #729f3f;
        color: #ffffff;
      `
    case 'Dragon':
      return css`
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
        background-color: #53a4cf;
        color: #ffffff;
      `
    case 'Electric':
      return css`
        background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
        background-color: #eed535;
        color: #212121;
      `
    case 'Fighting':
      return css`
        background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
        background-color: #d56723;
        color: #fff;
      `
    case 'Fire':
      return css`
        background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
        background-color: #fd7d24;
        color: #fff;
      `
    case 'Flying':
      return css`
        background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
        background-color: #3dc7ef;
        color: #212121;
      `
    case 'Ghost':
      return css`
        background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
        background-color: #7b62a3;
        color: #fff;
      `
    case 'Grass':
      return css`
        background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
        background-color: #9bcc50;
        color: #212121;
      `
    case 'Ground':
      return css`
        background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
        background-color: #f7de3f;
        color: #212121;
      `
    case 'Ice':
      return css`
        background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
        background-color: #51c4e7;
        color: #212121;
      `
    case 'Normal':
      return css`
        background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
        background-color: #a4acaf;
        color: #212121;
      `
    case 'Poison':
      return css`
        background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
        background-color: #b97fc9;
        color: #fff;
      `
    case 'Psychic':
      return css`
        background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
        background-color: #f366b9;
        color: #fff;
      `
    case 'Rock':
      return css`
        background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
        background-color: #a38c21;
        color: #fff;
      `
    case 'Water':
      return css`
        background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
        background-color: #4592c4;
        color: #fff;
      `
    default:
      return css`
        background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
        background-color: #a4acaf;
        color: #212121;
      `
  }
}

export const PokemonType = styled.div<IPokemonType>`
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;

  max-width: 120px;

  padding: 4px 8px;

  ${({ type }) => getColor(type)}
`
