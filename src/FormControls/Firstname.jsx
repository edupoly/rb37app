import { Field,ErrorMessage } from 'formik'
import React from 'react'

function Firstname() {
  return (
    <div>
        <Field name="firstname" placeholder="Enter Firstname"></Field>
        <br />
        <ErrorMessage name="firstname" component="div"></ErrorMessage>
    </div>
  )
}

export default Firstname