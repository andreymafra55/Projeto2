import './Teste.css'

import List from "../../Componentes/List";
import Rodape from '../../Componentes/Rodape';
import { Link } from 'react-router-dom';



function Teste(){

    return(
       <body className='body-home'>
            <header className='Header-Home'>
                <List/>
            </header>
            <div className='div-banner'>
                <div className='texto-banner'>
                <p className='p-banner'>AQUI SUA DOAÇÃO FAZ DIFERANÇA</p>
                <h3 className='h3-banner'>Nos ajude a<br/> cuidar da nossa<br/>comunidade</h3>
                </div>
            </div>
            <div className='div-meio'>
                <div className='div-meio-textos'>
                <h1 className='h1-meio'>SEJA UM DOADOR</h1>
                <p className='p-meio'>Através das suas doações, seja de alimentos,<br/>roupas e donativo,  conseguimos atender pessoas<br/>em situação de vulnerabilidade. </p>
                <Link>CONHEÇA NOSSA COMUNIDADE</Link>
                </div>
            </div>
            
            <div className='div-duvidas'>
                <img src='./imagens/imagemhome2.png' className='imghome2'/>
                <h1 className='h1-duvidas'>Tire sua dúvida</h1>
                <p className='p-duvidas'>Buscamos sanar toda e qualquer questão que você<br/>tiver. Mas antes de nos contatar dê uma olhada nas<br/><Link className='link-duvidas'>dúvidas frequentes</Link> dos nossos usuários.</p>
            </div>
            <Rodape />
       </body> 
    )

}

export default Teste;