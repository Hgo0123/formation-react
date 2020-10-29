import {useState} from 'react'
import './Article.css'

function Article(props) {
   const {article} = props
   const [ selected, setSelected ] = useState(false)

   function handleClick() {
       console.log('click', article.title);
       setSelected(!selected)
   }
    return(
        <div className={"Article " + (selected ? "Article--selected" : '')} onClick={handleClick}>
            <div>{article.title}</div>
            <div>{article.category}</div>
            <div>{article.published ? "Published" : "Draft"}</div>
        </div>
    )
}

export default Article;