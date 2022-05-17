import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cockTails, loading} = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (cockTails.length < 1) {
    return (
      <h2 className='section-title'>No cocktail match your search criteria</h2>
    )
  }
  return (
    <section>
      <h2 className='section-title'>Cocktails</h2>
      <div className="cocktails-center">
        {cockTails.map((cocktail)=>{
        return <Cocktail key={cocktail.id} {...cocktail}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
