import React from 'react'
import { useFormik } from 'formik';
import { useLazyGetAllPostsQuery,useAddNewPostMutation } from '../../services/postsapi';
import { useNavigate } from 'react-router-dom';
function AddPost() {
    var [ addNewPostFn,x ] = useAddNewPostMutation();
    var [getAllPostsFn] = useLazyGetAllPostsQuery()
    var navigate = useNavigate();
    var postForm = useFormik({
        initialValues:{
            title:'',
            author:''
        },
        onSubmit:(values)=>{
            addNewPostFn(values)
            .then((res)=>{
                getAllPostsFn();
                navigate("/")
            })
        }
    })
  return (
    <div>
        <h1>AddPost</h1>
        <div className='border border-secondary p-2 m-2'>
            <form onSubmit={postForm.handleSubmit}>
                <input type="text" {...postForm.getFieldProps('title')} />
                <br />
                <input type="text" {...postForm.getFieldProps('author')} />
                <br />
                <button>Add Post</button>
            </form>
        </div>
    </div>
  )
}

export default AddPost