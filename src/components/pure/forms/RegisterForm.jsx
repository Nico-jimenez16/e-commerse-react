import React from 'react';
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';

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
            .min(8 , 'password too short'),
        confirm: yup.string()
            .when("password" , {
                is: value => ( value && value.length > 0 ? true : false ),
                then: yup.string().oneOf(
                    [yup.ref("password")] , 'password must match!')
            })
            .required('you must confim the password'),
        rol: yup.string()
            .oneOf(['User' , 'Admin'] , 'you must select a rol User / Admin')
            .required('Rol is required')
    }
)

const RegisterForm = () => {

    const initialValues = {
            username: '',
            email: '',
            password: '',
            confirm: '',
            rol: ''
        };

    return (
        <>
            <h1 className='underline'>Register</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema = { registerSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
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
                        <Field className='p-4 border-b rounded-xl mb-2' id="confirm" type='password' name="confirm" placeholder="password confirmation" />
                        {
                            // consfirm password errors 
                            errors.confirm && touched.confirm && 
                            (
                                <span className='error'>
                                    <ErrorMessage name="confirm" />
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
