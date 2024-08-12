import React from 'react'
import {  useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from '../../services/postsapi'

import { useNavigate } from 'react-router-dom';
function Posts() {
    var {isLoading,data}=useGetAllPostsQuery();
    var [getAllPostsFn] = useLazyGetAllPostsQuery()
    var [deltePostFn,] = useDeletePostMutation()
    var navigateFn = useNavigate();
    function deletePostById(id){
        deltePostFn(id).then(()=>{
            getAllPostsFn()
        })
    }
    return (
        <div className='border border-info p-2 m-2'>
            <h1>Posts <button className="btn btn-success" onClick={()=>{navigateFn("/addPost")}}>Add New Post</button></h1>
            
            <ul>
                {
                    isLoading==false && data.map((c)=>{
                        return <li>
                            {c.title}
                            <button className='btn btn-warning m-2' onClick={()=>{navigateFn("/editPost",{state:c})}}>Edit</button>
                            <button className='btn btn-danger m-2' onClick={()=>{deletePostById(c.id)}}>Delete</button>
                            </li>
                    })
                }
            </ul>
        </div>
  )
}

export default Posts