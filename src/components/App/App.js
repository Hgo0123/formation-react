import List from '../List/List'
import Title from '../Title/Title'
import Filter from '../Filters/Filters'

import useArticles from '../../hooks/useArticles/useArticles'
import useCategories from '../../hooks/useCategories/useCategories'

import { Fragment, useEffect, useState } from 'react'

function App() {
   
    const [title, setTitle] = useState('Homepage')
    const articles = useArticles()
    const categories = useCategories();
    
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

   const [filters, setFilters] = useState({
       title: '',
       categories: '',
       published: '',
   });

   function handleChangeFilter(event) {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value
        })
   }
    
    const filteredArticles = articles
    .filter(art => art.title.includes(filters.title))
    .filter(art => filters.categories === '' || art.category === Number(filters.categories))
    .filter(art => filters.published === '' || (art.published === true && filters.published === 'published') || (art.published === false && filters.published === 'draft'));

    return(
        <Fragment>
            <Title title={title}/>
            <button onClick={handleClick}>Change title</button>
            <Filter title={filters.title} category={filters.categories} published={filters.published} handleChange={handleChangeFilter} categories={categories}/>
            <List articles={filteredArticles} categories={categories} product={product}/>
        </Fragment>
    )
}

export default App;