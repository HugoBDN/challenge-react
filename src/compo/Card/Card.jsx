/* eslint-disable react/prop-types */
import React from 'react'


export default function Card({article, show}) {
  // console.log('articles', article)
//   {
//     "title": "Sweatshirt",
//     "description": "Un sweatshirt confortable pour les journées fraîches.",
//     "price": 34.99,
//     "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/909f69e72b3f4843a718aa9400f11e2c_9366/Ensemble_Crew_Sweatshirt_Noir_ED7679_04_laydown.jpg",
//     "category": "Vêtements"
// }
  return (
    <div  className='card'>
      <article className={`${show ? "" : "hidden"}`}>
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      </article>

    </div>
  )
}
