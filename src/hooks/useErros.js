import React, { useState } from 'react';

function useErros(validacoes){
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erros, setErros] = useState( estadoInicial ); //obj cpf q quarda obj validade, texto
    function validarCampos( event) {
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value); //ou const ehValido = validar(cpf) , chama a funcao retorna o valor
        setErros( novoEstado ); //seta o valor e modifica se for erro ou sucesso na validacao
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {}
    for(let campom in validacoes){
        estadoInicial[campom] = { valido: true, texto: ""} 
    }
    return estadoInicial;
}

export default useErros;