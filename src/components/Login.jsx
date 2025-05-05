import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
     const newErrors = {};
    
     //email validasyonu
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
        newErrors.email = 'Geçerli bir e-posta girmelisin.'
     }

     //şifre validasyonu
     const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/ ;
     if (!passwordRegex.test(password)) {
        newErrors.password = 'Şifre min 8 karakter olmalı, harf ve rakam içermeli.'
     }

     //checkbox kontrolü
     if (!accepted) {
        newErrors.accepted = 'Şartları kabul etmelisin.'
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

    return (
        <form onSubmit={handleSubmit}>
         <h2>Giriş yap</h2>

         <div>
            <label>Email:</label>
            <input 
            type= "email"
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
         disabled={!email ||!password || !accepted}>
            Giriş yap
         </button>
        </form>
    );
}