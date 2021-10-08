import React from 'react'
import type { FC } from 'react'

import Image from 'next/image'

import { NextComponentType, NextPageContext } from 'next'
import * as S from 'hocs/Header/styles'
import Typography from 'components/Typography'

type HeaderFn = (
  WrappedComponent: NextComponentType<NextPageContext, unknown, {}>
) => FC

const Header: HeaderFn = (WrappedComponent) => {
  const WrappedComponentWithHeader: FC = (pageProps): JSX.Element | null => {
    return (
      <>
        <S.Container>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png"
            alt="Pokeball"
            width={80}
            height={80}
          />
          <S.TextContainer>
            <Typography variant="h1">POKEDEX</Typography>
            <Typography variant="subtitle1">
              by <i>@lucasdrem</i>
            </Typography>
          </S.TextContainer>
        </S.Container>
        <WrappedComponent {...pageProps} />
      </>
    )
  }

  return WrappedComponentWithHeader
}

export default Header
