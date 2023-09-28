var $modal = document.getElementById('modal');

document.getElementById('abrirPostar').addEventListener('click', function() {
    $modal.style.display = 'block';
});

document.getElementById('fecharPostar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

function addPost() {
    var lista = document.getElementById('posts');
    var novoItem = document.createElement('dt');
    var novoDiv = document.createElement('div');
    var novoTitulo = document.createElement('h2');
    var novaData = document.createElement('p');
    var novaDescricao = document.createElement('p');

    novoTitulo.textContent = document.getElementById('input-titulo').value;
    novaData.textContent = new Date().toLocaleDateString();
    novaDescricao.textContent = document.getElementById('input-descricao').value;

    var novoExcluir = document.createElement('a');
    var novaLixeira = document.createElement('img');

    novaLixeira.src = '/assets/trash-regular-24.png'
    novaLixeira.alt = 'Lixeira';    
    novoExcluir.appendChild(novaLixeira);

    novoExcluir.addEventListener("click", function deletePosts(this){
        var divPai = this.parentElement;
        divPai.remove();
    });

    novaData.classList.add('post-data');

    novoDiv.appendChild(novoTitulo);
    novoDiv.appendChild(novaData);
    novoDiv.appendChild(novaDescricao);
    novoDiv.appendChild(novoExcluir);

    novoDiv.classList.add('post');
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