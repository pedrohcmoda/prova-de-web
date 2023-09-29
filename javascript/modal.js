document.getElementById('abrirPostar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('fecharPostar').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('abrirPesquisa').addEventListener('click', function() {
    document.getElementById('busca').style.display = 'block';
});

document.getElementById('fecharPesquisa').addEventListener('click', function() {
    document.getElementById('busca').style.display = 'none';
});