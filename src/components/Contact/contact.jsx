import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./contact.css";


export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_buct7ci",
				"template_xjotxom",
				form.current,
				"HOTrme9pPZYtTXsKe"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		Swal.fire("Mensaje enviado");
	};

	return (
		<section id='contact'>
		<div className="contact">
			<form ref={form} onSubmit={sendEmail} className="contact-form">
				<label>Nombre</label>
				<input type="name" name="user-name" />
				<label>Asunto</label>
				<input type="text" name="user-subject" />
				<label>Email</label>
				<input type="email" name="user-email" />
				<label>Mensaje</label>
				<textarea name="message" />
				<div className="contact-button submit-button">
					<button type="submit" value="Send">
						Enviar
					</button>
				</div>
			</form>
		</div>
		</section>
	);
};

export default Contact;
