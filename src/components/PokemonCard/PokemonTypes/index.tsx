import React from 'react'

import Typography from 'components/Typography'
import * as S from 'components/PokemonCard/PokemonTypes/styles'

interface IPokemonTypesProps {
  types: string[]
}

const PokemonTypes: React.FC<IPokemonTypesProps> = ({ types }) => {
  return (
    <S.Container>
      {types.map((type) => (
        <S.PokemonType type={type} key={type}>
          <Typography variant="body1">{type}</Typography>
        </S.PokemonType>
      ))}
    </S.Container>
  )
}

export default PokemonTypes
