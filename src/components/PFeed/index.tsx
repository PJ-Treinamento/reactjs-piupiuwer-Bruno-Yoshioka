import React, { useEffect, useState } from 'react';
import PiuCard from '../../components/PiuCard';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import * as S from './styles';
import Logo from '../../assets/Logo.svg';

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

const PFeed: React.FC = () => {

    const { logout, token } = useAuth();
    const [pius, setPius] = useState<Piu[]>();

    const getPius = async () => {

        const response = await api.get('/pius',        
        {headers: {
            'Authorization': `Bearer ${token}` 
            } });
        setPius(response.data);
    };

    useEffect (() => {
        getPius();
    }, []);

    return (
		<>
            <S.Header>
                <S.Imagem src={Logo} alt="Logo" />
                <S.Nome>Piupiuwer</S.Nome>
                <input type="text" />
                <button onClick={() => logout()}>botão de logout</button>
            </S.Header>
            <S.Feed>
                {
                    pius?.map(piu => {
                        return(
                            <PiuCard
                            user={piu.user}
                            likes={piu.likes}
                            text={piu.text}
                            /> 
                        )
                    })
                }
            </S.Feed>
            
        </>
    );
}

export default PFeed;

export{}