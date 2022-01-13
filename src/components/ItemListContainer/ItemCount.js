import {useState} from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './ItemCount.css'

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
        <div className='containerItemCount'>
            <Container >
                <Box 
                    maxWidth='xs'
                    sx={{display:'flex',
                    flexDirection:'row',
                    pb: 2,
                    justifyContent:"center",
                    }}
                >
                    <Button variant="contained" color="secondary" onClick={handlerDecrease}>-</Button>
                    <Button>{count}</Button>
                    <Button variant="contained" color="secondary" onClick={handlerIncrease}>+</Button>
                </Box>    
                <Button variant="contained" color="primary" onClick={()=>onAdd(count)}>Agregar a carrito</Button>
            </Container>
        </div>
    )
}

export default ItemCount;