import "./Botao.css"

export default function botao(props){
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}