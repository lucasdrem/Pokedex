import IPokedexData from 'dtos/IPokedexData'

export const filterPokemonsByNameAndId = (
  pokemons: IPokedexData[],
  inputValue: string,
  inputLength: number
): IPokedexData[] => {
  return pokemons.filter((pokemon) =>
    [pokemon.name.toLowerCase(), String(pokemon.id)].some(
      (compareField) => compareField.slice(0, inputLength) === inputValue
    )
  )
}
