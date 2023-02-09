import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from "axios";

interface Values {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const TestFormik = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                }}
                onSubmit={async (
                    values: Values,
                ) => {
                    await axios.post("http://localhost:5000/sendMessage", {
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        message: values.message,
                    })
                    alert('Message send! Thanks! I`m call you!')
                }}
            >
                <Form>
                    <Field id="name" name="name" placeholder="Your Name" type="text"/>

                    <Field id="email" name="email" placeholder="Your Email" type="email"/>

                    <Field id="phone" name="phone" placeholder="Your Phone" type="text"/>

                    <Field id="message" name="message" placeholder="Your Message" type="text"/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
