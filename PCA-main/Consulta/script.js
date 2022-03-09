function Autenticacao(){
    var campoAutenticacaoUsuario = document.getElementById("campoAutenticacaoUsuario").value;
    var campoAutenticacaoSenha = document.getElementById("campoAutenticacaoSenha").value;
    /* var quantVet = parseInt(campoAutenticacaoUsuario.length); */

    var autenticacao = document.getElementById("autenticacao");
    var acessoFuncionario = document.getElementById("acessoFuncionario");

    var title = document.getElementById("title");
    var body = document.getElementById("body");

    var acessoFuncionarioNome = document.getElementById("acessoFuncionarioNome");
    var acessoFuncionarioMatricula = document.getElementById("acessoFuncionarioMatricula").value;
    var acessoFuncionarioFuncao = document.getElementById("acessoFuncionarioFuncao");

    
    /* var nomeCompletoFuncionario = document.getElementById("nomeCompletoFuncionario");
    var idadeFuncionario = document.getElementById("idadeFuncionario");
    var grupoSanguineoFuncionario = document.getElementById("grupoSanguineoFuncionario");
    var problemasSaudeFuncionario = document.getElementById("problemasSaudeFuncionario");
    var alergiaFuncionario = document.getElementById("alergiaFuncionario");
    var pesoFuncionario = document.getElementById("pesoFuncionario");
    var alturaFuncionario = document.getElementById("alturaFuncionario");

    var nomeCompletoPaciente = document.getElementById("nomeCompletoPaciente");
    var idadePaciente = document.getElementById("idadePaciente");
    var grupoSanguineoPaciente = document.getElementById("grupoSanguineoPaciente");
    var problemasSaudePaciente = document.getElementById("problemasSaudePaciente");
    var alergiaPaciente = document.getElementById("alergiaPaciente");
    var pesoPaciente = document.getElementById("pesoPaciente");
    var alturaPaciente = document.getElementById("alturaPaciente"); */

    if(campoAutenticacaoUsuario == "589045" && campoAutenticacaoSenha == "589045"){
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";

        title.innerHTML = "TBMGN | Funcionário";
        body.className = "fundoBranco";

        acessoFuncionarioNome.innerHTML = "Jeniffer Lopez";
        acessoFuncionarioMatricula = "589045";
        acessoFuncionarioFuncao.innerHTML = "Recepcionista";
    }
    /* else if(campoAutenticacaoUsuario == "12345"){
        title.innerHTML = "TBMGN | Funcionário";
        body.className = "fundoBranco";

        nomeCompletoFuncionario.value = "Alcimar";
        idadeFuncionario.value = "52";
        grupoSanguineoFuncionario.value = "O+";
        problemasSaudeFuncionario.value = "Diabético";
        alergiaFuncionario.value = "Novalgina";
        pesoFuncionario.value = "75 kg";
        alturaFuncionario.value = "1,60 m";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(campoAutenticacaoUsuario == "00123456789"){
        title.innerHTML = "TBMGN | Paciente";
        body.className = "fundoBranco";

        nomeCompletoPaciente.value = "Lucas";
        idadePaciente.value = "20";
        grupoSanguineoPaciente.value = "O-";
        problemasSaudePaciente.value = "hipertenso";
        alergiaPaciente.value = "Novalgina";
        pesoPaciente.value = "80 kg";
        alturaPaciente.value = "1,80 m";
        acessoPaciente.className = "acessoPacienteMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(quantVet == 5){
        title.innerHTML = "TBMGN | Funcionário";
        body.className = "fundoBranco";

        nomeCompletoFuncionario.value = "Funcionário";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";
    }
    else if(quantVet == 11){
        title.innerHTML = "TBMGN | Paciente";
        body.className = "fundoBranco";

        nomeCompletoPaciente.value = "Paciente";
        acessoPaciente.className = "acessoPacienteMostrar";
        autenticacao.className = "autenticacaoOcultar";
    } */
}


function esqueceuSenha(){
    var title = document.getElementById("title");
    
    var autenticacao = document.getElementById("autenticacao");
    var esqueceuSenha = document.getElementById("esqueceuSenha");

    
    title.innerHTML = "TBMGN | Esqueceu senha";
    
    autenticacao.className = "autenticacaoOcultar";
    esqueceuSenha.className = "esqueceuSenhaMostrar";

}

function menuConsultarCadastro(){    
    var consultarCadastro = document.getElementById("consultarCadastro");
    
    consultarCadastro.className = "consultarCadastro";
}
function dadoMenuAcessoFuncionarioOver(){
    var dadoMenuAcessoFuncionario = document.getElementById("dadoMenuAcessoFuncionario");
    
    dadoMenuAcessoFuncionario.className = "dadoMenuAcessoFuncionarioOver";
}

function consultarCadastroCriado(){
    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    
    consultarCadastro.className = "consultarCadastroOcultar";
    funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriadoMostrar";
    funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
}
function menuCadastrarPaciente(){
    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    
    consultarCadastro.className = "consultarCadastroOcultar";
    funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
    funcionarioCadastrarPaciente.className = "funcionarioCadastrarPacienteMostrar";
}
