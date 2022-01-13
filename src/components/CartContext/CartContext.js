import { createContext, useState } from 'react';


export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList , setCartList] = useState([])


    // function AddToCart(item){
    //     setCartList([...cartList, item])
    // }
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
    }

    function TotalPrice(){
        let totalPrice = 0 
        cartList.forEach(itemList => {totalPrice += (itemList.price * itemList.quantity)});
        return totalPrice
    }

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