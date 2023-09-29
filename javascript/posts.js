document.getElementById("modal-content").addEventListener("submit", function (event) {
    addPost(event);
});

function showPost(id, titulo, data, desc) {
    var novoItem = document.createElement('dt');
    var novoDiv = document.createElement('div');
    var novoTitulo = document.createElement('h2');
    var novaData = document.createElement('p');
    var novaDescricao = document.createElement('p');
    var novoExcluir = document.createElement('a');
    var novaLixeira = document.createElement('img');

    novoTitulo.textContent = titulo;
    novaData.textContent = data;
    novaDescricao.textContent = desc;

    novaLixeira.src = './assets/trash-regular-24.png'
    novaLixeira.alt = 'Lixeira';    
    novoExcluir.appendChild(novaLixeira);

    novoExcluir.setAttribute("onclick", "deletePosts(this)");

    novaDescricao.classList.add('post-des')
    novaData.classList.add('post-data');

    novoDiv.appendChild(novoTitulo);
    novoDiv.appendChild(novaData);
    novoDiv.appendChild(novaDescricao);
    novoDiv.appendChild(novoExcluir);

    novoDiv.classList.add('post');
    // Adicionar a div ao item da lista
    novoItem.id = id;
    novoItem.appendChild(novoDiv);

    return novoItem;
}

//Verificar limite de caracteres da descricao
document.getElementById('input-titulo').addEventListener('input', function() {
    var descricao = this.value;
    var contador = 30 - descricao.length;
    var contadorElement = document.getElementById('contador-caracteres');
    contadorElement.textContent = contador + ' caracteres restantes';

    if (contador < 0) {
        contadorElement.style.color = 'red';
        document.getElementById('submit').disabled = true;
    } else {
        contadorElement.style.color = 'inherit';
        document.getElementById('submit').disabled = false;
    }
});

function addPost(e) {
    e.preventDefault();
    var lista = document.getElementById('posts');

    var post_id = savePost(document.getElementById('input-titulo').value, new Date().toLocaleDateString(), document.getElementById('input-descricao').value);

    var novoItem = showPost(post_id, document.getElementById('input-titulo').value, new Date().toLocaleDateString(), document.getElementById('input-descricao').value);
    
    // Adicionar item à lista
    lista.appendChild(novoItem);
}

function deletePosts(botao) {
    var divPaiId = botao.parentElement.parentElement.id;
    var divPai = botao.parentElement.parentElement;
    divPai.remove();

    localStorage.removeItem(`Postagem_${divPaiId}`);
}

let lastPostId = 0;

const postagem = {
    id: 0,
    titulo: "",
    data: "",
    desc: ""
};
  

function savePost(titulo, data, desc) {
    const novaPostagem = {
        id: lastPostId++,
        titulo: titulo,
        data: data,
        desc: desc
    };
    
    localStorage.setItem(`Postagem_${novaPostagem.id}`, JSON.stringify(novaPostagem));

    return novaPostagem.id;
}

document.addEventListener("DOMContentLoaded", function() {
    
    Object.entries(localStorage).forEach(([key, value]) => {

        if (/^Postagem_\d+$/.test(key)) {

            const postagem = JSON.parse(value);

            var novoItem = showPost(key.split('_')[1], postagem.titulo, postagem.data, postagem.desc);

            document.getElementById('posts').appendChild(novoItem);

        }

    });

});
  
//


function converterData(dataNoFormatoAAAAMMDD) {
    if(dataNoFormatoAAAAMMDD===''){
        return '';
    }
    var partes = dataNoFormatoAAAAMMDD.split("-");
    var ano = partes[0];
    var mes = partes[1];
    var dia = partes[2];
    var dataFormatada = dia + "/" + mes + "/" + ano;
    return dataFormatada;
  }

document.getElementById("busca").addEventListener("submit", function (event) {
    buscar(event);
});


function buscar(e) {
    e.preventDefault();

    document.getElementById("buscado").innerHTML = '';

    var nome = document.getElementById("pesquisaNome").value.toLowerCase();
    var data = converterData(document.getElementById("pesquisaData").value);

    Object.entries(localStorage).forEach(([key, value]) => {
        if (/^Postagem_\d+$/.test(key)) {
            const postagem = JSON.parse(value);

            const titulo = postagem.titulo.toLowerCase();
            
            if(nome !== '' && data !== '') {

                console.log(postagem.data);
                console.log(data);
                if (titulo.includes(nome) && postagem.data === data) {
                    var novoItem = showPost(key.split('_')[1], postagem.titulo, postagem.data, postagem.desc);
                    document.getElementById('buscado').appendChild(novoItem);
                }

            } else if (nome === '' && data !== '') {

                if (postagem.data === data) {
                    var novoItem = showPost(key.split('_')[1], postagem.titulo, postagem.data, postagem.desc);
                    document.getElementById('buscado').appendChild(novoItem);
                }

            } else if (nome !== '' && data === '') {

                if (titulo.includes(nome)) {
                    var novoItem = showPost(key.split('_')[1], postagem.titulo, postagem.data, postagem.desc);
                    document.getElementById('buscado').appendChild(novoItem);
                }
            }
        }
    });
}