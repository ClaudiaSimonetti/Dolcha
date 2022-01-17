import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './Item.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function Item({product}){

    const classes = useStyles();

    return(
        <div  key={product.id}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={product.name}
                        height="140"
                        image= {product.image}
                        title={product.name}
                    />
                    <CardContent>
                        <Typography className="textCard" gutterBottom variant="h5" component="h2">{product.name}</Typography>
                        <Typography className="textCard" variant="body2" color="textSecondary" component="p">{product.description}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Precio: $ {product.price}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Stock: {product.stock} unidades</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link className="text-link-verDetalle" to={`/detalle/${product.id}`}><Typography variant="body2" style={{ cursor: 'pointer' }}>+ VER DETALLE</Typography></Link>
                </CardActions>  
            </Card>
        </div>
    )
}

export default Item;




