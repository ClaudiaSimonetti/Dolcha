import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext([])

function CartContextProvider({children}){
    
    const [cartList , setCartList] = useState([])

    function AddToCart(item){
        const index = cartList.findIndex(itemList=>itemList.id === item.id)
        if(index >-1){
            const oldQuantity= cartList[index].quantity
            cartList.splice(index , 1)
            setCartList ([...cartList, {...item, quantity: item.quantity + oldQuantity}])
        }else{
            setCartList ([...cartList, item])
        }
    }

    function DeleteCart(){
        setCartList([])
    }

    function DeleteItem(id){
        setCartList(cartList.filter(itemList=>id !== itemList.id))
        Swal.fire('Producto eliminado de carrito')   
    }

    function TotalPrice(){
        let totalPrice = 0 
        cartList.forEach(itemList => {totalPrice += (itemList.price * itemList.quantity)});
        return totalPrice
    }

    //Suma items en el budge
    function QuantityItemsCart(){
        let totalQuantity = 0
        cartList.forEach(itemList=>{totalQuantity += itemList.quantity})
        return totalQuantity
    }

    return(
        <CartContext.Provider value={{cartList, AddToCart, DeleteCart, DeleteItem, TotalPrice, QuantityItemsCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;