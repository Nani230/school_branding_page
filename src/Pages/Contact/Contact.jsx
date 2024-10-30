import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import image from '../../assets/HomeBackground.png';

const Contact = () => {
    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, "Phone number is not valid")
            .min(10, 'Phone number must be at least 10 digits')
            .required('Phone number is required'),
        organization: Yup.string().required('Organization is required'),
        description: Yup.string().required('Description is required'),
    });

    // Initial form values
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        organization: '',
        description: '',
    };

    // Handle form submission
    const onSubmit = (values) => {
        console.log('Form data:', values);
    };

    return (
        <div
            className="h-full bg-cover bg-center flex flex-col border-2 sm:px-3"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="lg:p-10 md:p-3 sm:p-1 bg-white bg-opacity-75 rounded-lg shadow-lg lg:w-2/3 md:w-2/3 sm:w-full mx-auto md:mt-20 sm:mt-10 mb-10">
                <h1 className="lg:text-3xl md:text-xl sm:text-lg font-bold mb-8 text-center text-headingcolor ">Say Hello to Us</h1>

                {/* Formik Form */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col items-start justify-center w-full lg:gap-9 sm:gap-3'>
                            <div className='lg:flex lg:justify-between lg:items-center lg:flex-row sm:flex sm:flex-col lg:gap-10 sm:gap-3 w-full'>
                                <div className="mb-4 w-full">
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="What is your name? *"
                                        className="border-2 border-textcolor lg:p-2 md:p-1 sm:p-1 sm:px-2 w-full placeholder-textcolor rounded-md sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="mb-4 w-full">
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="What it your email? *"
                                        className="border-2 border-textcolor lg:p-2 md:p-1 sm:p-1 sm:px-2 w-full placeholder-textcolor rounded-md sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>

                            <div className='lg:flex lg:justify-between lg:items-center lg:flex-row sm:flex sm:flex-col lg:gap-10 sm:gap-3 w-full'>
                                <div className="mb-4 w-full">
                                    <Field
                                        type="text"
                                        name="phone"
                                        placeholder="What is your phone number?"
                                        className="border-2 border-textcolor lg:p-2 md:p-1 sm:p-1 sm:px-2 w-full placeholder-textcolor rounded-md sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div className="mb-4 w-full">
                                    <Field
                                        type="text"
                                        name="organization"
                                        placeholder="What is your Organization?"
                                        className="border-2 border-textcolor lg:p-2 md:p-1 sm:p-1 sm:px-2 w-full placeholder-textcolor rounded-md sm:text-sm"
                                    />
                                    <ErrorMessage
                                        name="organization"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 w-full">
                                <Field
                                    as="textarea"
                                    name="description"
                                    placeholder="Write your message here"
                                    className="border-2 border-textcolor p-2 w-full h-36 placeholder-textcolor rounded-md"

                                />
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>
                            <div className='flex justify-end items-end w-full'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-headingcolor text-white py-2 px-4 rounded hover:bg-blue-600 "
                                >
                                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Contact;
