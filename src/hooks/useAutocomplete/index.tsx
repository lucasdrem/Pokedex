import IPokedexData from 'dtos/IPokedexData'
import { usePokedexData } from 'hooks/usePokedexData'
import { useMemo, useCallback, useState } from 'react'
import { filterPokemonsByNameAndId } from 'utils/functions'

interface IUseAutocompleteProps {
  pokemons: IPokedexData[]
  maxListSize: number
}

const useAutocomplete = ({ pokemons, maxListSize }: IUseAutocompleteProps) => {
  const { filterPokemons } = usePokedexData()

  const [suggestions, setSuggestions] = useState<IPokedexData[]>([])
  const [inputValue, setInputValue] = useState('')

  const getSuggestionValue = useCallback((suggestion) => suggestion.name, [])

  const getSuggestions = useCallback(
    (value) => {
      const inputValue = value.trim().toLowerCase()
      const inputLength = inputValue.length

      if (inputValue) {
        return filterPokemonsByNameAndId(pokemons, inputValue, inputLength)
      }

      return []
    },
    [pokemons]
  )

  const onSuggestionsFetchRequested = useCallback(
    ({ value }) => {
      setSuggestions(getSuggestions(value).splice(0, maxListSize))
    },
    [getSuggestions, maxListSize]
  )

  const onSuggestionsClearRequested = useCallback(() => {
    setSuggestions([])
  }, [])

  const onChange = useCallback((_event, { newValue }) => {
    setInputValue(newValue)
  }, [])

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      filterPokemons(inputValue)
    }
  }

  const inputProps = {
    placeholder: 'Search by name or number...',
    value: inputValue,
    onChange,
    onKeyDown: handleKeyDown
  }

  return useMemo(
    () => ({
      suggestions,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      getSuggestionValue,
      inputProps
    }),
    [
      suggestions,
      getSuggestionValue,
      inputProps,
      onSuggestionsClearRequested,
      onSuggestionsFetchRequested
    ]
  )
}

export default useAutocomplete
