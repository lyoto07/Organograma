import "./Campo.css"
// import { useState } from "react";

export function Campo({type ="text", label, placeholder, valor, aoAlterado, obrigatorio=false}){
    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                value={valor}
                required={obrigatorio} 
                onChange={aoDigitado} 
                placeholder= {placeholderModificada}/>
        </div>
    )
}