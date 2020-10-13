import React from 'react';

import './Login.css'

function Login(){
    return (
        <div className="login-wrapper">
            
            <div className="login-content">
            <h1>Bem-vindo!</h1>

            <form action="" method="post">
                <label htmlFor="login">Usuário:</label>
                <input id="login" type="text" placeholder="Usuário"/>

                <label htmlFor="senha">Senha:</label>
                <input type="password" placeholder="•••••"/>

            </form>
            <a href="/dashboard" type="button" >Logar</a>
            </div>

        </div>
    )
}

export default Login;