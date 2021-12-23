import { createContext, useState } from 'react';


export const CartContext = createContext([])

function CartContextProvider({children}){
    const [cartList , setCartList] = useState([])

    // function AddToCart(item){
    //     setCartList([...cartList, item])
    // }
    function AddToCart(item){
        const index = cartList.findIndex(i=>i.id === item.id)

        if(index >-1){
            const oldQuantity= cartList[index].cantidad

            cartList.splice(index , 1)

            setCartList ([...cartList, {...item, cantidad: item.cantidad + oldQuantity}])
        }else{
            setCartList ([...cartList, item])
        }
    }

    function DeleteCart(){
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, AddToCart, DeleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;