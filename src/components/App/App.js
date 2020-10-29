import List from '../List/List'
import Title from '../Title/Title'

import { Fragment, useEffect, useState } from 'react'


function App() {
    const [articles, setArticles] = useState([])
    const [title, setTitle] = useState('Homepage')

    useEffect(() => {
        fetch('http://localhost:3001/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
    }, [])
    
    const product = [
        {
        "id": 1,
        "prix": 6.99,
        "name": "Yaourt"
        },
        {
        "id": 1,
        "prix": 1.50,
        "name": "Poireau"
        },
    ]
    function handleClick() {
        setTitle('Articles')
    }
    return(
        <Fragment>
            <Title title={title}/>
            <button onClick={handleClick}>Change title</button>
            <List articles={articles} product={product}/>
        </Fragment>
    )
}

export default App;