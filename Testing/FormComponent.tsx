import React, { useState } from "react";

const FormComponent: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Please fill out all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    setFormSubmitted(true);
    setError("");
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2>Form Component</h2>
      {formSubmitted ? (
        <p data-testid="success-message">Form submitted successfully</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-testid="name-input"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email-input"
            />
          </div>
          <div>
            <button type="submit" data-testid="submit-button">
              Submit
            </button>
          </div>
        </form>
      )}
      {error && <p data-testid="error-message">{error}</p>}
    </div>
  );
};

export default FormComponent;
