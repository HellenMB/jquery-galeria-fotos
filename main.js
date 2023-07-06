$(document).ready(function() {
    // Quando o botão no cabeçalho for clicado
    $('header button').click(function() {
        // Desliza para baixo para mostrar o formulário
        $('form').slideDown();
    });

    // Quando o botão de cancelar for clicado
    $('#botao-cancelar').click(function() {
        // Desliza para cima para ocultar o formulário
        $('form').slideUp();
    });

    // Quando o formulário for submetido
    $('form').on('submit', function(e) {
        // Impede o comportamento padrão de enviar o formulário
        e.preventDefault();

        // Obtém o valor do campo de entrada do endereço da nova imagem
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();

        // Cria um novo elemento <li> com estilo de exibição oculto
        const novoItem = $('<li style="display: none;"></li>');

        // Cria uma nova imagem com o endereço especificado e a insere dentro do elemento novoItem
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);

        // Cria um novo elemento <div> com uma âncora que exibe o endereço da imagem em tamanho real
        // e insere esse elemento dentro do elemento novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);

        // Insere o elemento novoItem dentro do elemento <ul>
        $(novoItem).appendTo('ul');

        // Faz o elemento novoItem desvanecer-se para torná-lo visível gradualmente em 1 segundo
        $(novoItem).fadeIn(1000);

        // Limpa o valor do campo de entrada do endereço da nova imagem
        $('#endereco-imagem-nova').val('');
    });
});
