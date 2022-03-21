function mostrarSenha(){
    var str = document.getElementById("botaoMostrarSenha").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    var campoAutenticacaoSenha = document.getElementById("campoAutenticacaoSenha");
    
    /* botaoMostrarSenha.innerHTML = "visibility_off"; */


    if(res == "visibility"){
        botaoMostrarSenha.innerHTML = "visibility_off";
        campoAutenticacaoSenha.setAttribute('type', 'text');
    }
    else{
        botaoMostrarSenha.innerHTML = "visibility";
        campoAutenticacaoSenha.setAttribute('type', 'password');
    }

}

function Autenticacao(){
    var campoAutenticacaoUsuario = document.getElementById("campoAutenticacaoUsuario").value;
    var campoAutenticacaoSenha = document.getElementById("campoAutenticacaoSenha").value;
    /* var quantVet = parseInt(campoAutenticacaoUsuario.length); */

    var autenticacao = document.getElementById("autenticacao");
    var acessoFuncionario = document.getElementById("acessoFuncionario");

    var title = document.getElementById("title");
    var body = document.getElementById("body");

    var nomeAcessoFuncionarioNome = document.getElementById("nomeAcessoFuncionarioNome");
    var nomeAcessoFuncionarioMatricula = document.getElementById("nomeAcessoFuncionarioMatricula");
    var nomeAcessoFuncionarioFuncao = document.getElementById("nomeAcessoFuncionarioFuncao");


    if(campoAutenticacaoUsuario == "589045" && campoAutenticacaoSenha == "589045"){
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";

        title.innerHTML = "TBMGN | Funcionário";
        body.className = "fundoBranco";

        nomeAcessoFuncionarioNome.innerHTML = "Jeniffer Lopez";
        nomeAcessoFuncionarioMatricula.innerHTML = "589045";
        nomeAcessoFuncionarioFuncao.innerHTML = "Recepcionista";
    }
    else if(campoAutenticacaoUsuario == "12345" && campoAutenticacaoSenha == "12345"){
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";

        title.innerHTML = "TBMGN | Funcionário";
        body.className = "fundoBranco";

        nomeAcessoFuncionarioNome.innerHTML = "João Paulo";
        nomeAcessoFuncionarioMatricula.innerHTML = "12345";
        nomeAcessoFuncionarioFuncao.innerHTML = "Doutor";
    }
}


function esqueceuSenha(){
    var title = document.getElementById("title");
    
    var autenticacao = document.getElementById("autenticacao");
    var esqueceuSenha = document.getElementById("esqueceuSenha");

    
    title.innerHTML = "TBMGN | Esqueceu senha";
    
    autenticacao.className = "autenticacaoOcultar";
    esqueceuSenha.className = "esqueceuSenhaMostrar";

}


function dadoMenuAcessoFuncionarioOver(){
    var dadoMenuAcessoFuncionario = document.getElementById("dadoMenuAcessoFuncionario");
    
    dadoMenuAcessoFuncionario.className = "dadoMenuAcessoFuncionarioOver";
}

function menuHamburguer(){
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario");

    var x = window.screen.width;
    if(x <= "750"){
        menuAcessoFuncionario.className = "menuAcessoFuncionarioAbrir";
        acessoFuncionario.className = "acessoFuncionarioAbrir";
        topoAcessoFuncionario.className = "topoAcessoFuncionarioAbrir";
    }
    else{
        menuAcessoFuncionario.className = "menuAcessoFuncionario";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        topoAcessoFuncionario.className = "topoAcessoFuncionario"
    }
}
function menuFechar(){
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario");
    
    menuAcessoFuncionario.className = "menuAcessoFuncionarioFecharMenu";
    acessoFuncionario.className = "acessoFuncionarioFecharMenu";
    
    
    var x = window.screen.width;
    if(x <= "750"){
        topoAcessoFuncionario.className = "topoAcessoFuncionario";
    }
    else{
        topoAcessoFuncionario.className = "topoAcessoFuncionarioFechar";
    }
}

