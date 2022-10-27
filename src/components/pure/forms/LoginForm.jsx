import React from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';


const loginSchema = yup.object().shape(
    {
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: yup.string()
            .required('Password is required')
            .min(10 , 'minimum length of 10 characters')
    }
)

const LoginForm = () => {


    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <>
            
            <h1 className='underline'>Log in</h1>
            <Formik
                initialValues={ initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                }}
            >
            {
                ({ errors, touched , isSubmitting }) => ( 
                    <Form className='w-full md:w-2/5 p-4 md:p-0 flex flex-col' > 
                        <Field className='p-4 border-b rounded-xl mb-2' id="email" type='email' name="email" placeholder="example@acme.com" />
                        {
                            // email errors 
                            errors.email && touched.email && 
                            (   
                                <span className='error'>
                                    <ErrorMessage name="email" />
                                </span>
                            )
                        }
                        <Field className='p-4 border-b rounded-xl mb-2' id="password" type='password' name="password" placeholder="password" />
                        {
                            // password errors 
                            errors.password && touched.password && 
                            (
                                <span className='error'>
                                    <ErrorMessage name="password" />
                                </span>
                                
                            )
                        }
                        <button className='mt-4 p-1 bg-[#54b4d3] text-white hover:shadow-lg rounded-lg' type="submit"> Login </button>
                        { isSubmitting ? ( <p>Login yur credentials</p> ) : null}
                    </Form>
                )
            }
            </Formik>
        
        </>
    )
}

export default LoginForm;
