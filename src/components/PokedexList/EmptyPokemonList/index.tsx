import React from 'react'

import Image from 'next/image'

import * as S from 'components/PokedexList/EmptyPokemonList/styles'
import Typography from 'components/Typography'

const EmptyPokemonList: React.FC = () => {
  return (
    <S.Container>
      <Typography variant="h3">Sorry =(</Typography>
      <Image
        src="/img/404.svg"
        alt="Pokemon not found"
        height="auto"
        width="auto"
      />
      <S.Margin>
        <Typography variant="h6">Pokemon not found, try again!</Typography>
      </S.Margin>
    </S.Container>
  )
}

export default EmptyPokemonList
