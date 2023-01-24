
import Modal from 'react-modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListFeed from '../../Componentes/ListFeed';
import Check from '../../Componentes/Check';

import './Feed.css'

Modal.setAppElement('#root')

function Feed (){

    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal(){
        setIsOpen(true)
    }

    function handleCloseModal(){
        setIsOpen(false)
    }

    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto'
        }
    }

    return(
        <body>
            <header>
                <ListFeed/>
            </header>
        <div className='div-feed-post'>
            <h1 className='h1-feed-post'>Quem eu posso ajudar?</h1>
            <select className='select-feed'>
                <option value="valor1">Pessoa</option>
                <option value="valor2" selected>Ong</option>
            </select>
            <input placeholder='Oque está procurando?' className='input-feed'/>
            <a href='#' className='button-search'><img src='./imagens/VectorSearch.png'/></a>
            <Link className='button-add' onClick={handleOpenModal}><img src='./imagens/VectorAdd.png'/></Link>
            <hr className='hr-feed'/>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} >
            <div className='div-modal'>
                <h1>Criar Postagem</h1>
                <div className='form-modal'>
                <labe className='label-regiao'>Região</labe>
                <select className='select-form-modal'>
                    <option value="recife">Recife</option>
                    <option value="Paulista">Paulista</option>
                    <option value="Olinda">Olinda</option>
                    <option value="Igarassu">Igarassu</option>
                </select>
                <label className='label-descricao'>Descrição</label>
                <textarea placeholder='Escreva algo...' className='input-descricao' size="20"/>
                <label className='label-email'>Email</label>
                <input className='input'></input>
                <label className='label-email'>Telefone</label>
                <input className='input'></input>
                <label className='label-endereco'>Endereço</label>
                <input className='input'></input>
                </div>
                <div className='divisao-modal' ></div>
                <div className='check-modal'>
                    <label>O que você está precisando:</label>
                    <Check label="Roupas"/>
                    <Check label="Produtos de higiene pessoal"/>
                    <Check label="Alimentos"/>
                    <Check label="Cobertores"/>
                </div>
                <button className='button-modal'>COMPARTILHAR</button>
            </div>
        </Modal>
        </body>
    )

  
}



export default Feed;