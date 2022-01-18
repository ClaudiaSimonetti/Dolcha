import { Container } from '@material-ui/core';
import Item from '../Item/Item';
import { Grid } from '@material-ui/core';

function ItemList({products}){

    return(
        <Container>
            <Grid container spacing={3}>
                {products.map((prod)=> 
                    <Grid key={prod.id} item xs={12} sm={8} md={6} lg={4}>
                        <Item product={prod} /> 
                    </Grid>
                ) }
            </Grid>
        </Container>
    )
}

export default ItemList;