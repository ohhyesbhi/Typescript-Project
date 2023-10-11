import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

interface Iproduct {
    product_image : string,
    product_title : string
    product_variants : string[]
}

function Allproducts() {

    const [cards,setCards] = useState([]);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");

    useEffect(()=>{
        loadCards()
    },[])

   async function loadCards():Promise<void>{
    try {
        const response = await axios.get("https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093")
        setCards(response.data.data)
    } catch (error) {
         console.log(error)
    }
  }

    function handleOnClick(text:string):void{
           setColor(text)
           setSize(text)
    }

  return (
  <>
    <div className="flex justify-center items-center w-full mt-4">
  
       <input onChange={(e)=>handleOnClick(e.target.value)} 
        type="text"  
        placeholder="Type here" 
        className="input input-bordered w-96" />
 
    </div>
    <div className="grid grid-cols-3 gap-0">
    {
      cards.map((products:Iproduct)=>{
         
        return (
            <div className="ml-4 mt-4" key={products.product_title}>
                 <Cards Size = {size}  color = {color} img = {products.product_image} title = {products.product_title} variants = {products.product_variants}/>      
            </div>
        )
      })
    }
    </div>

    

  </>
  )
}

export default Allproducts
