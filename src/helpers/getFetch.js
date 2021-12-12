import tortaArandanos from '../assets/img/tortaArandanos_640.jpg';
import tortaChocolate from '../assets/img/tortaChocolate.jpg';
import galletasChip from '../assets/img/galletasChip.jpg';
import muffin from '../assets/img/muffin_640.jpg';
import macarronSurtido from '../assets/img/macarronSurtido_640.jpg';
import macarronNaranjayLimon from '../assets/img/macarronNaranjayLimon_640.jpg';

const dataBaseProducts=[
    {id:1, name:"torta de arandanos", image: tortaArandanos, description:"biscochuelo de chocolate relleno de crema y capa superior de arandanos", category:"torta",price:2700, stock:5},
    {id:2, name:"torta bombon", image: tortaChocolate, description:"biscochuelo de chocolate con relleno de dulce de leche", category:"torta",price:2800, stock:10},
    {id:3, name:"galletas chipy", image: galletasChip, description:"galletas crocantes con chips de chocolate negro", category:"galleta",price:2900, stock:15},
    {id:4, name:"chocomuffins", image: muffin, description:"muffins de chocolate con chips de chocolate blanco y negro (pack x6)", category:"muffin",price:3000, stock:20},
    {id:5, name:"surtido de macarrones", image: macarronSurtido, description:"macarrones de frutilla, dulce de leche, chocolate y menta (pack x6)", category:"macarron",price:3100, stock:25},
    {id:6, name:"macarrones de naranjalima", image: macarronNaranjayLimon, description:"macarrones de naranja y limon con exquisito relleno (pack x6)", category:"macarron",price:3200, stock:30},
]

const getFetch=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(dataBaseProducts)
    },2000)
})

export default getFetch;
