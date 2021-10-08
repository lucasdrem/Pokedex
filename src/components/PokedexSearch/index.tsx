import React, { useCallback } from 'react'

import Image from 'next/image'

import * as S from 'components/PokedexSearch/styles'

import useAutocomplete from 'hooks/useAutocomplete'
import { usePokedexData } from 'hooks/usePokedexData'

import Typography from 'components/Typography'

import Autosuggest, { RenderSuggestionParams } from 'react-autosuggest'
import isMobile from 'ismobilejs'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import IPokedexData from 'dtos/IPokedexData'

const PokedexSearch: React.FC = () => {
  const { pokemons, filterPokemons } = usePokedexData()
  const {
    suggestions,
    onSuggestionsFetchRequested,
    onSuggestionsClearRequested,
    getSuggestionValue,
    inputProps
  } = useAutocomplete({ pokemons, maxListSize: 6 })

  const renderSuggestion = (
    suggestion: IPokedexData,
    { query }: RenderSuggestionParams
  ) => {
    const matches = match(suggestion.name, query)
    const parts = parse(suggestion.name, matches)

    return (
      <S.PokemonSuggestionContainer>
        <Image src={suggestion.img} height={40} width={40} loading="eager" />
        <S.PokemonDescription>
          <Typography variant="subtitle1">
            <i>{`#${suggestion.id}`}</i>
          </Typography>
          <Typography>
            {parts.map((part, index) => {
              const className = part.highlight
                ? 'react-autosuggest__suggestion-match'
                : ''

              return (
                <span className={className} key={`${part.text}||${index}`}>
                  {part.text}
                </span>
              )
            })}
          </Typography>
        </S.PokemonDescription>
      </S.PokemonSuggestionContainer>
    )
  }

  const handleOnSearch = useCallback(() => {
    const inputValue = inputProps?.value
    filterPokemons(inputValue)
  }, [filterPokemons, inputProps?.value])

  return (
    <S.Container>
      <Typography variant="h2">Throw Your Pokeball!</Typography>

      <S.SearchContainer>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          focusInputOnSuggestionClick={!isMobile}
        />
        <S.SearchButtonContainer onClick={handleOnSearch}>
          <img src="data:image/png;base64,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" />
        </S.SearchButtonContainer>
      </S.SearchContainer>
    </S.Container>
  )
}

export default PokedexSearch
