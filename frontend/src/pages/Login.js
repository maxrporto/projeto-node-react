import React, {useState} from 'react';
import logo from '../assets/logo.svg'
import './Login.css';


export default function Login({history}){
    const [username, setUsername] = useState('');

    //vericando se esta funcionando o meu change
    function handleSubmit(e) {
        e.preventDefault();

        console.log(username);

        history.push('/main');
    }

    return(
        <div className="login-container">
            <form onSubmit = {handleSubmit}>
                <img src={logo} alt="TinDev"/>
                <input
                    placeholder="Digite seu usuário do Github: "
                    value ={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            
        </div>

       
    );

}