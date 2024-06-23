"use client";

import { useState } from "react";
import ContactFormSubmit from '@/components/contact-form-submit';
import { submitForm } from '@/actions';


export default function ContactForm() {

    const [submitFailure, setsubmitFailure] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (form: FormData) => {
        setFormSubmitted(true);
        setsubmitFailure(false);
        const success = await submitForm(form);
        setsubmitFailure(!success);
    }

    return <form action={handleSubmit} className="flex w-full flex-col justify-center items-center space-y-4 mb-10">
        <div className="max-w-[300px] text-center">
            <h1 className="text-2xl font-semibold underline underline-offset-4 mb-4">Contact</h1>
            <p>I would love to hear your project and how I could help. Please fill in the form, and I will get back to you as soon as possible.</p>
        </div>
        <input name="name" placeholder="Name" type="text" className="bg-transparent max-w-[300px] w-full p-1 rounded border-b-[1px] border-b-white/50" required />
        <input name="email" placeholder="Email" type="email" className="bg-transparent max-w-[300px] w-full p-1 rounded border-b-[1px] border-b-white/50" required />
        <textarea name="message" placeholder="Message" className="bg-transparent max-w-[300px] w-full p-1 rounded border-b-[1px] border-b-white/50" required />
        <ContactFormSubmit formSubmitted={formSubmitted} submitFailure={submitFailure} />

    </form>
}