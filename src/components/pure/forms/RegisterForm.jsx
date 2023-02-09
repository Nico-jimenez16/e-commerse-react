import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useRedirect } from '../../../hooks/useRedirect';

// ! importando los sevicios HTTP 
import { registerUser } from '../../../services/data.js'
import contextNotification from '../../../context/NotificationContext.js';


const registerSchema = yup.object().shape(
    {
        username: yup.string()
            .min(6 , 'Username too short')
            .max(14 , 'Username too long')
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

const RegisterFormComponent = () => {

    const { goToPage } = useRedirect()
    const { notify } = useContext(contextNotification)

    const initialValues = {
            username: '',
            email: '',
            password: ''
    };

    const goLogin = () => {
        goToPage('/login')
    }
    
    const handlerNotification = (args) => {
        notify({
            type: args.type,
            message: args.message
        })
    }

    const handleRegisterUser = async ( user ) => {
        const { status } = await registerUser(user)
            if(status === 200){
                goLogin()
                handlerNotification({ type:'success' , message:'successful registration'})
            }else{
                handlerNotification({ type:'error' , message:'Unable to register user'})
            }
    }

    return (
        <>
            <h1 className='text-xl font-bold underline mb-4 uppercase'>Register</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema = { registerSchema }
                onSubmit={async (values) => { handleRegisterUser(values) }}
            >
            {
                ({ errors, touched , isSubmitting }) => (

                    <Form className='w-full md:w-4/5 lg:w-2/5 p-4 md:p-0 flex flex-col' >
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
                        <Link to={'/login'} className='w-full flex justify-end items-center text-gray-400 mt-4 cursor-pointer' >Go to Login</Link>
                    </Form>
                )
            }
            </Formik>
        
        </>
    )
}

export default RegisterFormComponent;
