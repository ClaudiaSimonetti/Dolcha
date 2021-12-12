import getFetch from "../../helpers/getFetch";
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from "@material-ui/core";
import { useParams} from 'react-router-dom';



function ItemListContainer({greeting}){

    const [productsDB, setProducts]=useState([])
    const [loading, setLoading]=useState(true)

    const {idCategory}=useParams()//con esto extraigo el valor del parametro que vendra despues de mi ruta categoria.

    

    useEffect(()=>{
        if(idCategory){
            getFetch
            .then(response=>setProducts(response.filter(productByCategory=>productByCategory.category === idCategory)))
            .catch(error=>alert("Ha ocurrido un error", error))
            .finally(()=>setLoading(false))

        }else{
            getFetch
            .then(response=>setProducts(response))
            .catch(error=>alert("Ha ocurrido un error", error))
            .finally(()=>setLoading(false))
        }
    },[idCategory])

    return(
        <div>
            <h1>{greeting}</h1>

            {loading ?  <p><CircularProgress/>Cargando...</p>:  <ItemList products={productsDB}/>}
        </div>
    )
}

export default ItemListContainer;