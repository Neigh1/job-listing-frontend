import React, { useState } from 'react';
import '.Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
       
        console.log('Logging in with:', { email, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form   onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button className='signb' type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign Up, it's free</a>
            </p>
        </div>
    );
};

export default Login;
