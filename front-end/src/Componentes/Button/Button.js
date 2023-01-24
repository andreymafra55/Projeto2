import './Button.css'

const Button = (props) => {
    return(
        <div className='div_button'>
            <a className='botao'>{props.label}</a>
        </div>
        
    )
}

export default Button