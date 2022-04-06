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
    var imagemFuncionario = document.getElementById("imagemFuncionario");
    
    var menuCadastrarPaciente = document.getElementById("menuCadastrarPaciente");
    var menuCriarFichaAtendimento = document.getElementById("menuCriarFichaAtendimento");


    if(campoAutenticacaoUsuario == "589045" && campoAutenticacaoSenha == "589045"){
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";

        title.innerHTML = "SIDADUS | Funcionário";
        body.className = "fundoBranco";

        imagemFuncionario.src = "img/ICONE/589045.png";
        nomeAcessoFuncionarioNome.innerHTML = "Jeniffer Lopez";
        nomeAcessoFuncionarioMatricula.innerHTML = "589045";
        nomeAcessoFuncionarioFuncao.innerHTML = "Recepcionista";
    }
    else if(campoAutenticacaoUsuario == "12345" && campoAutenticacaoSenha == "12345"){
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        autenticacao.className = "autenticacaoOcultar";

        title.innerHTML = "SIDADUS | Funcionário";
        body.className = "fundoBranco";

        imagemFuncionario.src = "img/ICONE/12345.png";
        nomeAcessoFuncionarioNome.innerHTML = "Mauricio Cortez";
        nomeAcessoFuncionarioMatricula.innerHTML = "12345";
        nomeAcessoFuncionarioFuncao.innerHTML = "Doutor";

        menuCadastrarPaciente.style.display = "none";
        menuCriarFichaAtendimento.style.display = "none";
    }
    
    var botaoHamburguer = document.getElementById("botaoHamburguer");

    var x = window.screen.width;
    if(x <= "750"){
        botaoHamburguer.innerHTML = "menu"
    }
}


function esqueceuSenha(){
    var title = document.getElementById("title");
    
    var autenticacao = document.getElementById("autenticacao");
    var esqueceuSenha = document.getElementById("esqueceuSenha");

    
    title.innerHTML = "SIDADUS | Esqueceu senha";
    
    autenticacao.className = "autenticacaoOcultar";
    esqueceuSenha.className = "esqueceuSenhaMostrar";

}


