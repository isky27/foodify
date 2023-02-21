import Head from 'next/head'
import Image from 'next/image'
 import PizzaList from '../Components/PizzaList'
 import axios from "axios"

 const Products = ({pizzaList}) => {
   return (
     <div>
        <PizzaList pizzaList={pizzaList}/>
     </div>
   )
 }
 export const getServerSideProps=async()=>{
    const res=await axios.get("http://localhost:3000/api/products")
    return{
      props:{
        pizzaList:res.data
      }
    }
  }
 
 export default Products