var $modal = document.getElementById('modal');

document.getElementById('abrirPostar').addEventListener('click', function() {
    $modal.style.display = 'block';
});

document.getElementById('fecharPostar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

function addPost() {
    var lista = document.getElementById('posts');
    var novoItem = document.createElement('li');
    var novoDiv = document.createElement('div');
    var novoTitulo = document.createElement('h2');
    var novaData = document.createElement('p');
    var novaDescricao = document.createElement('p');
    
    novoTitulo.textContent = document.getElementById('input-titulo').value;
    novaData.textContent = 'Data: ' + new Date().toLocaleDateString();
    novaDescricao.textContent = document.getElementById('input-descricao').value;

    novoDiv.appendChild(novoTitulo);
    novoDiv.appendChild(novaData);
    novoDiv.appendChild(novaDescricao);

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