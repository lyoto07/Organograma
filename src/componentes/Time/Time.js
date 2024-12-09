import './Time.css'
import Colaborador from "../Colaborador"
import fundo from "../../assets/imagens/fundo.png";
import hexToRgba from 'hex-to-rgba';

export const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    // const css = {backgroundColor: time.corSecundaria}
    return (
        (colaboradores.length > 0) &&  (  
        <section className="time" style={{ backgroundImage: `${fundo}`, backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input   
                type='color' 
                className='inputColor'
                value = {time.cor} 
                onChange = { evento => mudarCor(evento.target.value, time.id) } 
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => 
                    {
                        return <Colaborador 
                            key={indice} 
                            aoFavoritar={aoFavoritar}
                            colaborador={colaborador}
                            corFundo={time.cor} 
                            aoDeletar={aoDeletar}
                        />
                    }
                )}
            </div>
            
        </section>)
    )
}