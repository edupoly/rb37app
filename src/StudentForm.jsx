import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import Firstname from './FormControls/Firstname';
function StudentForm() {
    
  return (
    <div className='border border-2 p-2 m-2'>
        <h2>StudentForm</h2>
        
        {/* {JSON.stringify(sform)} */}
        <Formik
                initialValues={{
                    firstname:'',
                    lastname:''
                }}
                validationSchema={Yup.object({
                    firstname:Yup.string()
                                    .required("Babu EE Firstname mandatory")
                                    .min(4,"Chinna perlu vaddu")
                                    .test("abcd","custom message idi",(value)=>{
                                        return value.length>10?false:true
                                    })
                })}
                onSubmit={(values)=>{
                    console.log(values)
                }}
        >
            {
                (sform)=>{
                    return (
                        <form onSubmit={sform.handleSubmit}>
                            <Field type="radio" name="gender" value='male'/>:male<br></br>
                            <Field type="radio" name="gender" value='female'/>:Female<br></br>
                            <Field type="radio" name='gender' value='others'/>:Others<br></br>
                            <div>Techs</div>
                            <input type="checkbox" {...sform.getFieldProps('techs')} value='nodejs' />:NodeJS<br></br>
                            <input type="checkbox" {...sform.getFieldProps('techs')} value='angular' />:Angular<br></br>
                            <input type="checkbox" {...sform.getFieldProps('techs')} value='react' />:ReactJS<br></br>
                            <input type="checkbox" {...sform.getFieldProps('techs')} value='express' />:ExpressJS<br></br>
                            <Firstname></Firstname>
                            <input type="text" placeholder='Enter your lastname' name="lastname" onChange={sform.handleChange} onBlur={sform.handleBlur}/>
                            <br />
                            <button>Save Student</button>
                        </form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default StudentForm