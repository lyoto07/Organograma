import "./Formulario.css";
import  Campo from "../Campo";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import Botao from '../Botao';
import { useState } from "react";

export const Formulario = ({aoColaboradorCadastrado, times, aoCriarTime}) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setCargo("");
        setImagem("");
        setNome("");
        setTime("");

    }

    return (
        <section className="formulario">
            <form onSubmit={(aoSalvar)}>
                <h2>
                    Preencha os dados para criar os cards do colaborador
                </h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}    
                />
                <Botao>Clique</Botao>
            </form>

            <form onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarTime({nome: nomeTime, cor: corTime})
            } }>
                <h2>
                    Preencha os dados para criar um novo time
                </h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do Time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    type="color"
                    obrigatorio={true} 
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar um novo time</Botao>
            </form>
        </section>

    );
}