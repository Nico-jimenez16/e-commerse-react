import React from 'react';
import { Link } from 'react-router-dom'
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';

// ! importando los sevicios HTTP 
// import Servicios from '../../../services/data.js'


const loginSchema = yup.object().shape(
    {
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: yup.string()
            .required('Password is required')
            // .min(10 , 'minimum length of 10 characters')
    }
)

const LoginFormComponent = () => {


    const initialCredentials = {
        email: '',
        password: ''
    }

    const userLogin = async (User) => {
        console.log('estoy por loginForm - userLogin' , User);
        // await Servicios.loginUser( User )
    }

    return (
        <>
            
            <h1 className='text-xl font-bold underline'>Log in</h1>
            <Formik
                initialValues={ initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={(values) => { userLogin( values ) }}
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
                        <Link to={'/register'} className='w-full flex justify-end items-center text-gray-400 mt-4 cursor-pointer' >create an account</Link>
                    </Form>
                )
            }
            </Formik>
        
        </>
    )
}

export default LoginFormComponent;
