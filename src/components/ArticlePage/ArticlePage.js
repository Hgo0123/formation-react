import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { createArticle, getArticle, updateArticle } from '../../services/articles/articles'
import useCategories from '../../hooks/useCategories/useCategories'

function ArticlePage(props) {

    const id = props.match.params.id
    const categories = useCategories();

    const [article, setArticle] = useState({
        "title": '',
        "category": '',
        "content": ''
    })
    useEffect(() => {
        if (id) {
            getArticle(id).then(data => setArticle(data))
        }
    }, [id, setArticle])
    

    
    function handleChange(event) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }
    const history = useHistory()
    
    function handleSubmit(event) {
        event.preventDefault()
        if(id) {
            updateArticle(article)
                .then(() => history.push('/'))
        } else {
            createArticle(article)
                .then(() => history.push('/'))
        }

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input value={article.title} name="title" onChange={handleChange} type='text'/>
                </label>
                <label>Category
                    <select value={article.category} name="category" onChange={handleChange}>
                        <option>Choose one :</option>
                        {categories.map(cat => <option value={cat.id} key={cat.id}>{cat.title}</option>)}
                    </select>
                </label>
                <label>Content
                    <textarea value={article.content} name="content" onChange={handleChange} type='text'/>
                </label>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default ArticlePage