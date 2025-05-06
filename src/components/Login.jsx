import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Geçerli bir e-posta girmelisin.';
    }

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password = 'Şifre min 8 karakter olmalı, harf ve rakam içermeli.';
    }

    if (!accepted) {
      newErrors.accepted = 'Şartları kabul etmelisin.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success');
    }
  };

  useEffect(() => {
    validate();
  }, [email, password, accepted]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Giriş yap</h2>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Şifre:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          Şartları kabul ediyorum
        </label>
        {errors.accepted && <p>{errors.accepted}</p>}
      </div>

      <button
         type="submit"
         disabled={!email || !password || !accepted || Object.keys(errors).length > 0}
         >
         Giriş yap
      </button>
    </form>
  );
}