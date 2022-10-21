import React from 'react'
import { SearchInput } from '../components/SearchInput'
import { CocktailList } from '../components/CocktailList'

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <SearchInput/>
        <CocktailList/>
    </div>
  )
}

export default Home