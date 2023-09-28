document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('fecharModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

function addPost() {
    var lista = document.getElementById('posts');
    var novoItem = document.createElement('li');
    var novoDiv = document.createElement('div');
    var novoTitulo = document.createElement('h2');
    var novaData = document.createElement('p');
    var novoConteudo = document.createElement('p');
    
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    // Adicione aqui o código para inserir a postagem na lista

    novoTitulo.textContent = 'Título do Item';
    novaData.textContent = 'Data: ' + new Date().toLocaleDateString();
    novoConteudo.textContent = 'Conteúdo do Item';

    novoDiv.appendChild(novoTitulo);
    novoDiv.appendChild(novaData);
    novoDiv.appendChild(novoConteudo);

    // Adicionar a div ao item da lista
    novoItem.appendChild(novoDiv);

    // Adicionar item à lista
    lista.appendChild(novoItem);

}

function searchPosts() {
    var query = document.getElementById('search-query').value;
    // Adicione aqui o código para buscar as postagens
    closeDialog('search-dialog');
}

function deletePost(postId) {
    // Adicione aqui o código para excluir a postagem com o ID 'postId'
}