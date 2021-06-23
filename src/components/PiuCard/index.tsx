import React, { useEffect, useState } from 'react';
import Like from '../../assets/Like.svg';
import LikeR from '../../assets/LikeR.svg';
import Star from '../../assets/Star.svg';
import StarA from '../../assets/StarA.svg'
import trash from '../../assets/trash.svg';
import * as S from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

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
	const [ fav, setFav ] = useState('');
	const [ usuario, setUsuario] = useState<User>(User);
	const [ favoritado, setFavoritado] = useState(Star);
	const [liked, setLiked] = useState(Like);

	const GetFav = async () => {
		const response = await api.get(`/users?username=${User.username}`,
		{	headers: {'Authorization': `Bearer ${token}` },
		});
		let achou = false;
		setUsuario(response.data);
		response.data[0].favorites.map((favorito : any) => {
			if (id === favorito.id) {
				achou = true;
			}
		});
		if (achou === true) {
			setFav('F');
			setFavoritado(StarA);
		} else {
			setFav('N');
			setFavoritado(Star);
		}
	}

	const GetLike = async () => {
		const response = await api.get(`/users?username=${User.username}`,
		{	headers: {'Authorization': `Bearer ${token}` },
		});
		let achou = false;
		setUsuario(response.data);
		achou = likes.some((piuLike) =>{
			return piuLike.user.id === response.data[0].id;
		});
		// response.data[0].likes.map((like : any) => {
		// 	if (id === like.piu.id) {
		// 		achou = true;
		// 	}
		// });
		if (achou === true) {
			setLiked(LikeR);
		} else {
			setLiked(Like);
		}
	}

	useEffect (() => {
		GetLike();
		GetFav();
	}, []);

	const PrintPiu = () => {
		return (
			<>
				<S.Card>
					<S.CardHeader>
						<S.User>
							<S.UserImage src={user.photo} alt="user_photo" />
							<S.UserName>{user.first_name}</S.UserName>
						</S.User>
						<S.Buttons><S.ImgButton src={trash} alt="Buttons" /></S.Buttons>
					</S.CardHeader>
					<S.PiuText>{text}</S.PiuText>
					<S.CardF>
						<S.Buttons onClick={() => likePiu({id:`${id}`})}><S.ImgButton src={liked} />{likeCounter} likes</S.Buttons>
						<S.Buttons onClick={() => FavPiu({id:`${id}`})}><S.ImgButton src={favoritado} />{fav}</S.Buttons>
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
		if(fav === 'N') {
			setFav('F');
			setFavoritado(StarA);
			await api.post('/pius/favorite', {'piu_id': id},
			{	headers: {'Authorization': `Bearer ${token}` },
			});
		} else {
			setFav('N');
			setFavoritado(Star);
			await api.post('/pius/unfavorite', {'piu_id': id},
			{	headers: {'Authorization': `Bearer ${token}` },
			});
		}	
	};

	useEffect (() => {
		PrintPiu()
	}, [likeCounter, fav ]);

    return(
			PrintPiu()
    );

}

export default PiuCard;