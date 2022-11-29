import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { Formik , Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const registerSchema = yup.object().shape(
    {
        username: yup.string()
            .min(6 , 'Username too short')
            .max(12 , 'Username too long')
            .required('Username is required'),
        email: yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        message: yup.string()
            .required('Password is required')
            .min(8 , 'password too short')
    }
)

const ContactFormComponent = () => {

    const form = useRef();
    const nativage = useNavigate()

    const initialValues = {
            username: '',
            email: '',
            message: '',
    };

    const sendMessage = () => {

        emailjs.sendForm('service_0l1tfrn', 'template_ujespqj', form.current , 'eHxn3LWIt2sacmV5K')
            .then(() => {
                nativage('/thankyou')
            }, (error) => {
                alert(error)
            });
    }

    return (
        <>
            <h1 className='text-xl font-bold underline mb-4'>contact me</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema = { registerSchema }
                onSubmit={() => { sendMessage() }}
            >
            {
                ({ errors, touched , isSubmitting }) => (

                    <Form ref={form} className='w-full p-4 md:p-0 md:w-2/5 flex flex-col' >
                        <Field className='p-4 border-b rounded-xl mb-2' id="username" type='text' name="username" placeholder="your name or company name" />
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
                        <Field as="textarea" className='p-4 border-b h-32 rounded-xl mb-2' id="message" type='text' name="message" placeholder="message" />
                        {
                            // password errors 
                            errors.message && touched.message && 
                            (
                                <span className='error'>
                                    <ErrorMessage name="message" />
                                </span>
                            )
                        }
                        <button className='mt-4 p-1 bg-[#54b4d3] text-white hover:shadow-lg rounded-lg' type="submit"> send message </button>
                        { isSubmitting ? ( <p>sending your message</p> ) : null}
                    </Form>
                )
            }
            </Formik>
        
        </>
    )
}

export default ContactFormComponent;
