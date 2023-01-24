import './Check.css'

const Check = (props) => {
    return(
        <div className="check">
            <input type="checkbox" />
            <label >{props.label}</label>
        </div>
    )
}

export default Check;