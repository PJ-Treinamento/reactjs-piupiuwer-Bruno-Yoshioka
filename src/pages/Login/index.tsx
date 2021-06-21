import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
    const { login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div>
                <div>
                    <p>imagem e pa</p>
                </div>
                <div>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="checkbox" />
                    <label> Não sou um robô</label>

                    <button onClick={() => login({email:`${email}`, password:`${password}`})}>botão de login</button>
                    
                </div>
            </div>
        </>
    );
}

export default Login;