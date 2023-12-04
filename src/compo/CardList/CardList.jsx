import React from 'react'
import Card from '../Card/Card'

import "../CardList/CardList.css"


export default function CardList({articles, filtre}) {
  
  return (
    <div className='cardList'>
      {articles.filter((article) => filtre !== "" ? article.category === filtre : article

        
      ).map(({id,...article}) => (
        <Card key = {id} article= {article} />

      ))}
        
    </div>

  )
}
