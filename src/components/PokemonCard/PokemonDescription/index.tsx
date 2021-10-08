import React from 'react'

import Typography from 'components/Typography'
import * as S from 'components/PokemonCard/PokemonDescription/styles'

interface IPokemonDescriptionProps {
  num: string
  name: string
}

const PokemonDescription: React.FC<IPokemonDescriptionProps> = ({
  num,
  name
}) => {
  return (
    <>
      <S.PokemonIdText>
        <Typography variant="subtitle1">{`#${num}`}</Typography>
      </S.PokemonIdText>
      <Typography variant="h6">{name}</Typography>
    </>
  )
}

export default PokemonDescription
