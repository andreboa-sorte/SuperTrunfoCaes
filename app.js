var pitBull = {
    nome: "Pit Bull",
    imagem:"https://static1.patasdacasa.com.br/articles/1/27/01/@/11446-confira-a-lista-com-150-nomes-para-cacho-articles_media_mobile-2.jpg",
    atributos:{
      PesoKg:27,
      Agilidade:9,
      Obediencia:10 
    }
  }
  
  var labrador = {
    nome: "Labrador",
    imagem:"https://lh3.googleusercontent.com/proxy/B6mUOiZObJt6tGPVWjXcbxNaaUJRHK4ua1zcuaklrDbSExyxV8UAg_71L2z_0zPftwaKTwSLYy4hmL_CAP_xCy4PfHlNuUBh7vkv7pS4H1gRSjUc_90QQw",
    atributos:{
      Peso_Kg:57,
      Agilidade:3,
      Obediencia:9
    }
  }
  
  var pastorAlemao = {
    nome: "Pastor Alemão", 
    imagem:"https://www.petlove.com.br/images/breeds/193103/profile/original/pastor_alemao-p.jpg?1532539270",
    atributos:{
      Peso_Kg:42,
      Agilidade:8,
      Obediencia:10
    }
  }
  
  var huskySiberiano = {
    nome: "Husky Siberiano",
    imagem:"https://static1.patasdacasa.com.br/articles/9/24/39/@/10713-o-husky-siberiano-tem-maior-predisposica-articles_media_mobile-1.jpg",
    atributos:{
      Peso_Kg:27,
      Agilidade:8,
      Obediencia:5
      }
  }
  
  var dalmata = {
    nome: "Dálmata",
    imagem:"https://i.pinimg.com/originals/6e/81/f6/6e81f664b46fff915879f8c24f849d0d.jpg",
    atributos:{
      Peso_Kg:58,
      Agilidade:7,
      Obediencia:6
      }
  }
  
  var saoBernardo = {
    nome: "São Bernardo",
    imagem:"https://blog.geracaopet.com.br/wp-content/uploads/2017/05/sao-bernardo.jpg",
    atributos:{
      Peso_Kg:110,
      Agilidade:6,
      Obediencia:3
      }
  }
  
  var poodleToy = {
    nome: "Poodle Toy",
    imagem:"https://www.soscaopanheiros.com.br/blog/wp-content/uploads/2019/09/Poodle-cachorro.jpg",
    atributos:{
      Peso_Kg:7,
      Agilidade:4,
      Obediencia:8
    }
  }
  
  var chowchow = {
    nome: "Chow Chow",
    imagem:"https://www.petlove.com.br/images/breeds/193530/profile/original/chow_chow-p.jpg?1532538839",
    atributos:{
      Peso_Kg:32,
      Agilidade:10,
      Obediencia:1
    }
  }
  
  var cardNPC
  var cardJogador
  var baralho = [chowchow, poodleToy, saoBernardo, dalmata, huskySiberiano, pastorAlemao, labrador, pitBull]
  
  var baralhoJogador = [];
  var baralhoNPC = [];
  var winJogador = 0;
  var winNPC = 0;
  function qCartas(){
    var qCartas = document.getElementById("quantidade-cartas");
    var nRodadas = (baralho.length / 2);
    var texto = "<p>O baralho tem "+ baralho.length + " cartas e "+ nRodadas +" rodadas sobrando</p>"
    qCartas.innerHTML = texto;
  }
  
  function placar(){
    var placar = document.getElementById("placar");
    var placarTexto = "<strong>Jogador "+ winJogador +"|"+ winNPC +" NPC</strong>";
    placar.innerHTML = placarTexto;
  }
  
  function sortearCarta() {
    var nCartaNPC = parseInt(Math.random() * baralho.length)
    cardNPC = baralho[nCartaNPC];
    baralho.splice(nCartaNPC,1);
  
    var nCartaJogador = parseInt(Math.random() * baralho.length)
    cardJogador = baralho[nCartaJogador];
    baralho.splice(nCartaJogador,1);
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador();
    placar();
    qCartas();
  }
  
  function exibeCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage = `url(${cardJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cardJogador.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cardJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cardJogador.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
  
      divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function exibeCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage = `url(${cardNPC.imagem})`
      var nome = `<p class="carta-subtitle">${cardNPC.nome}</p>`
      var opcoesTexto = ""
  
      for (var i in cardNPC.atributos) {
          opcoesTexto += "<p type='text' name='atributo' value='" + i + "'>" + i + " " + cardNPC.atributos[i] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status --spacing'>"
  
      divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function jogar() {
      document.getElementById("msgErro").innerHTML="";
    var radio = document.getElementsByName("atributo");
    var naoSelecionou = 0;
    var opcao = "";
    for (var i=0;i<radio.length;i++){
      if(radio[i].checked){
        opcao =  radio[i].value;
        compararCard(opcao);
      }else{
        naoSelecionou = naoSelecionou + 1;
      }
    }
    if (naoSelecionou == radio.length){
      document.getElementById("msgErro").innerHTML="selecione uma opção";
    }
  }
  
  function compararCard(opcao){
    var divResultado = document.getElementById("resultado");
    var valorJogador = cardJogador.atributos[opcao];
    var valorNPC = cardNPC.atributos[opcao];
  
      if (valorJogador > valorNPC) {
          htmlResultado = '<p class="resultado-final">A sua Carta ganhou! Ela tinha '+ opcao +' mais forte</p>';
        baralhoJogador.push(cardJogador);
        baralhoJogador.push(cardNPC);
        winJogador = winJogador + 1;
      } else if (valorJogador < valorNPC) {
          htmlResultado = '<p class="resultado-final">A sua Carta perdeu! A carta do NPC tinha '+ opcao +' mais forte</p>';
        winNPC = winNPC + 1;
        baralhoNPC.push(cardNPC);
        baralhoNPC.push(cardJogador);
      } else if (valorJogador == valorNPC){
          htmlResultado = '<p class="resultado-final">Empataram! Ambas tinham '+ opcao +' iguais</p>';
        winJogador = winJogador + 1;
        winNPC = winNPC + 1;
        baralhoNPC.push(cardNPC);
        baralhoJogador.push(cardJogador);
      }
  
      divResultado.innerHTML = htmlResultado
      exibeCartaMaquina()
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnProximaRodada").disabled = false;
  }
  
  function proximaRodada(){
    document.getElementById("carta-maquina").innerHTML = "";
    document.getElementById("carta-maquina").style.backgroundImage = `url(${""})`;
    document.getElementById("carta-jogador").innerHTML = "";
     document.getElementById("carta-jogador").style.backgroundImage = `url(${""})`;
    document.getElementById("resultado").innerHTML = "";
    if (baralho.length != 0 ){
      placar();
      qCartas();
      document.getElementById("btnSortear").disabled = false;
      document.getElementById("btnProximaRodada").disabled = true; 
    }else if (baralho.length == 0){
      document.getElementById("tudo").innerHTML = "";
      final();
    }
  }
  
  function final(){
    var tudo = document.getElementById("tudo");
    
    if (winJogador>winNPC){
      tudo.innerHTML +="<h2>O jogo acabou! Quem ganhou foi Você!</h2>"
    }
    else if (winJogador<winNPC){
      tudo.innerHTML +="<h2>O jogo acabou! Quem ganhou foi o NPC!</h2>"
    }else{
      tudo.innerHTML +="<h2>O jogo acabou! Quem ganhou foi o NPC!</h2>"
    }
    tudo.innerHTML += "<h3> Para jogar novamente recarregue a pagina!</h3>";
    
    var placar = "<strong>Jogador "+ winJogador +"|"+ winNPC +" NPC</strong>";
    tudo.innerHTML += placar;
    var textoBaralho = "<p>Baralho do NPC tem "+baralhoNPC.length+ " cartas. | Baralho do Jogador tem "+ baralhoJogador.length +" cartas.</p>";
    tudo.innerHTML += textoBaralho;
  }
  
  
  