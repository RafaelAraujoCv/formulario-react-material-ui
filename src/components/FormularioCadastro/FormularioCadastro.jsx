import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

import {Typography, Stepper, Step, StepLabel} from "@material-ui/core";

//controla
function FormularioCadastro({aoEnviar, validacoes}) { // {aoEnviar} = props.aoEnviar => props permite acesso as informacoes para outra funcao clicando no onSubmit
  
  const [etapaAtual, setEtapaAtual] = useState(0); //Etapa inicial do formulario
  const [dadosColetados, setDados] = useState({}); 

  useEffect( ()=> { //carrega a informacao apos qualquer evento
    if(etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  })

  const formularios = [ //Array contem indice e paginas do formulario como valor
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>
  ];

  function coletarDados(dados){ // a cada clique no botao e guardado as informacoes do formulario em setDados
    setDados({...dadosColetados, ...dados});
    
    proximo();
  }

  function proximo(){ // a cada clique no botao e modificado a etapa( indice do const formularios[] )
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      { formularios[etapaAtual] } 
    </>
  );
}

//Stepper => passos de casa etapa

// { formularioAtual(etapaAtual) }  => script javaScript , chama o switch selecionando o case informado
/*
<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
<DadosUsuario/>
<DadosEntrega/>
 */

export default FormularioCadastro;