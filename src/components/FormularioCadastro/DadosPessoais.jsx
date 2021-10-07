import React, {useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"
import useErros from "../../hooks/useErros"

function DadosPessoais({aoEnviar}) { // {aoEnviar} = props.aoEnviar => props permite acesso as informacoes para outra funcao clicando no onSubmit

    const [nome, setNome] = useState(""); // hook useState, guarda um estado/valor informado no front/formulario ( var, funcao )
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={ (event) => {
        event.preventDefault(); //previnindo comportamento padrao do onSubmit
        if(possoEnviar()){
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades}); // envia por objeto{} informacoes para a funcao ooEnviar em FormularioCadastro no app.js
        }
    }}
    >
      <TextField
        onChange={ (event) => { //funcao anonima

          /*
          let tmpNome = event.target.value; //Pega o valor digitado e seta na let/temporario 
          if(tmpNome.length >= 3){
              tmpNome = tmpNome.substring(0, 3); //Pega somente os 3 primeiros digitos
          }
          setNome(tmpNome);
          */

          setNome(event.target.value); //Guarda o valor digitado
            
        }}
        value={nome}
        onBlur={ validarCampos } //chama a validacao
        value={nome}
        error={!erros.nome.valido} // boolean ( ! para iniciar como falso)
        helperText={erros.nome.texto} // mensagem de erro
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={ (event) => { //funcao anonima

          setSobrenome(event.target.value); //Guarda e retorna o valor
            
        }}
        value={sobrenome}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={ (event) => { //funcao anonima

          setCpf(event.target.value); //Guarda e retorna o valor
            
        }}
        onBlur={ validarCampos } //chama a validacao
        value={cpf}
        error={!erros.cpf.valido} // boolean ( ! para iniciar como falso)
        helperText={erros.cpf.texto} // mensagem de erro
        name="cpf"
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />


      <FormControlLabel
        label="Promoções"
        control={<Switch checked={promocoes} onChange={ (event) => { setPromocoes(event.target.checked) } } name="promocoes" color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch checked={novidades} onChange={ (event) => { setNovidades(event.target.checked) } } name="novidades" color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;