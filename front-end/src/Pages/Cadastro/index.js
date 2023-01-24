import './Cadastro.css'
import { Link } from 'react-router-dom';
import CampoTexto from '../../Componentes/CampoTexto';
import './Cadastro.css'
import Button from '../../Componentes/Button/Button';
import Check from '../../Componentes/Check';

function Cadastro(){
    
    return(
        <body className='Body-Cadastro'>
            <div className='Cadastro' >
                <img src="./imagens/imagemtelacadastro.png" className='img-cadastro'/>
                <div className='divisao'></div>
                <div className='Formulario-Cadastro'>
                    <h1>Registre-se</h1>
                    <p>Já tem uma conta? <Link to="/Login">Faça login aqui</Link></p>
                    <CampoTexto label="Nome Completo" placeholder="Nome Completo"/>
                    <CampoTexto label="Email" placeholder="Email"/>
                    <CampoTexto label="CPF ou CNPJ" placeholder="CPF ou CNPJ"/>
                    <CampoTexto label="Senha" placeholder="Senha"/>
                    <CampoTexto label="Confirma senha" placeholder="Confirma senha"/>
                    <Check label="Pessoa Física"/>
                    <Check label="Ong" />
                    <Link to="/Feed" ><Button label="Cadastra" /></Link>
                </div>
            </div>
        </body>
    )

}

export default Cadastro;