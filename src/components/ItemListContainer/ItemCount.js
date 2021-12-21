import {useState} from 'react';
import Button from '@material-ui/core/Button';




function ItemCount({productStock, onAdd}){
    const [ count, SetCount ]= useState(1);

    const handlerIncrease=()=>{
        if(count<productStock){
        SetCount(count+1)
        }
    }

    const handlerDecrease=()=>{
        if(count>1){
        SetCount(count-1)
        }
    }


    return(
        <>
            <Button variant="contained" color="secondary" onClick={handlerDecrease}>-</Button>
            <Button>{count}</Button>
            <Button variant="contained" color="secondary" onClick={handlerIncrease}>+</Button>
            <Button variant="contained" color="primary" onClick={()=>onAdd(count)}>Agregar a carrito</Button> 
        </>
    )
}

export default ItemCount;