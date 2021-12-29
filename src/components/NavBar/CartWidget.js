import { FaShoppingCart } from 'react-icons/fa'; 
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react'

function CartWidget(){
    const { QuantityItemsCart } = useContext(CartContext)
    const quantityItems = QuantityItemsCart()
    
    return(
        <div>
            {quantityItems >= 1 ? <FaShoppingCart  /> : " "}
            {quantityItems >= 1 ? quantityItems : " "}
        </div>
    )
}

export default CartWidget;