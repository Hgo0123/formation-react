import {useEffect, useState} from 'react'

function useCategories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [setCategories])
    return categories
}

export default useCategories;