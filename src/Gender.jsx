import React from 'react'

function Gender() {
    var [g,setG] = React.useState('');
    function handleGender(ev){
        setG(ev.target.value)
    }
    return (
        <div className="border border-success border-2 p-2 m-2">
            <h3>Gender</h3>
            <input type="radio" onChange={(e)=>{handleGender(e)}} name='gen' value="male"/>:Male
            <input type="radio" onChange={(e)=>{handleGender(e)}} name='gen' value="female"/>:Female
            <input type="radio" onChange={(e)=>{handleGender(e)}} name='gen' value="others"/>:Others
            <h2>Selected Gender :{g}</h2>
        </div>
    )
}

export default Gender