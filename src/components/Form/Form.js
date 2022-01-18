import { TextField, Box, Container} from '@material-ui/core';
import {getFirestore, collection, addDoc, Timestamp} from 'firebase/firestore';
import {useState} from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react'
import './Form.css'
import Swal from 'sweetalert2';

function Form(){

    const {cartList, TotalPrice, DeleteCart } = useContext(CartContext)

    const [idOrder, setIdOrder]=useState('')

    const [dataForm, setDataForm]=useState({name:'', phone:'', email:'',email2:''})

    function handleChange(e){
        setDataForm({...dataForm, [e.target.name] : e.target.value})
    }

    function OrderGeneration(e){
        e.preventDefault();
        dataValidation(dataForm)
    }

    const [errorName , setErrorName] = useState('')
    const [errorPhone , setErrorPhone] = useState('')
    const [errorEmail , setErrorEmail] = useState('')
    const [errorEmail2 , setErrorEmail2] = useState('')

    function dataValidation(dataForm){

        const expressions = {
            regexText: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
            regexEmail: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/,
            regexNumber: /^\d{1,11}$/,
        }
    
        if(!dataForm.name.match(expressions.regexText)){
            setErrorName(
                'El nombre debe contener solo letras'
            )
        }else{
            setErrorName('')
        }

        if(!dataForm.phone.match(expressions.regexNumber)){
            setErrorPhone(
                'Número telefónico inválido'
            )
        }else{
            setErrorPhone('')
        }

        if(!dataForm.email.match(expressions.regexEmail)){
            setErrorEmail(
                'El formato de email es inválido (Ej: usuario@correo.com )'
            )
        }else{
            setErrorEmail('')
        }

        if(dataForm.email2!==dataForm.email){
            setErrorEmail2(
                'El email no coincide'
            )
        }else{
            setErrorEmail2('')
        }

        if((dataForm.name.match(expressions.regexText))&&
        (dataForm.phone.match(expressions.regexNumber))&&
        (dataForm.email.match(expressions.regexEmail))&& 
        (dataForm.email2===dataForm.email)  
        ){
        
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

            //Generar orden
            const db=getFirestore()
            const ordersCollection=collection(db,'orders')
            addDoc(ordersCollection, order)
            .then(response=>{setIdOrder(response.id) })
            .catch(error=>Swal.fire({icon: 'error',
                                    title: 'Oops...',
                                    text: 'Ha ocurrido un error'}, error))
            .finally(()=>{DeleteCart()
                        setDataForm({name:'', phone:'', email:'',email2:''})
            })  
            Swal.fire({icon:'success',
                    title: 'Formulario enviado con éxito',
                            })  
        }    
    }

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
                <h2 className='textForm'>Formulario de compra</h2>
                <Box
                    component="form"
                    onSubmit={OrderGeneration}
                    onChange={handleChange}
                    sx={{ mt: 2, 
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
                    <p className='pError'>{errorName}</p>
                    <TextField 
                        id="outlined-basic" 
                        name='phone' 
                        label="Telefono" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={dataForm.phone} 
                    />
                    <p className='pError' >{errorPhone}</p>
                    <TextField 
                        id="outlined-basic" 
                        name='email' 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={dataForm.errorEmail} 
                    />
                    <p className='pError'>{errorEmail}</p>
                    <TextField 
                        id="outlined-basic" 
                        name='email2' 
                        label="Repetir email" 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        value={dataForm.errorEmail2} 
                    />
                    <p className='pError'>{errorEmail2}</p>
                    {idOrder.length !== 0 && 'Su numero de orden es:'+ idOrder}
                    <button className='btnForm'>Finalizar Compra</button>
                </Box>
            </Container>
        </div> 
    )
}

export default Form;

