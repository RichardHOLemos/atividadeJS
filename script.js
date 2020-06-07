    var receita = {
            titulo: 'Receita',
            porcoes: 2,
            ingredientes: ['cacau','leite','manteiga']
        }

    console.log(receita);

    var livro = [{
        titulo: 'livro1',
        autor: 'Richard',
        livroLido: false
        },{
        titulo: 'livro2',
        autor: 'Marcelo',
        livroLido: false
        },{
        titulo: 'livro3',
        autor: 'Lucas',
        livroLido: true
        },{
        titulo: 'livro4',
        autor: 'Benito',
        livroLido: false
    }]

    console.log(livro);

    livro.forEach( livros => {
        console.log(livros.titulo);
        console.log(livros.autor);
    })

    livro.forEach( livros => {
        if (livros.livroLido)
            console.log("Voce leu esse livro: " + livros.titulo + ", autor: " + livros.autor );
        else
            console.log("Voce nao leu esse livro: " + livros.titulo + ", autor: " + livros.autor );
    })


    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then( data => { console.log(data) })
    .catch( err => { console.log('Apresentou erro: ' + err.message);});


    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then( data => { console.log('<img src="' + data.message + '" alt="Random Photo of a Dog" />') })
    .catch( err => { console.log('Apresentou erro: ' + err.message);});

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then( data => { 
        let novoElemento = document.createElement('img');
        novoElemento.src = data.message;
        novoElemento.alt = "Random Photo of a Dog";
        novoElemento.style = "width: 500px";
        document.getElementById("imageRandom").appendChild(novoElemento)})
    .catch( err => { console.log('Apresentou erro: ' + err.message);});
