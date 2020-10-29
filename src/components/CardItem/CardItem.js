import { useState } from 'react';
import './CardItem.css'

function CardItem(props) {
    const {product} = props
    const [quantity, setQuantity] = useState(1)
    if (quantity < 0) {
        setQuantity(0)
    }

    function addQuantity() {
        setQuantity(quantity + 1)
    }
    function lessQuantity() {
        setQuantity(quantity - 1)
    }

    return(
        <div className="product">
            <div>{product.name}</div>
            <div>{product.prix * quantity} €</div>
            <div>{quantity}</div>
            <div>
            <button onClick={lessQuantity}>-</button>
            <button onClick={addQuantity}>+</button>
            </div>
        </div>
    )
}

export default CardItem;