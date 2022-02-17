import React, { useState } from 'react'
import AddRecord from './components/AddRecord'
import TableComponent from './components/TableComponent'

const App = () => {

  const [dataState,setDataState]=useState([])
  const [addRecordState,setAddRecordState]=useState(false)


  return (
    <>
    <button onClick={()=>setAddRecordState(true)}>Add New</button>
    <TableComponent dataState={dataState} setDataState={setDataState}/>
    {console.log(addRecordState)}


    {addRecordState?
    <AddRecord dataState={dataState} setDataState={setDataState} setAddRecordState={setAddRecordState}/>
    :null}
    </>
  )
}

export default App