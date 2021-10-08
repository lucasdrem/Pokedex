import React, {
  createContext,
  useMemo,
  useContext,
  useCallback,
  useState
} from 'react'

import {
  IPokedexInfos,
  IPokedexProviderProps
} from 'hooks/usePokedexData/types'
import { filterPokemonsByNameAndId } from 'utils/functions'

const PokedexContext = createContext<IPokedexInfos>({} as IPokedexInfos)

const PokedexProvider: React.FC<IPokedexProviderProps> = ({
  children,
  pokemons
}) => {
  const [visiblePokemons, setVisiblePokemons] = useState(pokemons)

  const filterPokemons = useCallback(
    (value) => {
      const inputValue = value.trim().toLowerCase()
      const inputLength = inputValue.length

      const filteredPokemons = filterPokemonsByNameAndId(
        pokemons,
        inputValue,
        inputLength
      )
      setVisiblePokemons(filteredPokemons)
    },
    [pokemons]
  )

  const value = useMemo(() => ({ visiblePokemons, pokemons, filterPokemons }), [
    pokemons,
    visiblePokemons,
    filterPokemons
  ])

  return (
    <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
  )
}

function usePokedexData(): IPokedexInfos {
  const context = useContext(PokedexContext)

  if (!context) {
    throw new Error('usePokedexData must be used within a PokedexProvider')
  }

  return context
}

export { PokedexProvider, usePokedexData }
