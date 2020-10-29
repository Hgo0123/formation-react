import {useState} from 'react'
import './Article.css'

function Article(props) {
   const {article, categorie} = props
    const [ selected, setSelected ] = useState(false)

    const category = categorie.find(cat => cat.id ===  article.category)

   function handleClick() {
       setSelected(!selected)
   }
    return(
        <div className={"Article " + (selected ? "Article--selected" : '')} onClick={handleClick}>
            <div>{article.title}</div>
            <div>{category ? category.title : article.id}</div>
            <div>{article.published ? "Published" : "Draft"}</div>
        </div>
    )
}

export default Article;