import './Rodape.css'

const Rodape = () =>{

    return(
        <body className='body-rodape'>
            <div className='div-contatos'>
                <h1 className='h1-rodape'>CONTATO</h1>
                <p className='p-rodape'>+55 81 99999-9999 <br/> contato@gmail.com</p>
                <hr color="black"></hr>
                <p className='p-rodape'>Rua Madona, 42 - Botafogo<br/>Itapissuma-PE</p>
                <hr color="black"></hr>
                <nav >
                <ul className="list-rodape">
                    <img src='./imagens/instagram-p.png' className='img1' />
                    <img src='./imagens/facebook-p.png' hspace="35" className='img2'/>
                    <img src='./imagens/youtube-p.png' className='img3'/>
                </ul>
            </nav>
            <h1 className='h1-rodape-informacoes'>INFORMAÇÕES</h1>
            <ul className='ul-rodape'>
                <li>Explorar</li>
                <li>Contato</li>
                <li>Dúvidas</li>
            </ul>
            </div>
            
        </body>
    )

}

export default Rodape;