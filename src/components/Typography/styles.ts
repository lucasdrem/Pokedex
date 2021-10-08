import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ITypographyProps } from 'components/Typography'

const getTypography = ({
  variant
}: ITypographyProps): FlattenSimpleInterpolation => {
  switch (variant) {
    case 'h6':
      return css`
        font-size: 18px;
      `
    case 'h3':
      return css`
        font-size: 24px;
      `

    case 'h2':
      return css`
        font-size: 28px;
      `
    case 'h1':
      return css`
        font-size: 32px;
        font-weight: bold;
      `
    case 'body1':
      return css`
        font-size: 14px;
      `
    case 'subtitle1':
      return css`
        font-size: 12px;
        font-weight: 300;
      `
    default:
      return css`
        font-size: 18px;
      `
  }
}

export const Container = styled.div<ITypographyProps>`
  ${(props) => getTypography(props)}
`
