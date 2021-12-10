import getOneProduct from "../../helpers/getOneProduct";
import {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer(){
    const [item, setItem]=useState({})
    const [loading, setLoading]=useState(true)
    



    useEffect(()=>{
        getOneProduct
        .then(response=>setItem(response))
        .finally(()=>setLoading(false))

    })

    return(
        <div>
        {loading ? false : <ItemDetail itemDetailDB={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
