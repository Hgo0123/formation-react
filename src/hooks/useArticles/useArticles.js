import {useEffect, useState} from 'react'

function useArticles() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/articles')
        .then(response => response.json())
        .then(data => setArticles(data))
    }, [setArticles])
    return articles
}

export default useArticles;