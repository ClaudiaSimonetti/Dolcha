import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react'
import './Cart.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {FaTrashAlt} from'react-icons/fa';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
    // minWidth: 700,
    width: 500,
    },
});

function Cart(){
    const classes = useStyles();

    const {cartList, DeleteCart, DeleteItem, TotalPrice } = useContext(CartContext)
    
    const total = TotalPrice()

    return(
        <div className='containerTable'>
            <h2 className='textCart'>Carrito</h2>
            <TableContainer component={Paper} className='tableContainerCart'>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Producto</StyledTableCell>
                            <StyledTableCell align="center">Cantidad</StyledTableCell>
                            <StyledTableCell align="center">Precio</StyledTableCell>
                            <StyledTableCell align="center">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartList.map((productAddedToCart) => (
                            <StyledTableRow key={productAddedToCart.id}>
                                <StyledTableCell className='imgRow'component="th" scope="row"><img className="imgCart" alt="img" src={productAddedToCart.image} />{productAddedToCart.name}</StyledTableCell>
                                <StyledTableCell align="center">{productAddedToCart.quantity}</StyledTableCell>
                                <StyledTableCell align="center">$ {productAddedToCart.price}</StyledTableCell>
                                <StyledTableCell aria-label="delete" align="center" onClick={()=>{DeleteItem(productAddedToCart.id)}}><FaTrashAlt /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow>
                            <StyledTableCell align="center"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="center">$ {total}</StyledTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box className='containerBtnCart'>
                <Link to='/Home' className='linkBtnFinalize'>
                <Button color="primary">Seguir comprando</Button>
                </Link><br/>
                <Button variant="outlined" onClick={DeleteCart}>Vaciar carrito</Button><br/>
                {total!==0 ? 
                (<Link to='/Form' className='linkBtnFinalize'>
                    <Button variant="outlined" color="secondary">Generar compra</Button>
                </Link>)
                :(' ')}
            </Box>
        </div>
    )
}

export default Cart;