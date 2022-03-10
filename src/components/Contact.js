import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
    const [setFormValid] = useState(false);

    return (
        <section>
            <h1>Contact Me</h1>
            <form>
                <div className="row">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={(e) => {
                        setFormState({ ...formState, name: e.target.value });
                        setFormErrors({ ...formErrors, name: '' });
                    }} />
                    <p className="error">{formErrors.name}</p>
                </div>
                <div className="row">
                    <label htmlFor="email">Your eMail Address</label>
                    <input type="text" name="email" placeholder="eMail@service.com" onChange={(e) => {
                        setFormState({ ...formState, email: e.target.value });
                        setFormErrors({ ...formErrors, email: '' });
                    }} />
                    <p className="error">{formErrors.email}</p>
                    {formErrors && (
                        <div>
                            <p className="error">{formErrors}</p>
                        </div>
                    )}
                    <button data-testid="submit-button" type="submit" onClick={(e) => {
                        e.preventDefault();
                        if (formState.name.length < 1) {
                            setFormErrors({ ...formErrors, name: 'Name is required' });
                        }
                        if (formState.email.length < 1) {
                            setFormErrors({ ...formErrors, email: 'Email is required' });
                        }
                        if (formState.message.length < 1) {
                            setFormErrors({ ...formErrors, message: 'Message is required' });
                        }
                        if (formState.name.length > 0 && formState.email.length > 0 && formState.message.length > 0) {
                            if (validateEmail(formState.email)) {
                                setFormValid(true);
                            } else {
                                setFormErrors({ ...formErrors, email: 'Email is not valid' });
                            }
                        }
                    }}>Send</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;
