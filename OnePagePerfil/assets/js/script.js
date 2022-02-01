// executa um bloco de código ou funções, quando o scroll é feito na janela.
window.onscroll = function(oEvent) {
    var posicaoAtual = document.documentElement.scrollTop;
    // alert(posicaoAtual);
    if (posicaoAtual >= 350) {
        // Seleção usando jquery (neste caso estamos selecionando por "class" e mostrando o conteúdo da classe)
        $(".botoes-flutuantes").show("slow");
        $(".nav-scroll").show("slow");
        // Seleção usando javascript puro (neste caso estamos selecionando por "class" e mostrando o conteúdo da classe)
        // document.querySelector(".botoes-flutuantes").style.display = "flex";

    } else {
        $(".botoes-flutuantes").hide("slow");
        // $(".nav-scroll").hide("slow");
        // document.querySelector(".botoes-flutuantes").style.display = "none";

    }
}


// Função que envia e-mail

function enviarEmail() {

    var quebraDeLinha = '%0D%0A';

    var body = 'Nome: ' + escape(document.getElementById('id_nome').value) + quebraDeLinha +
        'Telefone: ' + escape(document.getElementById('id_telefone').value) + quebraDeLinha +
        'E-mail: ' + escape(document.getElementById('id_email').value) + quebraDeLinha +
        'Mensagem: ' + escape(document.getElementById('id_mensagem').value);


    var link = "mailto:developer.fernanda.ingrid@gmail.com" +
        "?cc=" + // Nessa linha pode ser adicionado um BCC OU CC que é (um ou mais email para serem enviados a mensagem, aqui pode ser adicionado diversos emails exemplo ->  "?cc=wesley@gmail.com , wesley55@gmail.com" +    ... Mantive sem email para que me mandesse apenas para um email que é o mailton)
        "&subject=" + escape("Formulário do Git") + // Aqui é meu assunto do email, posso definilo ou deixa-lo em branco, tanto faz
        "&body=" + body; // Aqui defino o comentário/texto do meu email

    window.location.href = link; //isso aqui é como fosse um return, ele retorna a variavel que está recebendo as caracteristicas do email
}


$(function(){
    $("a[href='#nav']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
})