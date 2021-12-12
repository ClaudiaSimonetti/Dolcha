// import getOneProduct from "../../helpers/getOneProduct";
import {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import getFetch from "../../helpers/getFetch";

function ItemDetailContainer(){
    const [item, setItem]=useState([])
    // const [loading, setLoading]=useState(true)
    
    const {idProduct}=useParams()


    useEffect(()=>{
        
        getFetch
        .then((response)=>{setItem(response.find((idByProduct)=>idByProduct.id === parseInt(idProduct)))})//lo parseo porque en la url el id es un string
    })

    return(
        <div>
        {/* {loading ? false : <ItemDetail itemDetailDB={item}/>} */}
        <ItemDetail itemDetailDB={item}/>
        </div>
    )
}

export default ItemDetailContainer;
