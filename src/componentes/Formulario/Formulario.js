import "./Formulario.css";
import  CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import Botao from '../Botao';
import { useState } from "react";

export const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
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
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar os cards do colaborador
                </h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}    
                />
                <Botao>clique</Botao>
            </form>
        </section>

    );
}