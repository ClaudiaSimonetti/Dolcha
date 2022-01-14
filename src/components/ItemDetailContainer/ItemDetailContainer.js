// import getOneProduct from "../../helpers/getOneProduct";
import {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
// import getFetch from "../../helpers/getFetch";
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { CircularProgress } from "@material-ui/core";

function ItemDetailContainer(){
    const [item, setItem]=useState([])
    const [loading, setLoading]=useState(true)
    
    const {idProduct}=useParams()

    
    useEffect(()=>{
        // getFetch
        // .then((response)=>{setItem(response.find((idByProduct)=>idByProduct.id === parseInt(idProduct)))})//lo parseo porque en la url el id es un string

        const db=getFirestore()
        const queryDb= doc(db, 'items', idProduct)
        getDoc(queryDb)
        .then(response => setItem({id: response.id, ...response.data()}))
        .catch(error=>alert("Ha ocurrido un error", error))
        .finally(()=>setLoading(false))
    },[])

    return(
        <div>
            {loading ? <p><CircularProgress/> Cargando...</p> : <ItemDetail itemDetailDB={item}/>}
        </div>
    )
}

export default ItemDetailContainer;
