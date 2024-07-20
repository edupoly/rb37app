import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
function StudentForm() {
    var sform = useFormik({
                    initialValues:{
                        firstname:'',
                        lastname:''
                    },
                    validationSchema:Yup.object({
                        firstname:Yup.string()
                                        .required("Babu EE Firstname mandatory")
                                        .min(4,"Chinna perlu vaddu")
                                        .test("abcd","custom message idi",(value)=>{
                                            return value.length>10?false:true
                                        })
                    }),
                    onSubmit:(values)=>{
                        console.log(values)
                    }
                })
  return (
    <div className='border border-2 p-2 m-2'>
        <h2>StudentForm</h2>
        <form onSubmit={sform.handleSubmit}>
            <input type="radio" {...sform.getFieldProps('gender')} value='male'/>:male<br></br>
            <input type="radio" {...sform.getFieldProps('gender')} value='female'/>:Female<br></br>
            <input type="radio" {...sform.getFieldProps('gender')} value='others'/>:Others<br></br>
            <div>Techs</div>
            <input type="checkbox" {...sform.getFieldProps('techs')} value='nodejs' />:NodeJS<br></br>
            <input type="checkbox" {...sform.getFieldProps('techs')} value='angular' />:Angular<br></br>
            <input type="checkbox" {...sform.getFieldProps('techs')} value='react' />:ReactJS<br></br>
            <input type="checkbox" {...sform.getFieldProps('techs')} value='express' />:ExpressJS<br></br>
            <input type="text" {...sform.getFieldProps('firstname')}/>
            <br />
            {
                sform.touched.firstname && sform.errors.firstname && (<div>{sform.errors.firstname}</div>)
            }
            <input type="text" name="lastname" onChange={sform.handleChange} onBlur={sform.handleBlur}/>
            <br />
            <button>Save Student</button>
        </form>
        {/* {JSON.stringify(sform)} */}
    </div>
  )
}

export default StudentForm