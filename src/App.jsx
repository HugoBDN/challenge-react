import "./App.css";
import Navbar from "./compo/Navbar/Navbar"; 
// import Card from "./compo/Card/Card";
import Footer from "./compo/Footer/Footer";
import CardList from "./compo/CardList/CardList";
import data from "./data/data.json"
import { useState } from "react";


function App() {
  const [filtre, setFiltre] = useState("")
  const [articles, setArticles] = useState(data)
  const categoryFiltred = []
  articles.map((article)=>{
    
   const isExist = categoryFiltred.includes(article.category)
   if(!isExist){
     categoryFiltred.push(article.category)
    
   }
   console.log('article.category', article.category)
  })
  const handleClick = (e) => {
    setFiltre(e.target.name)
    
    
    
    
  }
  
  return <>
  <Navbar  />
  <div>
   {categoryFiltred.map((cat, i)=>(
    <button onClick={handleClick} type="button" key = {i} name={cat}>{cat}</button>
   ))}
  </div>
  <div>
  <CardList  filtre={filtre} articles={articles} />
  </div>
  <Footer />
  </>
}

export default App;
