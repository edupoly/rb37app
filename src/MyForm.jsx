import React, { useState } from 'react'

function MyForm() {
    var [details,setDetails]=useState({
        fullname:'',
        gender:''
    })
    function handleGender(ev){
        setDetails({...details,gender:ev.target.value})
    }
    function updateFirstname(e){
        setDetails({...details,fullname:e.target.value})

    }
    return (
        <div className="border border-success border-2 p-2 m-2">
            FullName: &nbsp;&nbsp;<input type="text" onKeyUp={(e)=>{updateFirstname(e)}}/>
            <br />
            Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" onChange={(e)=>{handleGender(e)}} name='gen' value="male"/>:Male
            <input type="radio" onChange={(e)=>{handleGender(e)}} name='gen' value="female"/>:Female
            <input type="radio" onChange={(e)=>{handleGender(e)}} name='gen' value="others"/>:Others
            <br />
            <b>{JSON.stringify(details)}</b>
        </div>
    )
}

export default MyForm
