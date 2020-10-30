import './Filter.css'
function Filter(props){
    const {title, category, handleChange, categories, published} = props

    return(
        <div className='filter'>
            <input name="title" type='text' value={title} onChange={handleChange}/>
            <select name="categories" value={category} onChange={handleChange}>
                <option value=''>...</option>
                {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.title}</option>)}
            </select>
            <label>
            All: 
                <input
                type="radio"
                name="published"
                value=""
                checked={published === ''}
                onChange={handleChange}
                />
            </label>
            <label>
            Published : 
                <input
                type="radio"
                name="published"
                value="published"
                checked={published === 'published'}
                onChange={handleChange}
                />
            </label>
            <label>
            Draft : 
                <input
                type="radio"
                name="published"
                value="draft"
                checked={published === 'draft'}
                onChange={handleChange}
                />
            </label>
        </div>
    )
}

export default Filter