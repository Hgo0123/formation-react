import {useState} from 'react'

import Article from '../Article/Article'
import CardItem from '../CardItem/CardItem'


function List(props) {
    const {articles, product, categories, deleteArticle} = props

   const [ selectedArticles, setSelectedArticles ] = useState({})
   
   function updateSelected(id) {
    const clone = {...selectedArticles}
    clone[id] = !clone[id]
    setSelectedArticles(clone)
   }


    return(
        <div>
            {articles.map(art => <Article article={art} categorie={categories} key={art.id} selected={selectedArticles[art.id]} updateSelected={updateSelected} deleteArticle={deleteArticle}/>)}
            {product.map(prod => <CardItem product={prod} key={prod.name}/>)}
        </div>
    )
} 

export default List;