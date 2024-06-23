import { useFormStatus } from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ContactFormSubmit({ submitFailure, formSubmitted }: { submitFailure: boolean, formSubmitted: boolean }) {
    const { pending } = useFormStatus();
    return <button disabled={pending} className="hover:bg-blue-700/20 py-2 px-3 rounded" type="submit">
        {pending ? <AiOutlineLoading3Quarters className='animate-spin' /> : <>Submit</>}
        {!pending && submitFailure && <p className="text-red-500">Error sending Message, please try again !</p>}
        {!pending && !submitFailure && formSubmitted && <p className="text-green-500">Message Sent Successfully !</p>}
    </button>

}