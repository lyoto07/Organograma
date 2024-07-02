import './Time.css'
import Colaborador from "../Colaborador"

export const Time = ({time, colaboradores}) => {
    // const css = {backgroundColor: time.corSecundaria}
    console.log(colaboradores)
    return (
        (colaboradores.length > 0) &&  (  
        <section className="time" style={{ backgroundColor: time.corSecundaria }}>
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>

            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => 
                    {
                        return <Colaborador 
                            corFundo={time.corPrimaria} 
                            key={indice} 
                            colaborador={colaborador}
                            // nome={colaborador.nome} 
                            // cargo={colaborador.cargo} 
                            // imagem={colaborador.imagem} 
                            aoDeletar={() => {}}
                        />
                    }
                    
                )}

            </div>
            
        </section>)
        
        
    )
}