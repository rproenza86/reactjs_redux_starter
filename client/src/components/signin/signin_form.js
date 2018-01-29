import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { 
    TextField,
    Button,
    Paper,
    Grid
 } from 'material-ui';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        justify: 'center',
        textAlign: 'center'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 400
    },
    button: {
        margin: theme.spacing.unit,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    paper: {
        width: 430,
      },
  });

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
      label={label}
      id={label}
      error={touched && error}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

let SigninForm = props => {
    const { handleSubmit, pristine, reset, submitting, classes } = props
    const spacing = 16;
    return (

        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                    <Paper className={classes.paper}>
                        <form onSubmit={ handleSubmit } className={classes.container}>
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
                                <Button raised className={classes.button} type="submit" disabled={pristine || submitting}>
                                    Submit
                                </Button>

                                <Button raised className={classes.button} type="button" disabled={pristine || submitting} onClick={reset}>
                                    Clear Values
                                </Button>
                            </div>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>

        // <form onSubmit={ handleSubmit } className={classes.container}>
        //     <div>
        //         <Field name="name" component={renderTextField} label="Full Name" />
        //     </div>
        //     <div>
        //         <Field name="username" component={renderTextField} label="User Name" />
        //     </div>
        //     <div>
        //         <Field name="email" component={renderTextField} label="Email" />
        //     </div>
        //     <div>
        //         <Field name="password" component={renderTextField} label="Password" />
        //     </div>
        //     {/* <button action="submit" className="btn btn-primary">Sign In</button> */}

        //     <div>
        //         <Button raised className={classes.button} type="submit" disabled={pristine || submitting}>
        //             Submit
        //         </Button>

        //         <Button raised className={classes.button} type="button" disabled={pristine || submitting} onClick={reset}>
        //             Clear Values
        //         </Button>
        //     </div>
        // </form>
    )
}

SigninForm = reduxForm({
  // a unique name for the form
  form: 'signing',
  fields: ['email', 'username', 'password', 'name'],
  validate
})(SigninForm)

export default withStyles(styles)(SigninForm);