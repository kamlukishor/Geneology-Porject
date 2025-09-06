import React, { useState, useRef, useEffect } from 'react';
import './Registration.css';

interface RegistrationProps {
  onClose?: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    mobile: '',
    email: '',
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Please accept the terms and conditions to register.');
      return;
    }
    // TODO: Add validation and API call
    alert('Registration submitted!');
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        if (onClose) onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="registration-modal-overlay">
      <div className="registration-container" ref={modalRef}>
        <h2 className="registration-title">Registration</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-row">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" id="middleName" name="middleName" value={form.middleName} onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" value={form.dob} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" value={form.mobile} onChange={handleChange} required pattern="[0-9]{10}" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-row terms-row">
            <label className="terms-label">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={e => setAcceptedTerms(e.target.checked)}
                required
              />
              I accept the <a href="#" target="_blank" rel="noopener noreferrer">terms and conditions</a>
            </label>
          </div>
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
