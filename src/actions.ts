import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from './app/constants';

export const submitForm = async (form: FormData) => {
    const templateParams = {
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message")
    }
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}