import './List.css'

import { Link } from "react-router-dom";

const List = () =>{

    return(
        <body>
            <div className="divHeader">
            <nav >
                <ul className="navList">
                    <Link><li>Explorar</li></Link>
                    <Link to="/Login"><li>Entrar</li></Link>
                    <Link to="/Cadastro"><li className='registra'>Registra-se</li></Link>
                </ul>
            </nav>
        </div>
        </body>
        
    )

}

export default List;