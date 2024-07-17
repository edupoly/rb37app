import React, { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

function ABCD(props) {
    var params = useParams()
    var x = useLocation();
    var [queryParams,setQueryParams] = React.useState([]);
    var [query] = useSearchParams();
    console.log(query)
    useEffect(()=>{
        var ent = query.entries();
        for(var k of ent){
            console.log(k)
        }
    },[query])

    return (
        <div className='border m-2 p-2'>
            <h1>Parameterised Routing {Number(params.a)+(Number(params.b))}</h1>
            {
                queryParams.length>0 && (
                    <h1>Query Params Addition:{queryParams.reduce((a,b)=>a+b)}</h1>
                )
            }
        </div>
    )
}

export default ABCD