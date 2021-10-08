import React from 'react'

import * as S from 'components/PokedexList/styles'

import { usePokedexData } from 'hooks/usePokedexData'

import PokemonCard from 'components/PokemonCard'
import EmptyPokemonList from 'components/PokedexList/EmptyPokemonList'

const PokedexList: React.FC = () => {
  const { visiblePokemons } = usePokedexData()

  return visiblePokemons.length > 0 ? (
    <S.Container>
      {visiblePokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </S.Container>
  ) : (
    <EmptyPokemonList />
  )
}

export default PokedexList
