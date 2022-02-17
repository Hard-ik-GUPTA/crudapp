import React, { useState } from 'react'



const AddRecord = ({dataState,setDataState,setAddRecordState}) => {

    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [index,setIndex]=useState(0)

    const submitRecord=(e)=>{
        e.preventDefault();
        setIndex(index+1)


        const newItem={index:index,title:title,price:price}

        setDataState([...dataState,newItem])


        setTitle("")
        setPrice("")
        setAddRecordState(false)
    }

    const indexfunc=()=>{
    }
  return (
    <>
                <form onSubmit={submitRecord}>
                <p>Title</p>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter title'></input>
                <p>Price</p>
                <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price'></input>

                <button type='submit' onClick={indexfunc}>Save</button>

            </form>
    </>
  )
}

export default AddRecord









