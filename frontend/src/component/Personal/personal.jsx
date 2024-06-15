import React, { useState } from 'react';
import './personal.css';

function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        contactNumber: '',
        address: '',
        category: 'general',
        ews: '',
        documents: null,
    });

    const [uploadMessage, setUploadMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'documents') {
            setFormData({ ...formData, [name]: files[0] });
            setUploadMessage('Document sent for approval');
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Form submitted successfully! Document sent for approval');
    };

    return (
        <div className="form-container">
            <h2>Personal Information Form</h2>
            <form id="personal-form" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name:</label>
                <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="dob">Date of Birth:</label>
                <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="contact-number">Contact Number:</label>
                <input
                    type="tel"
                    id="contact-number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="address">Address:</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="general">General</option>
                    <option value="obc">OBC</option>
                    <option value="sc/st">SC/ST</option>
                    <option value="others">Others</option>
                </select>

                <label>Do you belong to EWS section?</label>
                <div className="checkbox-group">
                    <label htmlFor="ews-yes">
                        <input
                            type="radio"
                            id="ews-yes"
                            name="ews"
                            value="yes"
                            checked={formData.ews === 'yes'}
                            onChange={handleChange}
                            required
                        />{' '}
                        Yes
                    </label>
                    <label htmlFor="ews-no">
                        <input
                            type="radio"
                            id="ews-no"
                            name="ews"
                            value="no"
                            checked={formData.ews === 'no'}
                            onChange={handleChange}
                            required
                        />{' '}
                        No
                    </label>
                </div>

                <label htmlFor="documents">Upload Documents:</label>
                <input
                    type="file"
                    id="documents"
                    name="documents"
                    onChange={handleChange}
                    required
                />
                <p id="upload-message">{uploadMessage}</p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;