$.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/',
    method: 'GET',
    data: {},
    success: function(data, status) {
        var pokemonArray = [];
        for (pokemon of data.results) {
            $.ajax({
                url: pokemon.url,
                method: 'GET',
                data: {},
                success: function(pokemonData) {
                    pokemonArray.push(pokemonData);
                    if (pokemonArray.length === data.results.length) {
                        pokemonArray.sort((a, b) => a.id - b.id);
                        for (var i = 0; i < pokemonArray.length; i++) {
                            var pokemonData = pokemonArray[i];
                            var card = `<div class="col-md-4 mb-4">
                                <div class="card">
                                    <a href='./character.html?id=${pokemonData.id}'>
                                        <img src="${pokemonData.sprites.front_default}" class="card-img-top" alt="${pokemonData.name}">
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title">${pokemonData.name}</h5>
                                    </div>
                                </div>
                            </div>`;
                            $('#pokemonList').append(card);
                        }
                    }
                }
            });
        }
    },
    error: function(status) {
        console.log(status);
    }
});