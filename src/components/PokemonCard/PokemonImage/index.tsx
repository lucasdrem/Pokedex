import React from 'react'

import Image from 'next/image'
import * as S from 'components/PokemonCard/PokemonImage/styles'

interface IPokemonImageProps {
  img: string
  name: string
}

const PokemonImage: React.FC<IPokemonImageProps> = ({ img, name }) => {
  return (
    <S.Container>
      <Image
        src={img}
        alt={`Image of ${name}`}
        quality={100}
        placeholder="blur"
        layout="fill"
        loading="eager"
      />
    </S.Container>
  )
}

export default PokemonImage
