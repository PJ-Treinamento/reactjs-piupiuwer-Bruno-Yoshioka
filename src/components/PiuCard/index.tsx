import React, { useEffect, useState } from 'react';
import Like from '../../assets/Like.svg';
import LikeR from '../../assets/LikeR.svg';
import Star from '../../assets/Star.svg';
import StarA from '../../assets/StarA.svg'
import trash from '../../assets/trash.svg';
import * as S from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Loading from '../../assets/Loading.svg';

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
	likado?: string;
	favorito?: string;
}

interface PiuLike {
	id: string;
	user: User;
	piu: Piu;
}

interface PiuId {
	id: string;
}

const PiuCard: React.FC<Piu> = ({id, user, likes, text}) => {
    const { token } = useAuth();
	const { user: User} = useAuth();
	const [ likeCounter, setLikeCounter] = useState(likes.length);
	const [ favoritado, setFavoritado] = useState(Loading);
	const [liked, setLiked] = useState(Loading);
	
	const GetFav = async () => {
		const response = await api.get(`/users?username=${User.username}`, {
		  headers: {
			Authorization: `Bearer ${token}`,
		  },
		});
			let achou = false;
		achou = response.data[0].favorites.some((favorito : any) => {
				return id === favorito.id;
			});
			if (achou === true) {
				setFavoritado(StarA);
			} else { 
				setFavoritado(Star);
			}
		}
	
	const GetLike = async () => {
		const response = await api.get(`/users?username=${User.username}`, {
		  headers: {
			Authorization: `Bearer ${token}`,
		  },
		});
			let achou = false;
			achou = likes.some((piuLike:any) =>{
				return piuLike.user.id === response.data[0].id;
			});
			if (achou === true) {
				setLiked(LikeR);
			} else {
				setLiked(Like);
			}
		}


	
	useEffect (() => {
		PrintPiu();
		GetFav();
		GetLike();

	}, [likeCounter]);





	const deletePiu = async () => {
		if (user.username === User.username) {
			await api.delete('/pius', 
		{	data : { piu_id : id}, headers: {'Authorization': `Bearer ${token}`}}
		);		
			window.location.reload();
		}
	}

	

	const PrintPiu = () => {


		return (
			<>
				<S.Card>
					<S.CardHeader>
						<S.User>
							<S.UserImage src={user.photo} alt="user_photo" />
							<S.UserName>{user.first_name}</S.UserName>
						</S.User>
						<S.Buttons onClick={() => deletePiu()}><S.ImgButtonD obaoba={user.username===User.username} src={trash} alt="Buttons" /></S.Buttons>
					</S.CardHeader>
					<S.PiuText>{text}</S.PiuText>
					<S.CardF>
						<S.Buttons onClick={() => likePiu({id:`${id}`})}><S.ImgButtonL src={liked} />{likeCounter} likes</S.Buttons>
						<S.Buttons onClick={() => FavPiu({id:`${id}`})}><S.ImgButtonF src={favoritado} /></S.Buttons>
					</S.CardF>
				</S.Card>
			</>
		);
	}

	const likePiu = async ({id} : PiuId) => {
        const response = await api.post('/pius/like', {'piu_id': id},
		{	headers: {'Authorization': `Bearer ${token}` },
		});
		if (response.data.operation === "like") {
			setLiked(LikeR);
			setLikeCounter(likeCounter+1);
		} else {
			setLiked(Like);
			setLikeCounter(likeCounter-1);
		}	
    };

	const FavPiu = async ({id} : PiuId) => {
		if(favoritado === Star) {
			setFavoritado(StarA);
			await api.post('/pius/favorite', {'piu_id': id},
			{	headers: {'Authorization': `Bearer ${token}` },
			});
		} else {
			setFavoritado(Star);
			await api.post('/pius/unfavorite', {'piu_id': id},
			{	headers: {'Authorization': `Bearer ${token}` },
			});
		}	
	};

    return(
			PrintPiu()
    );

}

export default PiuCard;