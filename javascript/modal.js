document.getElementById('abrirPostar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('fecharPostar').addEventListener('click', function() {
    document.getElementById('input-titulo').value = '';
    document.getElementById('input-descricao').value = '';
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('abrirPesquisa').addEventListener('click', function() {
    document.getElementById('busca').style.display = 'block';
});

document.getElementById('fecharPesquisa').addEventListener('click', function() {

    document.getElementById('pesquisaNome').value = '';
    document.getElementById('pesquisaData').value = '';
    document.getElementById('buscado').innerHTML = '';
    document.getElementById('busca').style.display = 'none';
});