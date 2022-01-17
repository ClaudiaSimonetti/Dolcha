import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { CircularProgress } from "@material-ui/core";
import { useParams} from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './ItemListContainer.css';

function ItemListContainer({greeting}){

    const [productsDB, setProducts]=useState([])
    
    const [loading, setLoading]=useState(true)
    
    //con esto extraigo el valor del parametro que vendra despues de mi ruta categoria.
    const {idCategory}=useParams()

    useEffect(()=>{

        const db=getFirestore()
        
        if(idCategory){
            const queryCollection=query(collection(db,'items'), where('categoryId','==', idCategory)     )
            getDocs(queryCollection)
            .then(response=>setProducts(response.docs.map(prod =>({ id: prod.id, ...prod.data() }) )  ) )
            .catch(error=>Swal.fire({icon: 'error',
                                    title: 'Oops...',
                                    text: 'Ha ocurrido un error'}, error))
            .finally(()=>setLoading(false))
        }else{
            const queryCollection=collection(db,'items')
            getDocs(queryCollection)
            .then(response=>setProducts(response.docs.map(prod =>({ id: prod.id, ...prod.data() }) )  ) )
            .catch(error=>Swal.fire({icon: 'error',
                                    title: 'Oops...',
                                    text: 'Ha ocurrido un error'}, error))
            .finally(()=>setLoading(false))
        }
    },[idCategory])

    return(
        <div>
            <h1 className='textItemListContainer'>{greeting}</h1> 
            {loading ?  <p><CircularProgress/>Cargando...</p> :  <ItemList products={productsDB}/> }
        </div>
    )
}

export default ItemListContainer;