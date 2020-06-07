function pegarDados() {

    fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(
        data => {
            console.log(data);
            data.forEach( fotos => {
                let novoElementoIMG = document.createElement('img');
                novoElementoIMG.id = fotos.id;
                novoElementoIMG.src = fotos.download_url;
                novoElementoIMG.author = fotos.author;
                novoElementoIMG.className = "col-sm-4 ";
                document.getElementById("listaFotos").appendChild(novoElementoIMG);
           })
        }
    )
    .catch( err => { console.log('Apresentou erro: ' + err.message);});
}
