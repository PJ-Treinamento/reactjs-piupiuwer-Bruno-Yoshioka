import React from 'react';
import { useAuth } from '../../hooks/auth';

const Feed: React.FC = () => {
    const { logout } = useAuth();
    
    return (
		<>
            <h1>Feed</h1>
            <button onClick={() => logout()}>botão de logout</button>
        </>
    );
}

export default Feed;