function menuConsultarCadastro(){    
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");

    title.innerHTML = "TBMGN | Consultar Cadastro";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Consultar Cadastro";
    

    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    var  consultarHistorico = document.getElementById("consultarHistorico");
    var funcionarioConsultarHistoricoDetalhes = document.getElementById("funcionarioConsultarHistoricoDetalhes");

    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario")

    var x = window.screen.width;
    if(x <= "750"){
        consultarCadastro.className = "consultarCadastro";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        consultarHistorico.className = "consultarHistorico";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    
        menuAcessoFuncionario.className = "menuAcessoFuncionarioFecharMenu";
        acessoFuncionario.className = "acessoFuncionarioFecharMenu";
        topoAcessoFuncionario.className = "topoAcessoFuncionario";
    }
    else{
        consultarCadastro.className = "consultarCadastro";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        consultarHistorico.className = "consultarHistorico";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    }
}
function consultarCadastroCriado(){
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");

    title.innerHTML = "TBMGN | Consultar Cadastro";
    nomeTituloTopoAcessoFuncionario.innerHTML = "CONSULTAR CADASTRO";

    var campoConsultarCadastroCPF = document.getElementById("campoConsultarCadastroCPF").value;
    
    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");

    var inputFuncionarioConsultarCadastroCriadoCPF = document.getElementById("inputFuncionarioConsultarCadastroCriadoCPF");
    var inputFuncionarioConsultarCadastroCriadoProntuario = document.getElementById("inputFuncionarioConsultarCadastroCriadoProntuario");
    var inputFuncionarioConsultarCadastroCriadoNomeCompleto = document.getElementById("inputFuncionarioConsultarCadastroCriadoNomeCompleto");
    var inputFuncionarioConsultarCadastroCriadoTipoSaguineo = document.getElementById("inputFuncionarioConsultarCadastroCriadoTipoSaguineo");
    var inputFuncionarioConsultarCadastroCriadoEmail = document.getElementById("inputFuncionarioConsultarCadastroCriadoEmail");
    var inputFuncionarioConsultarCadastroCriadoTelefone = document.getElementById("inputFuncionarioConsultarCadastroCriadoTelefone");
    var inputFuncionarioConsultarCadastroCriadoCEP = document.getElementById("inputFuncionarioConsultarCadastroCriadoCEP");
    var inputFuncionarioConsultarCadastroCriadoRua = document.getElementById("inputFuncionarioConsultarCadastroCriadoRua");
    var inputFuncionarioConsultarCadastroCriadoNumero = document.getElementById("inputFuncionarioConsultarCadastroCriadoNumero");
    var inputFuncionarioConsultarCadastroCriadoComplemento = document.getElementById("inputFuncionarioConsultarCadastroCriadoComplemento");
    var inputFuncionarioConsultarCadastroCriadoCidade = document.getElementById("inputFuncionarioConsultarCadastroCriadoCidade");
    var inputFuncionarioConsultarCadastroCriadoMunicipio = document.getElementById("inputFuncionarioConsultarCadastroCriadoMunicipio");
    var inputFuncionarioConsultarCadastroCriadoPontoReferencia = document.getElementById("inputFuncionarioConsultarCadastroCriadoPontoReferencia");
    var inputFuncionarioConsultarCadastroCriadoUF = document.getElementById("inputFuncionarioConsultarCadastroCriadoUF");
    var inputFuncionarioConsultarCadastroCriadoLocalNascimento = document.getElementById("inputFuncionarioConsultarCadastroCriadoLocalNascimento");
    var inputFuncionarioConsultarCadastroCriadoEstadoCivil = document.getElementById("inputFuncionarioConsultarCadastroCriadoEstadoCivil");
    var inputFuncionarioConsultarCadastroCriadoSexo = document.getElementById("inputFuncionarioConsultarCadastroCriadoSexo");
    var inputFuncionarioConsultarCadastroCriadoNomePai = document.getElementById("inputFuncionarioConsultarCadastroCriadoNomePai");
    var inputFuncionarioConsultarCadastroCriadoTelefonePai = document.getElementById("inputFuncionarioConsultarCadastroCriadoTelefonePai");
    var inputFuncionarioConsultarCadastroCriadoNomeMae = document.getElementById("inputFuncionarioConsultarCadastroCriadoNomeMae");
    var inputFuncionarioConsultarCadastroCriadoTelefoneMae = document.getElementById("inputFuncionarioConsultarCadastroCriadoTelefoneMae");
    var inputFuncionarioConsultarCadastroCriadoTipoMedico = document.getElementById("inputFuncionarioConsultarCadastroCriadoTipoMedico");
    var inputFuncionarioConsultarCadastroCriadoSalaAtendimento = document.getElementById("inputFuncionarioConsultarCadastroCriadoSalaAtendimento");
    var inputFuncionarioConsultarCadastroCriadoSintomas = document.getElementById("inputFuncionarioConsultarCadastroCriadoSintomas");
    var inputFuncionarioConsultarCadastroCriadoAlergias = document.getElementById("inputFuncionarioConsultarCadastroCriadoAlergias");
    var inputFuncionarioConsultarCadastroCriadoDoencasCronicas = document.getElementById("inputFuncionarioConsultarCadastroCriadoDoencasCronicas");
    var inputFuncionarioConsultarCadastroCriadoRemediosControlados = document.getElementById("inputFuncionarioConsultarCadastroCriadoRemediosControlados");

    if(campoConsultarCadastroCPF == "85263149075"){    
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriadoMostrar";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        
        inputFuncionarioConsultarCadastroCriadoCPF.value = "852.631.490-75";
        inputFuncionarioConsultarCadastroCriadoProntuario.value = "26.7908";
        inputFuncionarioConsultarCadastroCriadoNomeCompleto.value = "JOAQUIM OLIVEIRA MONOEL QUEIROZ DA SILVA";
        inputFuncionarioConsultarCadastroCriadoTipoSaguineo.value = "O+";
        inputFuncionarioConsultarCadastroCriadoEmail.value = "joaquimroz@unigranrio.br";
        inputFuncionarioConsultarCadastroCriadoTelefone.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarCadastroCriadoCEP.value = "89.456-481";
        inputFuncionarioConsultarCadastroCriadoRua.value = "ESTRADA DA LIGAÇÃO";
        inputFuncionarioConsultarCadastroCriadoNumero.value = "500";
        inputFuncionarioConsultarCadastroCriadoComplemento.value = "LOTE:49 QUADRA:52";
        inputFuncionarioConsultarCadastroCriadoCidade.value = "BELFORD-ROXO";
        inputFuncionarioConsultarCadastroCriadoMunicipio.value = "RIO DE JANEIRO";
        inputFuncionarioConsultarCadastroCriadoPontoReferencia.value = "CIEP366";
        inputFuncionarioConsultarCadastroCriadoUF.value = "RJ";
        inputFuncionarioConsultarCadastroCriadoLocalNascimento.value = "JACAREPAGUÁ";
        inputFuncionarioConsultarCadastroCriadoEstadoCivil.value = "CASADO";
        inputFuncionarioConsultarCadastroCriadoSexo.value = "M";
        inputFuncionarioConsultarCadastroCriadoNomePai.value = "JÓSE ALBERTO DA SILVA";
        inputFuncionarioConsultarCadastroCriadoTelefonePai.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarCadastroCriadoNomeMae.value = "JOANA OLIVEIRA MONOEL QUEIROZ DA SILVA";
        inputFuncionarioConsultarCadastroCriadoTelefoneMae.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarCadastroCriadoTipoMedico.value = "ORTOPEDIA";
        inputFuncionarioConsultarCadastroCriadoSalaAtendimento.value = "A";
        inputFuncionarioConsultarCadastroCriadoSintomas.value = "DORES NOS PÉS";
        inputFuncionarioConsultarCadastroCriadoAlergias.value = "";
        inputFuncionarioConsultarCadastroCriadoDoencasCronicas.value = "DIABETE";
        inputFuncionarioConsultarCadastroCriadoRemediosControlados.value = "Jardiance 25mg, Ozempic 0,25mg";
    }
    else if(campoConsultarCadastroCPF == "01234567890"){    
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriadoMostrar";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        
        inputFuncionarioConsultarCadastroCriadoCPF.value = "012.345.678-90";
        inputFuncionarioConsultarCadastroCriadoProntuario.value = "26.7909";
        inputFuncionarioConsultarCadastroCriadoNomeCompleto.value = "BARBARA COSTA DE OLIVEIRA";
        inputFuncionarioConsultarCadastroCriadoTipoSaguineo.value = "O-";
        inputFuncionarioConsultarCadastroCriadoEmail.value = "barbinha123@unigranrio.br";
        inputFuncionarioConsultarCadastroCriadoTelefone.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarCadastroCriadoCEP.value = "89.456-481";
        inputFuncionarioConsultarCadastroCriadoRua.value = "ESTRADA DA LIGAÇÃO";
        inputFuncionarioConsultarCadastroCriadoNumero.value = "500";
        inputFuncionarioConsultarCadastroCriadoComplemento.value = "LOTE:49 QUADRA:52";
        inputFuncionarioConsultarCadastroCriadoCidade.value = "DUQUE DE CAXIAS";
        inputFuncionarioConsultarCadastroCriadoMunicipio.value = "RIO DE JANEIRO";
        inputFuncionarioConsultarCadastroCriadoPontoReferencia.value = "UNIGRANRIO";
        inputFuncionarioConsultarCadastroCriadoUF.value = "RJ";
        inputFuncionarioConsultarCadastroCriadoLocalNascimento.value = "JACAREPAGUÁ";
        inputFuncionarioConsultarCadastroCriadoEstadoCivil.value = "CASADO";
        inputFuncionarioConsultarCadastroCriadoSexo.value = "F";
        inputFuncionarioConsultarCadastroCriadoNomePai.value = "WALDIR DE OLIVEIRA";
        inputFuncionarioConsultarCadastroCriadoTelefonePai.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarCadastroCriadoNomeMae.value = "MAIRA COSTA DE OLIVEIRA";
        inputFuncionarioConsultarCadastroCriadoTelefoneMae.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarCadastroCriadoTipoMedico.value = "ORTOPEDIA";
        inputFuncionarioConsultarCadastroCriadoSalaAtendimento.value = "A";
        inputFuncionarioConsultarCadastroCriadoSintomas.value = "DORES ABDOMINAIS";
        inputFuncionarioConsultarCadastroCriadoAlergias.value = "";
        inputFuncionarioConsultarCadastroCriadoDoencasCronicas.value = "";
        inputFuncionarioConsultarCadastroCriadoRemediosControlados.value = "";
    }
}
function consultarCadastroCriado1(){
    var inputFuncionarioCadastrarPacienteCPF = document.getElementById("inputFuncionarioCadastrarPacienteCPF");

    var campoConsultarCadastroCPF = document.getElementById("campoConsultarCadastroCPF");
    let userValid = {
        inputFuncionarioCadastrarPacienteCPF: '', 
        inputFuncionarioCadastrarPacienteProntuario: '', 
        inputFuncionarioCadastrarPacienteNomeCompleto: '', 
        inputFuncionarioCadastrarPacienteTipoSaguineo: '', 
        inputFuncionarioCadastrarPacienteEmail: '', 
        inputFuncionarioCadastrarPacienteTelefone: '', 
        inputFuncionarioCadastrarPacienteCEP: '', 
        inputFuncionarioCadastrarPacienteRua: '', 
        inputFuncionarioCadastrarPacienteNumero: '', 
        inputFuncionarioCadastrarPacienteComplemento: '', 
        inputFuncionarioCadastrarPacienteCidade: '', 
        inputFuncionarioCadastrarPacienteMunicipio: '', 
        inputFuncionarioCadastrarPacientePontoReferencia: '', 
        inputFuncionarioCadastrarPacienteUF: '', 
        inputFuncionarioCadastrarPacienteLocalNascimento: '', 
        inputFuncionarioCadastrarPacienteEstadoCivil: '', 
        inputFuncionarioCadastrarPacienteSexo: '', 
        inputFuncionarioCadastrarPacienteNomePai: '', 
        inputFuncionarioCadastrarPacienteTelefonePai: '', 
        inputFuncionarioCadastrarPacienteNomeMae: '', 
        inputFuncionarioCadastrarPacienteTelefoneMae: '', 
        inputFuncionarioCadastrarPacienteTipoMedico: '', 
        inputFuncionarioCadastrarPacienteSalaAtendimento: '', 
        inputFuncionarioCadastrarPacienteSintomas: '', 
        inputFuncionarioCadastrarPacienteAlergias: '', 
        inputFuncionarioCadastrarPacienteDoencasCronicas: '', 
        inputFuncionarioCadastrarPacienteRemediosControlados: '',
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    listaUser.forEach((item) => {
        if(campoConsultarCadastroCPF.value == item.inputFuncionarioCadastrarPacienteCPF){
            userValid ={                
                inputFuncionarioCadastrarPacienteCPF: item.inputFuncionarioCadastrarPacienteCPF,
                inputFuncionarioCadastrarPacienteProntuario: item.inputFuncionarioCadastrarPacienteProntuario,
                inputFuncionarioCadastrarPacienteNomeCompleto: item.inputFuncionarioCadastrarPacienteNomeCompleto,
                inputFuncionarioCadastrarPacienteTipoSaguineo: item.inputFuncionarioCadastrarPacienteTipoSaguineo,
                inputFuncionarioCadastrarPacienteEmail: item.inputFuncionarioCadastrarPacienteEmail,
                inputFuncionarioCadastrarPacienteTelefone: item.inputFuncionarioCadastrarPacienteTelefone,
                inputFuncionarioCadastrarPacienteCEP: item.inputFuncionarioCadastrarPacienteCEP,
                inputFuncionarioCadastrarPacienteRua: item.inputFuncionarioCadastrarPacienteRua,
                inputFuncionarioCadastrarPacienteNumero: item.inputFuncionarioCadastrarPacienteNumero,
                inputFuncionarioCadastrarPacienteComplemento: item.inputFuncionarioCadastrarPacienteComplemento,
                inputFuncionarioCadastrarPacienteCidade: item.inputFuncionarioCadastrarPacienteCidade,
                inputFuncionarioCadastrarPacienteMunicipio: item.inputFuncionarioCadastrarPacienteMunicipio,
                inputFuncionarioCadastrarPacientePontoReferencia: item.inputFuncionarioCadastrarPacientePontoReferencia,
                inputFuncionarioCadastrarPacienteUF: item.inputFuncionarioCadastrarPacienteUF,
                inputFuncionarioCadastrarPacienteLocalNascimento: item.inputFuncionarioCadastrarPacienteLocalNascimento,
                inputFuncionarioCadastrarPacienteEstadoCivil: item.inputFuncionarioCadastrarPacienteEstadoCivil,
                inputFuncionarioCadastrarPacienteSexo: item.inputFuncionarioCadastrarPacienteSexo,
                inputFuncionarioCadastrarPacienteNomePai: item.inputFuncionarioCadastrarPacienteNomePai,
                inputFuncionarioCadastrarPacienteTelefonePai: item.inputFuncionarioCadastrarPacienteTelefonePai,
                inputFuncionarioCadastrarPacienteNomeMae: item.inputFuncionarioCadastrarPacienteNomeMae,
                inputFuncionarioCadastrarPacienteTelefoneMae: item.inputFuncionarioCadastrarPacienteTelefoneMae,
                inputFuncionarioCadastrarPacienteTipoMedico: item.inputFuncionarioCadastrarPacienteTipoMedico,
                inputFuncionarioCadastrarPacienteSalaAtendimento: item.inputFuncionarioCadastrarPacienteSalaAtendimento,
                inputFuncionarioCadastrarPacienteSintomas: item.inputFuncionarioCadastrarPacienteSintomas,
                inputFuncionarioCadastrarPacienteAlergias: item.inputFuncionarioCadastrarPacienteAlergias,
                inputFuncionarioCadastrarPacienteDoencasCronicas: item.inputFuncionarioCadastrarPacienteDoencasCronicas,
                inputFuncionarioCadastrarPacienteRemediosControlados: item.inputFuncionarioCadastrarPacienteRemediosControlados,

            }
        }
    })
    if(inputFuncionarioCadastrarPacienteCPF.value == userValid.inputFuncionarioCadastrarPacienteCPF){
       alert('deu certo!') 
    }
    else{
        alert('erro!')
    }
}

function menuCadastrarPaciente(){
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");
    
    title.innerHTML = "TBMGN | Cadastrar Paciente";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Cadastrar Paciente";

    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    var  consultarHistorico = document.getElementById("consultarHistorico");
    var funcionarioConsultarHistoricoDetalhes = document.getElementById("funcionarioConsultarHistoricoDetalhes");


    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario");

    var x = window.screen.width;
    if(x <= "750"){
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPacienteMostrar";
        consultarHistorico.className = "consultarHistorico";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    
        menuAcessoFuncionario.className = "menuAcessoFuncionarioFecharMenu";
        acessoFuncionario.className = "acessoFuncionarioFecharMenu";
        topoAcessoFuncionario.className = "topoAcessoFuncionario";
    }
    else{
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPacienteMostrar";
        consultarHistorico.className = "consultarHistorico";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    }
}
function cadastrarPacienteCriado1(){
    var inputFuncionarioCadastrarPacienteCPF = document.getElementById("inputFuncionarioCadastrarPacienteCPF");
    var inputFuncionarioCadastrarPacienteProntuario = document.getElementById("inputFuncionarioCadastrarPacienteProntuario");
    var inputFuncionarioCadastrarPacienteNomeCompleto = document.getElementById("inputFuncionarioCadastrarPacienteNomeCompleto");
    var inputFuncionarioCadastrarPacienteTipoSaguineo = document.getElementById("inputFuncionarioCadastrarPacienteTipoSaguineo");
    var inputFuncionarioCadastrarPacienteEmail = document.getElementById("inputFuncionarioCadastrarPacienteEmail");
    var inputFuncionarioCadastrarPacienteTelefone = document.getElementById("inputFuncionarioCadastrarPacienteTelefone");
    var inputFuncionarioCadastrarPacienteCEP = document.getElementById("inputFuncionarioCadastrarPacienteCEP");
    var inputFuncionarioCadastrarPacienteRua = document.getElementById("inputFuncionarioCadastrarPacienteRua");
    var inputFuncionarioCadastrarPacienteNumero = document.getElementById("inputFuncionarioCadastrarPacienteNumero");
    var inputFuncionarioCadastrarPacienteComplemento = document.getElementById("inputFuncionarioCadastrarPacienteComplemento");
    var inputFuncionarioCadastrarPacienteCidade = document.getElementById("inputFuncionarioCadastrarPacienteCidade");
    var inputFuncionarioCadastrarPacienteMunicipio = document.getElementById("inputFuncionarioCadastrarPacienteMunicipio");
    var inputFuncionarioCadastrarPacientePontoReferencia = document.getElementById("inputFuncionarioCadastrarPacientePontoReferencia");
    var inputFuncionarioCadastrarPacienteUF = document.getElementById("inputFuncionarioCadastrarPacienteUF");
    var inputFuncionarioCadastrarPacienteLocalNascimento = document.getElementById("inputFuncionarioCadastrarPacienteLocalNascimento");
    var inputFuncionarioCadastrarPacienteEstadoCivil = document.getElementById("inputFuncionarioCadastrarPacienteEstadoCivil");
    var inputFuncionarioCadastrarPacienteSexo = document.getElementById("inputFuncionarioCadastrarPacienteSexo");
    var inputFuncionarioCadastrarPacienteNomePai = document.getElementById("inputFuncionarioCadastrarPacienteNomePai");
    var inputFuncionarioCadastrarPacienteTelefonePai = document.getElementById("inputFuncionarioCadastrarPacienteTelefonePai");
    var inputFuncionarioCadastrarPacienteNomeMae = document.getElementById("inputFuncionarioCadastrarPacienteNomeMae");
    var inputFuncionarioCadastrarPacienteTelefoneMae = document.getElementById("inputFuncionarioCadastrarPacienteTelefoneMae");
    var inputFuncionarioCadastrarPacienteTipoMedico = document.getElementById("inputFuncionarioCadastrarPacienteTipoMedico");
    var inputFuncionarioCadastrarPacienteSalaAtendimento = document.getElementById("inputFuncionarioCadastrarPacienteSalaAtendimento");
    var inputFuncionarioCadastrarPacienteSintomas = document.getElementById("inputFuncionarioCadastrarPacienteSintomas");
    var inputFuncionarioCadastrarPacienteAlergias = document.getElementById("inputFuncionarioCadastrarPacienteAlergias");
    var inputFuncionarioCadastrarPacienteDoencasCronicas = document.getElementById("inputFuncionarioCadastrarPacienteDoencasCronicas");
    var inputFuncionarioCadastrarPacienteRemediosControlados = document.getElementById("inputFuncionarioCadastrarPacienteRemediosControlados");

    if(inputFuncionarioCadastrarPacienteCPF.value == ""){
        alert('Verificar dados do paciente!');
    }    
    else{
        let listaUser = JSON.parse(localStorage.getItem('ListaUser') || '[]');

        listaUser.push(
            {
                inputFuncionarioCadastrarPacienteCPF: inputFuncionarioCadastrarPacienteCPF.value, 
                inputFuncionarioCadastrarPacienteProntuario: inputFuncionarioCadastrarPacienteProntuario.value, 
                inputFuncionarioCadastrarPacienteNomeCompleto: inputFuncionarioCadastrarPacienteNomeCompleto.value, 
                inputFuncionarioCadastrarPacienteTipoSaguineo: inputFuncionarioCadastrarPacienteTipoSaguineo.value, 
                inputFuncionarioCadastrarPacienteEmail: inputFuncionarioCadastrarPacienteEmail.value, 
                inputFuncionarioCadastrarPacienteTelefone: inputFuncionarioCadastrarPacienteTelefone.value, 
                inputFuncionarioCadastrarPacienteCEP: inputFuncionarioCadastrarPacienteCEP.value, 
                inputFuncionarioCadastrarPacienteRua: inputFuncionarioCadastrarPacienteRua.value, 
                inputFuncionarioCadastrarPacienteNumero: inputFuncionarioCadastrarPacienteNumero.value, 
                inputFuncionarioCadastrarPacienteComplemento: inputFuncionarioCadastrarPacienteComplemento.value, 
                inputFuncionarioCadastrarPacienteCidade: inputFuncionarioCadastrarPacienteCidade.value, 
                inputFuncionarioCadastrarPacienteMunicipio: inputFuncionarioCadastrarPacienteMunicipio.value, 
                inputFuncionarioCadastrarPacientePontoReferencia: inputFuncionarioCadastrarPacientePontoReferencia.value, 
                inputFuncionarioCadastrarPacienteUF: inputFuncionarioCadastrarPacienteUF.value, 
                inputFuncionarioCadastrarPacienteLocalNascimento: inputFuncionarioCadastrarPacienteLocalNascimento.value, 
                inputFuncionarioCadastrarPacienteEstadoCivil: inputFuncionarioCadastrarPacienteEstadoCivil.value, 
                inputFuncionarioCadastrarPacienteSexo: inputFuncionarioCadastrarPacienteSexo.value, 
                inputFuncionarioCadastrarPacienteNomePai: inputFuncionarioCadastrarPacienteNomePai.value, 
                inputFuncionarioCadastrarPacienteTelefonePai: inputFuncionarioCadastrarPacienteTelefonePai.value, 
                inputFuncionarioCadastrarPacienteNomeMae: inputFuncionarioCadastrarPacienteNomeMae.value, 
                inputFuncionarioCadastrarPacienteTelefoneMae: inputFuncionarioCadastrarPacienteTelefoneMae.value, 
                inputFuncionarioCadastrarPacienteTipoMedico: inputFuncionarioCadastrarPacienteTipoMedico.value, 
                inputFuncionarioCadastrarPacienteSalaAtendimento: inputFuncionarioCadastrarPacienteSalaAtendimento.value, 
                inputFuncionarioCadastrarPacienteSintomas: inputFuncionarioCadastrarPacienteSintomas.value, 
                inputFuncionarioCadastrarPacienteAlergias: inputFuncionarioCadastrarPacienteAlergias.value, 
                inputFuncionarioCadastrarPacienteDoencasCronicas: inputFuncionarioCadastrarPacienteDoencasCronicas.value, 
                inputFuncionarioCadastrarPacienteRemediosControlados: inputFuncionarioCadastrarPacienteRemediosControlados.value, 

            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        inputFuncionarioCadastrarPacienteCPF.value = ""

        
        alert('Paciente Cadastrado com sucesso!');
    }
}


function menuConsultarHistorico(){    
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");

    title.innerHTML = "TBMGN | Consultar Historico";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Consultar Historico";

    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    var  consultarHistorico = document.getElementById("consultarHistorico");
    var funcionarioConsultarHistoricoDetalhes = document.getElementById("funcionarioConsultarHistoricoDetalhes");

    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario");

    var x = window.screen.width;
    if(x <= "750"){
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPacienteMostrar";
        consultarHistorico.className = "consultarHistorico";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    
        menuAcessoFuncionario.className = "menuAcessoFuncionarioFecharMenu";
        acessoFuncionario.className = "acessoFuncionarioFecharMenu";
        topoAcessoFuncionario.className = "topoAcessoFuncionario";
    }
    else{
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        consultarHistorico.className = "consultarHistoricoMostrar";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    }
}
function consultarHistorico(){
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");

    title.innerHTML = "TBMGN | Consultar Historico";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Consultar Historico";
    
    var campoConsultarHistoricoCPF = document.getElementById("campoConsultarHistoricoCPF").value;
    
    var consultarHistorico = document.getElementById("consultarHistorico");
    var funcionarioConsultarHistoricoDetalhes = document.getElementById("funcionarioConsultarHistoricoDetalhes");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");

    var inputFuncionarioConsultarHistoricoDetalhesCPF = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesCPF");
    var inputFuncionarioConsultarHistoricoDetalhesProntuario = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesProntuario");
    var inputFuncionarioConsultarHistoricoDetalhesNomeCompleto = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesNomeCompleto");
    var inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo");
    var inputFuncionarioConsultarHistoricoDetalhesEmail = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesEmail");
    var inputFuncionarioConsultarHistoricoDetalhesTelefone = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTelefone");
    var inputFuncionarioConsultarHistoricoDetalhesCEP = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesCEP");
    var inputFuncionarioConsultarHistoricoDetalhesRua = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesRua");
    var inputFuncionarioConsultarHistoricoDetalhesNumero = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesNumero");
    var inputFuncionarioConsultarHistoricoDetalhesComplemento = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesComplemento");
    var inputFuncionarioConsultarHistoricoDetalhesCidade = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesCidade");
    var inputFuncionarioConsultarHistoricoDetalhesMunicipio = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesMunicipio");
    var inputFuncionarioConsultarHistoricoDetalhesPontoReferencia = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesPontoReferencia");
    var inputFuncionarioConsultarHistoricoDetalhesUF = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesUF");
    var inputFuncionarioConsultarHistoricoDetalhesLocalNascimento = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesLocalNascimento");
    var inputFuncionarioConsultarHistoricoDetalhesEstadoCivil = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesEstadoCivil");
    var inputFuncionarioConsultarHistoricoDetalhesSexo = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesSexo");
    var inputFuncionarioConsultarHistoricoDetalhesNomePai = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesNomePai");
    var inputFuncionarioConsultarHistoricoDetalhesTelefonePai = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTelefonePai");
    var inputFuncionarioConsultarHistoricoDetalhesNomeMae = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesNomeMae");
    var inputFuncionarioConsultarHistoricoDetalhesTelefoneMae = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTelefoneMae");
    var inputFuncionarioConsultarHistoricoDetalhesTipoMedico = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTipoMedico");
    var inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento");
    var inputFuncionarioConsultarHistoricoDetalhesSintomas = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesSintomas");
    var inputFuncionarioConsultarHistoricoDetalhesAlergias = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesAlergias");
    var inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas");
    var inputFuncionarioConsultarHistoricoDetalhesRemediosControlados = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesRemediosControlados");

    if(campoConsultarHistoricoCPF == "85263149075"){    
        consultarHistorico.className = "consultarHistoricoOcultar";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhesMostrar";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        
        inputFuncionarioConsultarHistoricoDetalhesCPF.value = "852.631.490-75";
        inputFuncionarioConsultarHistoricoDetalhesProntuario.value = "26.7908";
        inputFuncionarioConsultarHistoricoDetalhesNomeCompleto.value = "JOAQUIM OLIVEIRA MONOEL QUEIROZ DA SILVA";
        inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo.value = "O+";
        inputFuncionarioConsultarHistoricoDetalhesEmail.value = "joaquimroz@unigranrio.br";
        inputFuncionarioConsultarHistoricoDetalhesTelefone.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarHistoricoDetalhesCEP.value = "89.456-481";
        inputFuncionarioConsultarHistoricoDetalhesRua.value = "ESTRADA DA LIGAÇÃO";
        inputFuncionarioConsultarHistoricoDetalhesNumero.value = "500";
        inputFuncionarioConsultarHistoricoDetalhesComplemento.value = "LOTE:49 QUADRA:52";
        inputFuncionarioConsultarHistoricoDetalhesCidade.value = "BELFORD-ROXO";
        inputFuncionarioConsultarHistoricoDetalhesMunicipio.value = "RIO DE JANEIRO";
        inputFuncionarioConsultarHistoricoDetalhesPontoReferencia.value = "CIEP366";
        inputFuncionarioConsultarHistoricoDetalhesUF.value = "RJ";
        inputFuncionarioConsultarHistoricoDetalhesLocalNascimento.value = "JACAREPAGUÁ";
        inputFuncionarioConsultarHistoricoDetalhesEstadoCivil.value = "CASADO";
        inputFuncionarioConsultarHistoricoDetalhesSexo.value = "M";
        inputFuncionarioConsultarHistoricoDetalhesNomePai.value = "JÓSE ALBERTO DA SILVA";
        inputFuncionarioConsultarHistoricoDetalhesTelefonePai.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarHistoricoDetalhesNomeMae.value = "JOANA OLIVEIRA MONOEL QUEIROZ DA SILVA";
        inputFuncionarioConsultarHistoricoDetalhesTelefoneMae.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarHistoricoDetalhesTipoMedico.value = "ORTOPEDIA";
        inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento.value = "A";
        inputFuncionarioConsultarHistoricoDetalhesSintomas.value = "DORES NOS PÉS";
        inputFuncionarioConsultarHistoricoDetalhesAlergias.value = "";
        inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas.value = "DIABETE";
        inputFuncionarioConsultarHistoricoDetalhesRemediosControlados.value = "Jardiance 25mg, Ozempic 0,25mg";
    }
    else if(campoConsultarHistoricoCPF == "01234567890"){    
        consultarHistorico.className = "consultarHistoricoOcultar";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhesMostrar";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        
        inputFuncionarioConsultarHistoricoDetalhesCPF.value = "012.345.678-90";
        inputFuncionarioConsultarHistoricoDetalhesProntuario.value = "26.7909";
        inputFuncionarioConsultarHistoricoDetalhesNomeCompleto.value = "BARBARA COSTA DE OLIVEIRA";
        inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo.value = "O-";
        inputFuncionarioConsultarHistoricoDetalhesEmail.value = "barbinha123@unigranrio.br";
        inputFuncionarioConsultarHistoricoDetalhesTelefone.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarHistoricoDetalhesCEP.value = "89.456-481";
        inputFuncionarioConsultarHistoricoDetalhesRua.value = "ESTRADA DA LIGAÇÃO";
        inputFuncionarioConsultarHistoricoDetalhesNumero.value = "500";
        inputFuncionarioConsultarHistoricoDetalhesComplemento.value = "LOTE:49 QUADRA:52";
        inputFuncionarioConsultarHistoricoDetalhesCidade.value = "DUQUE DE CAXIAS";
        inputFuncionarioConsultarHistoricoDetalhesMunicipio.value = "RIO DE JANEIRO";
        inputFuncionarioConsultarHistoricoDetalhesPontoReferencia.value = "UNIGRANRIO";
        inputFuncionarioConsultarHistoricoDetalhesUF.value = "RJ";
        inputFuncionarioConsultarHistoricoDetalhesLocalNascimento.value = "JACAREPAGUÁ";
        inputFuncionarioConsultarHistoricoDetalhesEstadoCivil.value = "CASADO";
        inputFuncionarioConsultarHistoricoDetalhesSexo.value = "F";
        inputFuncionarioConsultarHistoricoDetalhesNomePai.value = "WALDIR DE OLIVEIRA";
        inputFuncionarioConsultarHistoricoDetalhesTelefonePai.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarHistoricoDetalhesNomeMae.value = "MAIRA COSTA DE OLIVEIRA";
        inputFuncionarioConsultarHistoricoDetalhesTelefoneMae.value = "(21) 9 9548-6280";
        inputFuncionarioConsultarHistoricoDetalhesTipoMedico.value = "ORTOPEDIA";
        inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento.value = "A";
        inputFuncionarioConsultarHistoricoDetalhesSintomas.value = "DORES ABDOMINAIS";
        inputFuncionarioConsultarHistoricoDetalhesAlergias.value = "";
        inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas.value = "";
        inputFuncionarioConsultarHistoricoDetalhesRemediosControlados.value = "";
    }
}



/* Travar F5 para rerarregar */
window.addEventListener('keydown', function (e) {
    var code = e.which || e.keyCode;
    if (code == 116) e.preventDefault();
    else return true;
    // fazer algo aqui para quando a tecla F5 for premida
});