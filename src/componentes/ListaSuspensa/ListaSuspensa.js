import "./ListaSuspensa.css"
export const ListaSuspensa = (props) => {

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}  
                value={props.valor} 
                required={props.obrigatorio}
                >
                    <option value="" disabled>Selecione</option>
                    {props.itens.map(
                        item => 
                        <option key={item}> {item} </option>
                    )}
            </select>
        </div>
    )
}