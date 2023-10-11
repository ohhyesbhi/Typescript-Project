import React, { useEffect,useState } from 'react'

interface Iproduct{
    Size:string,
    color:string,
    img:string,
    title:string,
    variants:string[]
}

function Cards({Size,color,img,title,variants}:Iproduct) {
  
    const [variant,setVariant] = useState<string []>([]);

    useEffect(()=>{

        const mappedData:string[] = variants.map((item)=>{
            return Object.values(item)[0]
        })

        setVariant(mappedData)
    },[])



  return (
   <>
      <div className='card w-96 bg-base-100 shadow-xl flex flex-row' >
        <figure className='rounded-none bg-white'>
            <img src={img}/>
        </figure>
        <div className='card-body bg-gray-700 text-white'>
            <h2 className='card-title'>{title}</h2>
            {
                variant.map((items)=>{
                    const Capcolor:string = items.split("/").shift()+"";
                    const Capsize : string = items.split("/").pop() + "";
                    
                    return (
                   
                     (color == Capcolor || Size == Capsize)?
                        <p className='bg bg-yellow-200 text-black' key={items}>{items}</p>
                        :
                        <p key={items}>{items}</p>   
                  )
                })
            }
        </div>

      </div>
   </>
  )
}



export default Cards
