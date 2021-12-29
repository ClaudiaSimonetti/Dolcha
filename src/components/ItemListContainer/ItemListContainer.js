import getFetch from "../../helpers/getFetch";
import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from "@material-ui/core";
import { useParams} from 'react-router-dom';

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';


function ItemListContainer({greeting}){

    const [productsDB, setProducts]=useState([])
    const [loading, setLoading]=useState(true)

    const {idCategory}=useParams()//con esto extraigo el valor del parametro que vendra despues de mi ruta categoria.

    const [producto, setProducto]=useState({})
    

    console.log(producto)
    console.log(productsDB)
    

    // useEffect(()=>{
    //     if(idCategory){
    //         getFetch
    //         .then(response=>setProducts(response.filter(productByCategory=>productByCategory.category === idCategory)))
    //         .catch(error=>alert("Ha ocurrido un error", error))
    //         .finally(()=>setLoading(false))

    //     }else{
    //         getFetch
    //         .then(response=>setProducts(response))
    //         .catch(error=>alert("Ha ocurrido un error", error))
    //         .finally(()=>setLoading(false))
    //     }
    // },[idCategory])

    useEffect(()=>{
        const db=getFirestore()
        // const queryCollection=collection(db, 'items')
        // getDocs(queryCollection)
        // .then(response =>setProducts(response.docs.map(prod =>({ id: prod.id, ...prod.data() }) )  ) )
        // .catch(error=>console.log(error))
        // .finally(()=>setLoading(false))
        
        if(idCategory){
            const queryCollection=query(collection(db,'items'), where('categoryId','==', idCategory)     )
            getDocs(queryCollection)
            .then(response=>setProducts(response.docs.map(prod =>({ id: prod.id, ...prod.data() }) )  ) )
            .catch(error=>alert("Ha ocurrido un error", error))
            .finally(()=>setLoading(false))

        }else{
            const queryCollection=collection(db,'items')
            getDocs(queryCollection)
            .then(response=>setProducts(response.docs.map(prod =>({ id: prod.id, ...prod.data() }) )  ) )
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