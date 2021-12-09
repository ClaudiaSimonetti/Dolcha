import tortaArandanos from '../assets/img/tortaArandanos_640.jpg';

const dataBaseProducts=[
    {id:1, name:"torta oreo", image: tortaArandanos, description:"descripcion de torta oreo", category:"torta",price:2700, stock:5},
    {id:2, name:"torta bombon", image: tortaArandanos, description:"descripcion de torta bombon", category:"torta",price:2800, stock:10},
    {id:3, name:"torta dolcha", image: tortaArandanos, description:"descripcion de torta dolcha", category:"torta",price:2900, stock:15},
    {id:4, name:"torta bariloche", image: tortaArandanos, description:"descripcion de torta bariloche", category:"torta",price:3000, stock:20},
    {id:5, name:"torta mantecol", image: tortaArandanos, description:"descripcion de torta mantecol", category:"torta",price:3100, stock:25},
    {id:6, name:"torta marroc", image: tortaArandanos, description:"descripcion de torta marroc", category:"torta",price:3200, stock:30},
]

const getFetch=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(dataBaseProducts)
    },2000)
})

export default getFetch;
