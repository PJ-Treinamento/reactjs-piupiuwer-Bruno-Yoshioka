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

interface texto {
    text: string
}

const PFeed: React.FC = () => {

    const { logout, token } = useAuth();
    const { user } = useAuth();
    const [pius, setPius] = useState<Piu[]>();
    const [textoPiu, setTextoPiu] = useState<string>('');
    const [reload, setReload] = useState(0);
    const [piuLength, setPiuLength] = useState(0);

    const getPius = async () => {

        const response = await api.get('/pius',        
        {headers: {
            'Authorization': `Bearer ${token}` 
            } });
        setPius(response.data);
    };

    useEffect (() => {
        getPius();
    }, [reload]);

    const postPiu = async ({text}: texto) => {
        const response = await api.post('/pius', {'text': text},        
        {headers: {
            'Authorization': `Bearer ${token}` 
        } });
        setTextoPiu('');
        setReload(reload+1);
    };

    return (
		<>
            <S.Header>
                <S.Imagem src={Logo} alt="Logo" />
                <S.Nome>Piupiuwer</S.Nome>
                <input type="text" />
                <S.Logout onClick={() => logout()}>Logout</S.Logout>
            </S.Header>
            <S.Feed>
                <div>
                    <textarea value={textoPiu} id="newPost" name="piud" placeholder="O que você está pensando?" onChange={(e) => {setTextoPiu(e.target.value); setPiuLength(piuLength+1)}}></textarea>
                    <button onClick={() => postPiu({text: `${textoPiu}`})}>Piar</button>
                </div>
                <div>
                    {
                        pius?.map(piu => {
                            return(
                                <PiuCard
                                id={piu.id}
                                user={piu.user}
                                likes={piu.likes}
                                text={piu.text}
                                /> 
                            )
                        })
                    }
                </div>
            </S.Feed>
            
        </>
    );
}

export default PFeed;

export{}