function menuHamburguer(){
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario");

    var str = document.getElementById("botaoHamburguer").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];

    var x = window.screen.width;
    if(x <= "750" && res=="menu"){
        menuAcessoFuncionario.className = "menuAcessoFuncionarioAbrir";
        acessoFuncionario.className = "acessoFuncionarioAbrir";
        topoAcessoFuncionario.className = "topoAcessoFuncionarioAbrir";

        botaoHamburguer.className = "material-icons botaoClose";
        botaoHamburguer.innerHTML = "close";
    }
    else if(x <= "750" && res=="menu_open"){
        menuAcessoFuncionario.className = "menuAcessoFuncionarioAbrir";
        acessoFuncionario.className = "acessoFuncionarioAbrir";
        topoAcessoFuncionario.className = "topoAcessoFuncionarioAbrir";

        botaoHamburguer.className = "material-icons botaoClose";
        botaoHamburguer.innerHTML = "close";
    }
    else if(x <= "750" && res=="close"){
        menuAcessoFuncionario.className = "menuAcessoFuncionario";
        acessoFuncionario.className = "acessoFuncionarioMostar";
        topoAcessoFuncionario.className = "topoAcessoFuncionario";

        botaoHamburguer.className = "material-icons botaoHamburguer";
        botaoHamburguer.innerHTML = "menu";
    }
    else if(x >= "751" && res=="menu_open"){
        menuAcessoFuncionario.className = "menuAcessoFuncionario";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        topoAcessoFuncionario.className = "topoAcessoFuncionario";
        
        botaoHamburguer.className = "material-icons botaoClose";
        botaoHamburguer.innerHTML = "close";
    }
    else if(x >= "751" && res=="menu"){
        menuAcessoFuncionario.className = "menuAcessoFuncionario";
        acessoFuncionario.className = "acessoFuncionarioMostrar";
        topoAcessoFuncionario.className = "topoAcessoFuncionario";
        
        botaoHamburguer.className = "material-icons botaoClose";
        botaoHamburguer.innerHTML = "close";
    }
    else if(x >= "751" && res=="close"){
        menuAcessoFuncionario.className = "menuAcessoFuncionarioOcultar";
        acessoFuncionario.className = "acessoFuncionarioFecharMenu";
        topoAcessoFuncionario.className = "topoAcessoFuncionarioFechar";
        
        botaoHamburguer.className = "material-icons botaoHamburguer";
        botaoHamburguer.innerHTML = "menu";
    }
}
function menuHamburguerOver(){
    var str = document.getElementById("botaoHamburguer").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if(res=="menu"){        
        botaoHamburguer.innerHTML = "menu_open";
    }
}
function menuHamburguerOut(){
    var str = document.getElementById("botaoHamburguer").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];

    if(res=="menu_open"){        
        botaoHamburguer.innerHTML = "menu";
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

    title.innerHTML = "SIDADUS | Consultar Cadastro";
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

    title.innerHTML = "SIDADUS | Consultar Cadastro";
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

    if(campoConsultarCadastroCPF.value == "85263149075"){    
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriadoMostrar";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        
        inputFuncionarioConsultarCadastroCriadoCPF.value = "852.631.490-75";
        inputFuncionarioConsultarCadastroCriadoProntuario.value = "12.3456";
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
    else if(campoConsultarCadastroCPF == "12345678900"){    
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriadoMostrar";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        
        inputFuncionarioConsultarCadastroCriadoCPF.value = "123.456.789-00";
        inputFuncionarioConsultarCadastroCriadoProntuario.value = "12.3456";
        inputFuncionarioConsultarCadastroCriadoNomeCompleto.value = "Juan da Silva";
        inputFuncionarioConsultarCadastroCriadoTipoSaguineo.value = "O-";
        inputFuncionarioConsultarCadastroCriadoEmail.value = "juan123@unigranrio.br";
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
        inputFuncionarioConsultarCadastroCriadoTipoMedico.value = "CARDIOLOGIA";
        inputFuncionarioConsultarCadastroCriadoSalaAtendimento.value = "02";
        inputFuncionarioConsultarCadastroCriadoSintomas.value = "DORES NO PEITO";
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
    
    title.innerHTML = "SIDADUS | Cadastrar Paciente";
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

    title.innerHTML = "SIDADUS | Consultar Historico";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Consultar Historico";

    var consultarCadastro = document.getElementById("consultarCadastro");
    var funcionarioConsultarCadastroCriado = document.getElementById("funcionarioConsultarCadastroCriado");
    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");
    var consultarHistorico = document.getElementById("consultarHistorico");
    var conteudoConsultarHistorico = document.getElementById("conteudoConsultarHistorico");
    var conteudoConsultarHistoricoDetalhes = document.getElementById("conteudoConsultarHistoricoDetalhes");
    var funcionarioConsultarHistoricoDetalhes = document.getElementById("funcionarioConsultarHistoricoDetalhes");

    var acessoFuncionario = document.getElementById("acessoFuncionario");
    var menuAcessoFuncionario = document.getElementById("menuAcessoFuncionario");
    var topoAcessoFuncionario = document.getElementById("topoAcessoFuncionario");

    var x = window.screen.width;
    if(x <= "750"){
        consultarCadastro.className = "consultarCadastroOcultar";
        funcionarioConsultarCadastroCriado.className = "funcionarioConsultarCadastroCriado";
        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
        consultarHistorico.className = "consultarHistoricoMostrar";
        conteudoConsultarHistorico.className = "conteudoConsultarHistorico";
        conteudoConsultarHistoricoDetalhes.className = "conteudoConsultarHistoricoDetalhes";
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
        conteudoConsultarHistorico.className = "conteudoConsultarHistorico";
        conteudoConsultarHistoricoDetalhes.className = "conteudoConsultarHistoricoDetalhes";
        funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhes";
    }
}
function consultarHistorico(){
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");

    title.innerHTML = "SIDADUS | Histórico do Paciente";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Histórico do Paciente";
    
    var campoConsultarHistoricoCPF = document.getElementById("campoConsultarHistoricoCPF").value;
    var conteudoConsultarHistoricoDetalhes = document.getElementById("conteudoConsultarHistoricoDetalhes");
    /* var conteudoConsultarHistorico = document.getElementById("conteudoConsultarHistorico"); */

    var nomeHistoricoDetalhesNome = document.getElementsByClassName("nomeHistoricoDetalhesNome");
    var nomeHistoricoDetalhesCPF = document.getElementsByClassName("nomeHistoricoDetalhesCPF");
    var nomeHistoricoDetalhesFuncao = document.getElementsByClassName("nomeHistoricoDetalhesFuncao");
    var imagemHistoricoDetalhes = document.getElementsByClassName("imagemHistoricoDetalhes");
    var i;

    var funcionarioCadastrarPaciente = document.getElementById("funcionarioCadastrarPaciente");

    if(campoConsultarHistoricoCPF == "12345678900"){
        conteudoConsultarHistoricoDetalhes.className = "conteudoConsultarHistoricoDetalhesMostrar";
        /* conteudoConsultarHistorico.className = "conteudoConsultarHistoricoOcultar"; */

        for (i=0; i< nomeHistoricoDetalhesNome.length; i++)
        nomeHistoricoDetalhesNome[i].innerHTML = "Juan da Silva";
        for (i=0; i< nomeHistoricoDetalhesCPF.length; i++)
        nomeHistoricoDetalhesCPF[i].innerHTML = "123.456.789-00";
        for (i=0; i< nomeHistoricoDetalhesFuncao.length; i++)
        nomeHistoricoDetalhesFuncao[i].innerHTML = "Engenheiro";
        for (i=0; i< imagemHistoricoDetalhes.length; i++)
        imagemHistoricoDetalhes[i].src = "img/ICONE/12345678900.png";

        funcionarioCadastrarPaciente.className = "funcionarioCadastrarPaciente";
    }

}

function consultarHistoricoDetalhes(){
    var title = document.getElementById("title");
    var nomeTituloTopoAcessoFuncionario = document.getElementById("nomeTituloTopoAcessoFuncionario");

    title.innerHTML = "SIDADUS | Consulta Completa";
    nomeTituloTopoAcessoFuncionario.innerHTML = "Consulta Completa";

    var conteudoConsultarHistorico = document.getElementById("conteudoConsultarHistorico");
    var conteudoConsultarHistoricoDetalhes = document.getElementById("conteudoConsultarHistoricoDetalhes");
    var funcionarioConsultarHistoricoDetalhes = document.getElementById("funcionarioConsultarHistoricoDetalhes");

    conteudoConsultarHistorico.className = "conteudoConsultarHistoricoOcultar";
    conteudoConsultarHistoricoDetalhes.className = "conteudoConsultarHistoricoDetalhes";
    funcionarioConsultarHistoricoDetalhes.className = "funcionarioConsultarHistoricoDetalhesMostrar";
    
}

var inputFuncionarioConsultarHistoricoDetalhesProntuario = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesProntuario");
var inputFuncionarioConsultarHistoricoDetalhesDataAtendimento = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesDataAtendimento");
var inputFuncionarioConsultarHistoricoDetalhesHorario = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesHorario");
var inputFuncionarioConsultarHistoricoDetalhesTelefoneContato = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTelefoneContato");
var inputFuncionarioConsultarHistoricoDetalhesNomeCompleto = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesNomeCompleto");
var inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo");
var inputFuncionarioConsultarHistoricoDetalhesLocalNascimento = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesLocalNascimento");
var inputFuncionarioConsultarHistoricoDetalhesSexo = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesSexo");
var inputFuncionarioConsultarHistoricoDetalhesIdade = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesIdade");
var inputFuncionarioConsultarHistoricoDetalhesTipoMedico = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesTipoMedico");
var inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento");
var inputFuncionarioConsultarHistoricoDetalhesNomeMedico = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesNomeMedico");
var inputFuncionarioConsultarHistoricoDetalhesCRM = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesCRM");
var inputFuncionarioConsultarHistoricoDetalhesAlergias = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesAlergias");
var inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas");
var inputFuncionarioConsultarHistoricoDetalhesRemediosControlados = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesRemediosControlados");
var inputFuncionarioConsultarHistoricoDetalhesSintomas = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesSintomas");
var inputFuncionarioConsultarHistoricoDetalhesObservacoesMedicas = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesObservacoesMedicas");
var inputFuncionarioConsultarHistoricoDetalhesExamesSolicitados = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesExamesSolicitados");
var inputFuncionarioConsultarHistoricoDetalhesMedicamentosReceitados = document.getElementById("inputFuncionarioConsultarHistoricoDetalhesMedicamentosReceitados");




$('#historicoDetalhes1234567890001032022 #botaoConsultarHistoricoDetalhes').click(function(){
    inputFuncionarioConsultarHistoricoDetalhesProntuario.value = "12.3456";
    inputFuncionarioConsultarHistoricoDetalhesDataAtendimento.value = "01/03/2022";
    inputFuncionarioConsultarHistoricoDetalhesHorario.value = "15:40";
    inputFuncionarioConsultarHistoricoDetalhesTelefoneContato.value = "(21) 9 9548-6280";
    inputFuncionarioConsultarHistoricoDetalhesNomeCompleto.value = "Juan da Silva";
    inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo.value = "O+";
    inputFuncionarioConsultarHistoricoDetalhesLocalNascimento.value = "JACAREPAGUÁ";
    inputFuncionarioConsultarHistoricoDetalhesSexo.value = "M";
    inputFuncionarioConsultarHistoricoDetalhesIdade.value = "40";
    inputFuncionarioConsultarHistoricoDetalhesTipoMedico.value = "CARDIOLOGIA";
    inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento.value = "02";
    inputFuncionarioConsultarHistoricoDetalhesNomeMedico.value = "Roberto Kail Filho";
    inputFuncionarioConsultarHistoricoDetalhesCRM.value = "52788-SP";
    inputFuncionarioConsultarHistoricoDetalhesAlergias.value = "";
    inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas.value = "";
    inputFuncionarioConsultarHistoricoDetalhesRemediosControlados.value = "";
    inputFuncionarioConsultarHistoricoDetalhesSintomas.value = "dores no peito";
    inputFuncionarioConsultarHistoricoDetalhesObservacoesMedicas.value = "Elevamento dos batimentos cardiacos";
    inputFuncionarioConsultarHistoricoDetalhesExamesSolicitados.value = "";
    inputFuncionarioConsultarHistoricoDetalhesMedicamentosReceitados.value = "PROPRANOLOL 25mg 1x dia";
});
$('#historicoDetalhes1234567890010012022 #botaoConsultarHistoricoDetalhes').click(function(){
    inputFuncionarioConsultarHistoricoDetalhesProntuario.value = "12.3456";
    inputFuncionarioConsultarHistoricoDetalhesDataAtendimento.value = "10/01/2022";
    inputFuncionarioConsultarHistoricoDetalhesHorario.value = "10:00";
    inputFuncionarioConsultarHistoricoDetalhesTelefoneContato.value = "(21) 9 9548-6280";
    inputFuncionarioConsultarHistoricoDetalhesNomeCompleto.value = "Juan da Silva";
    inputFuncionarioConsultarHistoricoDetalhesTipoSaguineo.value = "O+";
    inputFuncionarioConsultarHistoricoDetalhesLocalNascimento.value = "JACAREPAGUÁ";
    inputFuncionarioConsultarHistoricoDetalhesSexo.value = "M";
    inputFuncionarioConsultarHistoricoDetalhesIdade.value = "40";
    inputFuncionarioConsultarHistoricoDetalhesTipoMedico.value = "CARDIOLOGIA";
    inputFuncionarioConsultarHistoricoDetalhesSalaAtendimento.value = "05";
    inputFuncionarioConsultarHistoricoDetalhesNomeMedico.value = "Abel Pereira";
    inputFuncionarioConsultarHistoricoDetalhesCRM.value = "13869-SP";
    inputFuncionarioConsultarHistoricoDetalhesAlergias.value = "";
    inputFuncionarioConsultarHistoricoDetalhesDoencasCronicas.value = "";
    inputFuncionarioConsultarHistoricoDetalhesRemediosControlados.value = "";
    inputFuncionarioConsultarHistoricoDetalhesSintomas.value = "dores no peito";
    inputFuncionarioConsultarHistoricoDetalhesObservacoesMedicas.value = "";
    inputFuncionarioConsultarHistoricoDetalhesExamesSolicitados.value = "Eletrocardiograma";
    inputFuncionarioConsultarHistoricoDetalhesMedicamentosReceitados.value = "";
});

function consultarHistoricoCriado(){
    window.print();

    var body = document.getElementById("body");

    body.style.webkitPrintColorAdjust = "exact"


}


/* Travar F5 para rerarregar */
window.addEventListener('keydown', function (e) {
    var code = e.which || e.keyCode;
    if (code == 116) e.preventDefault();
    else return true;
    // fazer algo aqui para quando a tecla F5 for premida
});