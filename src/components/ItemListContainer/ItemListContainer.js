import getFetch from "../../helpers/getFetch";
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from "@material-ui/core";



function ItemListContainer({greeting}){

    const [productsDB, setProducts]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        getFetch
        .then(response=>setProducts(response))
        .catch(error=>alert("Ha ocurrido un error", error))
        .finally(()=>setLoading(false))
    },[])

    return(
        <div>
            <h1>{greeting}</h1>

            {loading ?  <p><CircularProgress/>Cargando...</p>:  <ItemList products={productsDB}/>}
        </div>
    )
}

export default ItemListContainer;