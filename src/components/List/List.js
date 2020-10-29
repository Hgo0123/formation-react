import Article from '../Article/Article'
import CardItem from '../CardItem/CardItem'


function List(props) {
    const {articles, product, categories} = props
    return(
        <div>
            {articles.map(art => <Article article={art} categorie={categories} key={art.id}/>)}
            {product.map(prod => <CardItem product={prod} key={prod.name}/>)}
        </div>
    )
}

export default List;