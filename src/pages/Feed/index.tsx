import React from 'react';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const Feed: React.FC = () => {
    const { logout, token } = useAuth();
    
    const getPius = () => {

        const response = api.get('/pius',        
        {headers: {
            'Authorization': `Bearer ${token}` 
            } });

        console.log(response);
    };

    return (
		<>
            <h1>Feed</h1>
            <button onClick={() => logout()}>botão de logout</button>
            <button onClick={() => getPius()}>hohohoho</button>
        </>
    );
}

export default Feed;