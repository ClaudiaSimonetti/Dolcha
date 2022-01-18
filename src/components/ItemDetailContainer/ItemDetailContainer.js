// import getOneProduct from "../../helpers/getOneProduct";
import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { CircularProgress } from "@material-ui/core";
import Swal from 'sweetalert2';

function ItemDetailContainer(){
    
    const [item, setItem]=useState([])
    
    const [loading, setLoading]=useState(true)
    
    const {idProduct}=useParams()

    useEffect(()=>{

        const db=getFirestore()
        const queryDb= doc(db, 'items', idProduct)
        getDoc(queryDb)
        .then(response => setItem({id: response.id, ...response.data()}))
        .catch(error=>Swal.fire({icon: 'error',
                                title: 'Oops...',
                                text: 'Ha ocurrido un error'}, error))
        .finally(()=>setLoading(false))
    },[idProduct])

    return(
        <div>
            {loading ? <><CircularProgress/> Cargando...</> : <ItemDetail itemDetailDB={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
