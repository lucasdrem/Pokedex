import React from 'react'

import * as S from 'components/PokemonCard/styles'

import IPokedexData from 'dtos/IPokedexData'

import PokemonTypes from 'components/PokemonCard/PokemonTypes'
import PokemonDescription from 'components/PokemonCard/PokemonDescription'
import PokemonImage from 'components/PokemonCard/PokemonImage'

interface IPokemonCardProps {
  pokemon: IPokedexData
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const { type, name, num, img } = pokemon

  return (
    <S.Container>
      <PokemonImage name={name} img={img} />
      <PokemonDescription num={num} name={name} />
      <PokemonTypes types={type} />
    </S.Container>
  )
}

export default PokemonCard
