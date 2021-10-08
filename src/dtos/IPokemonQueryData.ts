import IPokedexData from 'dtos/IPokedexData'

export default interface IPokemonQueryData {
  isLoading: boolean
  isError: boolean
  isFetched: boolean
  data: IPokedexData[]
}
