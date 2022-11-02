import React from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';

// ! importando los sevicios HTTP 
// import Servicios from '../../../data/data.js'


const registerSchema = yup.object().shape(
    {
        username: yup.string()
            .min(6 , 'Username too short')
            .max(12 , 'Username too long')
            .required('Username is required'),
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: yup.string()
            .required('Password is required')
            .min(8 , 'password too short')
            .max(12 , 'Username too long')
    }
)

const RegisterForm = () => {

    const initialValues = {
            username: '',
            email: '',
            password: ''
        };

    const registerUser = (user) => {
        console.log('estoy por registerForm - registerUser' , user)
        // Servicios.registerUser(user)
    }

    return (
        <>
            <h1 className='text-xl font-bold underline'>Register</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema = { registerSchema }
                onSubmit={async (values) => { registerUser(values) }}
            >
            {
                ({ errors, touched , isSubmitting }) => (

                    <Form className='w-full md:w-2/5 p-4 md:p-0 flex flex-col' >
                        <Field className='p-4 border-b rounded-xl mb-2' id="username" type='text' name="username" placeholder="your username" />
                        {
                            // username errors 
                            errors.username && touched.username && 
                            (
                                <span className='error'>
                                    <ErrorMessage name="username" />
                                </span>
                            )
                        }
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
                        <button className='mt-4 p-1 bg-[#54b4d3] text-white hover:shadow-lg rounded-lg' type="submit"> Register Account </button>
                        { isSubmitting ? ( <p>sending your credentials</p> ) : null}
                    </Form>
                )
            }
            </Formik>
        
        </>
    )
}

export default RegisterForm;
