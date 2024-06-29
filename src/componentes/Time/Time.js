import './Time.css'
import Colaborador from "../Colaborador"

export const Time = (props) => {
    // const css = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0) &&  (  
        <section className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}

            </div>
            
        </section>)
        
        
    )
}