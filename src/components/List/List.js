import Article from '../Article/Article'
import CardItem from '../CardItem/CardItem'


function List(props) {
    const {articles, product} = props
    return(
        <div>
            {articles.map(art => <Article article={art} key={art.id}/>)}
            {product.map(prod => <CardItem product={prod} key={prod.id}/>)}
        </div>
    )
}

export default List;