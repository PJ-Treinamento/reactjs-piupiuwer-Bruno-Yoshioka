import React, { useContext, useState } from 'react';
import { createContext } from "react";
import api from '../services/api';

interface User {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: Piu[];
	likes: PiuLike[];
	following: User[];
	followers: User[];
	favorites: Piu[];
}

interface Piu {
	id: string;
	user: User;
	likes: PiuLike[];
	text: string;
	created_at: Date;
	updated_at: Date;
}

interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}

interface AuthContextData {
    user: User,
    token: string,
    login(loginCred : LoginCredentials): void,
    logout(): void
  }

interface AuthState {
    token: string,
    user: User
}

interface LoginCredentials {
    email: string,
    password: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

	const login = async ({ email, password }: LoginCredentials) => {
        const response = await api.post('/sessions/login/', {
            email,
            password,
        });

        const { token, user } = response.data;
        localStorage.setItem('@Project:token', token);
        localStorage.setItem('@Project:user', JSON.stringify(user));

        setUserData({ token, user });
    };

    const logout = () => {
        localStorage.removeItem('@Project:user');
        localStorage.removeItem('@Project:token');

        setUserData({} as AuthState);
    };
  
  return (
    <AuthContext.Provider value={{
        user: userData.user,
        token: userData.token,
        login: login,
        logout: logout
    }}
    >
        {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);