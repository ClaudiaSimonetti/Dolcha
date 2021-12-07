import {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


function ItemCount({stock,titulo}){
    const [ count, SetCount ]= useState(1);

    useEffect(()=>{
    if(count==stock){
        alert("No hay más stock");
    }

    })

    const aumentar=()=>{
        if(count<stock)
        SetCount(count+1)
    }

    const disminuir=()=>{
        if(count>1)
        SetCount(count-1)
    }

    const classes = useStyles();

    return(
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Producto 1"
                        height="140"
                        image=".jpg"
                        title="Producto 1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{titulo}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Descripción
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary" onClick={disminuir}>-</Button>
                    <Button>{count}</Button>
                    <Button variant="contained" color="secondary" onClick={aumentar}>+</Button>
                    <Button variant="contained" color="primary" disabled = {count == stock}>Añadir al carrito</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ItemCount;