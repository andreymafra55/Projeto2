import './ListFeed.css'

import { Link } from "react-router-dom";


const ListFeed = () =>{

    return(
        <body className='bodylistfeed'>
            <div className="divHeaderFeed">
            <Link className='link-inicio'>Inicio</Link>
            <div className='div-profile'>
                <Link className='link-profile'>Seu Perfil<img src='./imagens/VectorProfile.png' hspace="20"/></Link>
            </div>
            <hr></hr>
        </div>
        
        </body>
    )

}

export default ListFeed;