import getOneProduct from "../../helpers/getOneProduct";
import {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const [item, setItem]=useState({});



    useEffect(()=>{
        getOneProduct
        .then(response=>setItem(response))
    })

    return(
        <div>
        <ItemDetail itemDetailDB={item}/>
        </div>
    )
}

export default ItemDetailContainer;
