import { TextField, Box, Container} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { Button } from '@material-ui/core';
import {getFirestore, collection, addDoc, updateDoc, doc, writeBatch, Timestamp} from 'firebase/firestore';
import {useState} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react'
import './Form.css'

function Form(){

    const {cartList, TotalPrice, DeleteCart } = useContext(CartContext)

    const [idOrder, setIdOrder]=useState('')

    const [dataForm, setDataForm]=useState({name:'', phone:'', email:''})

    function handleChange(e){
        setDataForm({...dataForm, [e.target.name] : e.target.value})
    }

    function OrderGeneration(e){
        e.preventDefault()

        //Nuevo objeto
        let order={}

        order.date=Timestamp.fromDate(new Date())

        order.buyer=dataForm
        order.total=TotalPrice();
        order.items=cartList.map(cartItem=>{
            const id=cartItem.id;
            const name=cartItem.name;
            const price=cartItem.price*cartItem.cantidad;

            return {id, name, price}
        })

        console.log(order)

        //Generar orden
        const db=getFirestore()
        const ordersCollection=collection(db,'orders')
        addDoc(ordersCollection, order)
        .then(response=>setIdOrder(response.id))
        .catch(error=>alert("Ha ocurrido un error", error))
        .finally(()=>{DeleteCart()
                    setDataForm({name:'', phone:'', email:''})
        })

        //Modificar Update
        // const docModify=doc(db, 'items', 'QpJWnEp4pzk9Oiki5NiO')
        // updateDoc(docModify, {
        //     stock:29

        // })
        // .then(response=>console.log('modificado'))

        //Escritura por lotes
        // const docModify=doc(db, 'items', 'QpJWnEp4pzk9Oiki5NiO')
        // const docModify1=doc(db, 'items', 'TBf95S5TGllzCLDQ2q9c')

        // const batch = writeBatch(db)
        
        // batch.update(docModify, {
        //     stock:28
        // })
        // batch.update(docModify1,{
        //     stock:24
        // })
        // batch.commit()

    };

    return(
        <div>
            <Container
                maxWidth="xs"
                sx={{display: "flex",
                    flexDirection: "column",
                    justifyContect:"space-between",
                    alignItems: "center",
                    height:"100%",
                    color: "#FAFAFA",
                    paddingTop: 3,
                    paddingBottom: 3,
                }}
            >
                <Box
                    component="form"
                    onSubmit={OrderGeneration}
                    onChange={handleChange}
                    sx={{ mt: 2, 
                        // textAlign: "center" 
                    }}
                >
                    <TextField 
                        id="outlined-basic" 
                        name='name' 
                        label="Nombre" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={dataForm.name}  
                    />
                    <TextField 
                        id="outlined-basic" 
                        name='phone' 
                        label="Telefono" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={dataForm.phone} 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name='email' 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={dataForm.email} 
                    />
                    <button>Generar orden</button>
                </Box>
            </Container>
            {idOrder.length !== 0 && 'Su numero de orden es:'+' '+ idOrder}
            
        </div> 
    )
}

export default Form;