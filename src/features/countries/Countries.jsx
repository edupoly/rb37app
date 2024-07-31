import React, { useState } from 'react'
import { useGetAllCountriesQuery, useLazyGetAllCountriesQuery } from '../../services/countriesapi'


function Countries() {
    // var {isLoading,data} = useGetAllCountriesQuery();
    var [getAllCountriesFn,{isLoading,data}] = useLazyGetAllCountriesQuery();

    function abc(){
        getAllCountriesFn()
    }
    return (
        <div className='border border-success p-2 m-2'>
            <h1>Countries</h1>
            <button onClick={()=>{abc()}}>Contries Chupinchu</button>
            <ul>
                {
                    isLoading===false && data?.map((c)=>{
                        return <li>{c.name.common}</li>
                    })
                }
            </ul>
            { isLoading===true && <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"></img>}
        </div>
    )
}

export default Countries