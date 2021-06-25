import React, { useEffect, useState } from "react";
import PiuCard from "../../components/PiuCard";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import * as S from "./styles";
import Logo from "../../assets/Logo.svg";

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
  text: string;
}

const PFeed: React.FC = () => {
  const { logout, token } = useAuth();
  const { user } = useAuth();
  const [pius, setPius] = useState<Piu[]>();
  const [textoPiu, setTextoPiu] = useState<string>("");
  const [reload, setReload] = useState(0);
  const [search, setSearch] = useState('');
  const [overLimit, setOverLimit] = useState(false);


  const getPius = async () => {
    const response = await api.get("/pius", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setPius(response.data);
  };

  useEffect(() => {
    getPius();
  }, [reload]);

  const handleChange = (e: any) => {
    const userInput = e.currentTarget?.value;
    setTextoPiu(userInput);
    userInput.length > 140 ? setOverLimit(true) : setOverLimit(false);
  };

  const postPiu = async ({ text }: texto) => {
    if (textoPiu.length >= 0 && textoPiu.length <= 140) {
      await api.post(
        "/pius",
        { text: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTextoPiu("");
      setReload(reload + 1);
    }
  };

  return (
    <>
      <S.Header>
        <a href="/feed"><S.Imagem src={Logo} alt="Logo"/></a>
        <h1>Piupiuwer</h1>
        <div>
          <S.Search
            placeholder="Pesquise no Piupiuwer"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <S.Logout onClick={() => logout()}>Logout</S.Logout>
        </div>    
      </S.Header>
      <S.Feed>
        <div>
          <S.TxtArea
            overLimit={overLimit}
            value={textoPiu}
            id="newPost"
            name="piud"
            placeholder="O que você está pensando?"
            onChange={(e) => {
              handleChange(e);
            }}
          ></S.TxtArea>
          <div>
            <S.Contagem overLimit={overLimit}>{textoPiu.length}/140</S.Contagem>
            <button onClick={() => postPiu({ text: `${textoPiu}` })}>Piar</button>
          </div>
          
        </div>
        <div>
          {pius?.map((piu) => {; 
              if (search === '' || piu.user.first_name.toLowerCase().includes(search.toLowerCase())) { 
                return (
                  <PiuCard
                    id={piu.id}
                    user={piu.user}
                    likes={piu.likes}
                    text={piu.text}
                  />
                )}
            })}
        </div>
      </S.Feed>
    </>
  );
};

export default PFeed;

export {};
