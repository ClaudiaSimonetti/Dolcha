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

import Fab from '@material-ui/core/Fab';


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

    const {cartList, DeleteCart } = useContext(CartContext)

    return(
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Imagen</StyledTableCell>
                            <StyledTableCell align="right">Producto</StyledTableCell>
                            <StyledTableCell align="right">Precio</StyledTableCell>
                            <StyledTableCell align="right">Cantidad</StyledTableCell>
                            <StyledTableCell align="right">Eliminar</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartList.map((productAddedToCart) => (
                            <StyledTableRow key={productAddedToCart.id}>
                                <StyledTableCell component="th" scope="row"><img className="imgCart" alt="img" src={productAddedToCart.image} /></StyledTableCell>
                                <StyledTableCell align="right">{productAddedToCart.name}</StyledTableCell>
                                <StyledTableCell align="right">{productAddedToCart.price}</StyledTableCell>
                                <StyledTableCell align="right">{productAddedToCart.cantidad}</StyledTableCell>
                                <StyledTableCell align="right">Eliminar</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <Fab variant="extended" onClick={DeleteCart}>Vaciar</Fab>
</div>
    )
}

export default Cart;