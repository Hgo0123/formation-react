import { Link } from 'react-router-dom'


import './Article.css'

function Article(props) {
   const {article, categorie, selected, updateSelected, deleteArticle} = props
   
   const category = categorie.find(cat => cat.id ==  Number(article.category))
   
   function handleClick() {
    updateSelected(article.id)
    }
    function handleDelete(event){
        event.stopPropagation();
        deleteArticle(article.id);
    }
    
    return(
        <div className={"Article " + (selected ? "Article--selected" : '')} onClick={handleClick}>
            <div>{article.title}</div>
            <div>{category ? category.title : article.id}</div>
            <div>{article.published ? "Published" : "Draft"}</div>
            <div><Link to={`article/${article.id}`}>edit</Link></div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Article;