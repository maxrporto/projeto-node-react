import React, {useEffect, useState} from 'react';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import api from '../services/api';
import './Main.css';
import {Link} from 'react-router-dom';

export default function Main({ match }) {
    const [users, setUsers] = useState([]);
    /*useEffect: é uma função, recebe 2 parametros
        primeiro é a função que quero executar pode ser uma arrow function
        segundo é quando eu quero executar essa função
    */
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            setUsers(response.data);
        }

        loadUsers();
    }, [match.params.id]);

    //componente que dara o like
    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id },
        });

        setUsers(users.filter(user => user._id !== id));
    }
    //componente que dara o dislike
    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id },
        });
        /**
         * users -> pega todos os meus usuarios
         * .filter() -> realiza um filtro
         * user => user._id != id -> filtrando para pegar somente os usarios que o id seja diferente que o id que estou recebendo 
         */
        setUsers(users.filter(user => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link>
            <img src={logo} alt="Tindev" />
            </Link>
            {users.length > 0 ? (
                <ul>
                {users.map(user=>(
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button" onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike"/>
                            </button>
                            <button type="button" onClick={() =>  handleLike(user._id) } >
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </li>  
                ))}
                </ul>                

            ): (
                <div className="empty">Acabou (: </div>
            ) }           
        </div>
    )
    
}