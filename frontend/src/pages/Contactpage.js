import { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({ name: '', message: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch ('/api/contact', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)

        });

        if (response.ok) {
            alert('Message sent!');
            setFormData({ name: '', message: ''});
        }
    };
    
    return (
        <div className="page">
            <h2>Contact us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <textarea
                    placeholder='Message'
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ContactPage;