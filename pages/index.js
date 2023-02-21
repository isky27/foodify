import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../Components/NavBar'
import Featured from '../Components/Featured'
import PizzaList from '../Components/PizzaList'
import axios from "axios"
import { useState } from 'react'
import AddButton from '../Components/AddButton'
import Add from '../Components/Add'

export default function Home({pizzaList,admin}) {
  const [close,setClose]=useState(true);
  //first fetching data then rendering
  return (
    <>
      <div className={styles.container}>

      <Head>
        <title>Pizza Restro in India</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <PizzaList pizzaList={pizzaList}/>
      {!close && <Add setClose={setClose}/>}
      </div>
  
    </>
  )
}


export const getServerSideProps=async(ctx)=>{
  const myCookie=ctx.req?.cookies||"";
  let admin=false;
  if(myCookie.token===process.env.TOKEN){
    admin=true;
  }
  const res=await axios.get("http://localhost:3000/api/products")
  return{
    props:{
      pizzaList:res.data,
      admin,
    }
  }
}