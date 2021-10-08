import IPokedexData from 'dtos/IPokedexData'

export interface IPokedexProviderProps {
  pokemons: IPokedexData[]
}

export interface IPokedexInfos {
  visiblePokemons: IPokedexData[]
  pokemons: IPokedexData[]
  filterPokemons: (value: string) => void
}
