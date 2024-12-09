import "./Colaborador.css"
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const Colaborador = ({colaborador, corFundo, aoDeletar, aoFavoritar}) => {

    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size:25,
        onClick:favoritar
    }

    return(
        <div className="colaborador">
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={ () => aoDeletar(colaborador.id)}
            />
            
            <div className="cabecalho" style={{backgroundColor: corFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favorito">
                    { colaborador.favorito ? <AiFillHeart color="#ff0000" {...propsFavorito}/> : <AiOutlineHeart {...propsFavorito}/> }
                </div>
            </div>

        </div>
    )
}