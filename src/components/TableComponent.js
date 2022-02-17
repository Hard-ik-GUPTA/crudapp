import React from 'react'



const TableComponent = ({dataState,setDataState}) => {

    const deleteRecord=(param)=>{
        console.log(dataState.index);

        const newItems =dataState.filter((item)=>item.id!==param)
        console.log(newItems);
        
        setDataState(newItems)

    }
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataState.map((value,index)=>{
                        return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.title}</td>
                            <td>{value.price}</td>
                            <td><button >Edit</button><button  onClick={()=>deleteRecord(index)}>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TableComponent