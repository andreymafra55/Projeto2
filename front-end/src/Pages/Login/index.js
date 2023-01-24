import './Login.css'
import CampoTexto from '../../Componentes/CampoTexto';
import Button from '../../Componentes/Button/Button';
import { Link } from 'react-router-dom';

function Login (){

    return(
        <body className='Body-Login'>
            <div className='Login'>
                <img src='./imagens/imagemteladelogin.png' className='img-login' />
                <div className='divisao' ></div>
                <div className='Formulario-Login'>
                    <h1>Login</h1>
                    <CampoTexto label="Email" placeholder="Email"/>
                    <CampoTexto label="Senha" placeholder="Senha"/>
                    <Link to="/Feed" ><Button label="Login" /></Link>
                    <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se aqui</Link></p>
                </div>
            </div>  
        </body>
        
    )

}

export default Login;