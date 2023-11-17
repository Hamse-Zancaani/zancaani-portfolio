import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';

function ContactForm() {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm(
		'service_rprvgsq',
		 'template_y8xupvj',
		  form.current, 
		  'EWYO-hjdLeq3fDxwZ')
		.then((result) => {
			
			toast.success("message sent");
		}, (error) => {
			toast.error(error.text);
		});
	};
  
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form ref={form} onSubmit={sendEmail}
					
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="user_name"
						inputType="text"
						inputId="user_name"
						inputName="user_name"
						placeholderText="Your Name"
						ariaLabelName="user_name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="user_email"
						inputName="user_email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="user_subject"
						inputName="user_subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title="Send Message"
								type="submit"
								aria-label="Send Message"
								value="Send"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
