import React from 'react';
import Like from '../../assets/Like.svg';
import * as S from './styles';

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
	user: User;
	likes: PiuLike[];
	text: string;
}

interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}

const PiuCard: React.FC<Piu> = ({user, likes, text}) => {
    
    return(
        <S.Card>
            <S.CardHeader>
                <S.User>
                    <S.UserImage src={user.photo} alt="user_photo" />
                    <S.UserName>{user.first_name}</S.UserName>
                </S.User>
                <button>deletar</button>
            </S.CardHeader>
            <p>{text}</p>
            <div>
                <button><img src={Like} alt="like" />{likes.length} likes</button>
            </div>
        </S.Card>
    );

}

export default PiuCard;