import React, {useState, useContext } from 'react';
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../hooks/useErros"

function DadosUsuario ( {aoEnviar} ){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
    return(
        <form onSubmit={ (event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        } }>
            <TextField 
            value={email} 
            onChange={ (event)=>{
                setEmail(event.target.value)
            }}
            id="email" name="email" label="email" type="email" variant="outlined" margin="normal" required fullWidth />

            <TextField 
            value={senha} 
            onChange={ (event)=>{
                setSenha(event.target.value)
            }}
            onBlur={ validarCampos } //chama a validacao
            error={!erros.senha.valido} // boolean ( ! para iniciar como falso)
            helperText={erros.senha.texto} // mensagem de erro
            id="senha" name="senha" label="senha" type="password" variant="outlined" margin="normal" required fullWidth />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario;