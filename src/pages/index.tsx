import React from 'react'

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import PokedexList from 'components/PokedexList'
import PokedexSearch from 'components/PokedexSearch'

import { PokedexProvider } from 'hooks/usePokedexData'

import api from 'services/api'

import IPokedexData from 'dtos/IPokedexData'
import IPokemonQueryData from 'dtos/IPokemonQueryData'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  queryData
}) => {
  return (
    <PokedexProvider pokemons={queryData.data}>
      <PokedexSearch />
      <PokedexList />
    </PokedexProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const initialData: IPokemonQueryData = {
    isLoading: false,
    isError: false,
    isFetched: false,
    data: []
  }

  try {
    const pokedexInfos = await api.get<Record<string, IPokedexData[]>>('')
    Object.assign(initialData, {
      data: pokedexInfos.data.pokemon,
      isLoading: false
    })
  } catch {
    Object.assign(initialData, {
      isError: true,
      isLoading: false
    })
  }

  return {
    props: {
      queryData: initialData
    }
  }
}

export default Home
