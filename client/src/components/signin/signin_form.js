import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const validate = values => {
    const errors = {}
    const requiredFields = [
      'name',
      'username',
      'email',
      'password'
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
}

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

let SigninForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <MuiThemeProvider>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="name" component={renderTextField} label="Full Name" />
                </div>
                <div>
                    <Field name="username" component={renderTextField} label="User Name" />
                </div>
                <div>
                    <Field name="email" component={renderTextField} label="Email" />
                </div>
                <div>
                    <Field name="password" component={renderTextField} label="Password" />
                </div>
                {/* <button action="submit" className="btn btn-primary">Sign In</button> */}

                <div>
                    <button type="submit" disabled={pristine || submitting}>
                    Submit
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                    </button>
                </div>

            </form>
        </MuiThemeProvider>
    )
}

SigninForm = reduxForm({
  // a unique name for the form
  form: 'signing',
  fields: ['email', 'username', 'password', 'name'],
  validate
})(SigninForm)

export default SigninForm;