import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import ItemCount from '../ItemListContainer/ItemCount';
import { CardActions } from '@material-ui/core';
import './ItemDetail.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 1500,
    },
    image: {
    width: '100%', //la img tiene el 100% de ancho del tamaño de la etiqueta.
    height: 350,
    },
    img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    },
}));

function ItemDetail({itemDetailDB, productStock}){

    const classes = useStyles();

    const [goCart , setGoCart] = useState(true)
    const [stock, setStock]=useState(0)

    const {cartList, AddToCart} = useContext(CartContext)

    function onAdd(quantityToAdd){
        setGoCart(false)
        AddToCart({...itemDetailDB, quantity:quantityToAdd})
    }

    useEffect(()=>{
        if(Object.keys(itemDetailDB)){
            let inCart=cartList.find(item=>item.id===itemDetailDB.id)
            setStock(itemDetailDB.stock - (inCart ? inCart.quantity : 0))
        }

    },[])

    


    return(
        <Container maxWidth="sm" className='containerItemDetail'>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={0}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="img" src={itemDetailDB.image} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} lg={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography className="textCard" gutterBottom variant="h5">{itemDetailDB.name}</Typography>
                                    <Typography className="textCard" variant="body2" gutterBottom>{itemDetailDB.description}</Typography>
                                    <Grid item>
                                        <Typography variant="subtitle1">$ {itemDetailDB.price}</Typography>
                                    </Grid>   
                                    <Typography variant="body2" color="textSecondary">{stock} unidades disponibles</Typography>
                                </Grid>
                                <Grid item> 
                                    <Grid item xs={12} lg={8} className="card_actions">
                                        {goCart ? (
                                        <ItemCount productStock={stock} onAdd={onAdd} />
                                        ) : (
                                        <Link to="/cart" className="btnIraCarrito"><Button variant="contained" color="secondary">Ir al carrito</Button></Link>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Container>
    )
}

export default ItemDetail;